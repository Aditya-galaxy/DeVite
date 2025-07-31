import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { useGoogleLogin } from "@react-oauth/google";

type AuthUser = {
    principal?: string; // Internet Identity
    google?: any;       // Google
};

type AuthContextType = {
    user: AuthUser | null;
    isConnected: boolean;
    isLoading: boolean;
    logInInternetIdentity: () => Promise<void>;
    logInGoogle: () => void;
    logOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(() => {
        const stored = localStorage.getItem("authUser");
        return stored ? JSON.parse(stored) : null;
    });
    const [isConnected, setIsConnected] = useState(() => {
        const stored = localStorage.getItem("isConnected");
        return stored === "true";
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        localStorage.setItem("authUser", JSON.stringify(user));
        localStorage.setItem("isConnected", isConnected ? "true" : "false");
    }, [user, isConnected]);

    // Internet Identity login
    const logInInternetIdentity = async () => {
        setIsLoading(true);
        const authClient = await AuthClient.create();
        await authClient.login({
            identityProvider: "https://identity.ic0.app",
            onSuccess: async () => {
                setUser({ principal: authClient.getIdentity().getPrincipal().toText() });
                setIsConnected(true);
                setIsLoading(false);
            },
            onError: () => setIsLoading(false),
        });
    };

    // Google login
    const logInGoogle = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            setUser({ google: tokenResponse });
            setIsConnected(true);
        },
        onError: () => setIsLoading(false),
    });

    const logOut = () => {
        setUser(null);
        setIsConnected(false);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isConnected,
                isLoading,
                logInInternetIdentity,
                logInGoogle,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};