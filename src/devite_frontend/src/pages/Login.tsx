import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { logInInternetIdentity, logInGoogle, isConnected, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isConnected) {
            navigate("/dashboard");
        }
    }, [isConnected, navigate]);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-6">Sign In</h1>
                <div className="flex flex-col gap-4 w-full max-w-xs">
                    <Button
                        variant="hero"
                        size="lg"
                        className="bg-primary-solid shadow-glow"
                        onClick={logInInternetIdentity}
                        disabled={isLoading}
                    >
                        Login with Internet Identity
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                    {/* <Button
                        variant="outline"
                        size="lg"
                        className="border-2 shadow-glow"
                        onClick={logInGoogle}
                        disabled={isLoading}
                    >
                        Login with Google
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </Button> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;