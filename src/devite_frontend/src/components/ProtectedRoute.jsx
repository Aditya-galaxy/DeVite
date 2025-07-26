import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { devite_backend } from "../../../declarations/devite_backend";

function ProtectedRoute({ children, isAdmin = false }) {
  const { isAuthenticated, principal } = useAuth();
  const [hasAdminAccess, setHasAdminAccess] = useState(false);
  const [checking, setChecking] = useState(isAdmin);

  useEffect(() => {
    async function checkAdminStatus() {
      if (!isAuthenticated || !principal || !isAdmin) {
        setChecking(false);
        return;
      }

      try {
        const isAdminResult = await devite_backend.is_admin(principal);
        setHasAdminAccess(isAdminResult);
      } catch (error) {
        console.error("Error checking admin status:", error);
        setHasAdminAccess(false);
      } finally {
        setChecking(false);
      }
    }

    if (isAdmin) {
      checkAdminStatus();
    }
  }, [isAuthenticated, principal, isAdmin]);

  if (checking) {
    return <div className="loading">Checking permissions...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && !hasAdminAccess) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
