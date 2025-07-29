import { useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// For GitHub, you may need to implement OAuth flow manually or use a package

export function useAuth() {
    const [user, setUser] = useState<any>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Internet Identity login
    const logInInternetIdentity = async () => {
        setIsLoading(true);
        const authClient = await AuthClient.create();
        await authClient.login({
            identityProvider: "https://identity.ic0.app",
            onSuccess: async () => {
                setUser(authClient.getIdentity());
                setIsConnected(true);
                setIsLoading(false);
            },
            onError: () => setIsLoading(false),
        });
    };

    // Google login
    const logInGoogle = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            setUser(tokenResponse);
            setIsConnected(true);
        },
        onError: () => setIsLoading(false),
    });

    // GitHub login (pseudo-code, you may need to implement OAuth flow)
    const logInGitHub = () => {
        window.location.href = "https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID";
        // Handle redirect and token exchange in your app
    };

    const logOut = () => {
        setUser(null);
        setIsConnected(false);
    };

    return {
        user,
        isConnected,
        isLoading,
        logInInternetIdentity,
        logInGoogle,
        logInGitHub,
        logOut,
    };
}