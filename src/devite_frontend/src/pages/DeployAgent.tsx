import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as agentIdl, canisterId as agentCanisterId } from "../../../declarations/ai_agent_backend";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";

const MODEL_OPTIONS = [
    { value: { Llama3_1_8B: null }, label: "Llama 3.1 8B" },
    { value: { Qwen3_32B: null }, label: "Qwen 3 32B" },
    { value: { Llama4Scout: null }, label: "Llama 4 Scout" },
];

const DeployAgent: React.FC = () => {
    const { isConnected } = useAuth();
    const [selectedModel, setSelectedModel] = useState(MODEL_OPTIONS[0].value);
    const [deployStatus, setDeployStatus] = useState<string | null>(null);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Deploy agent
    const handleDeploy = async () => {
        setDeployStatus("Deploying...");
        try {
            const agent = new HttpAgent();
            if (process.env.DFX_NETWORK === "local" || !process.env.DFX_NETWORK) {
                await agent.fetchRootKey();
            }
            const actor = Actor.createActor(agentIdl, { agent, canisterId: agentCanisterId });
            const result = await actor.deploy_agent(selectedModel);
            if ("Ok" in result) {
                setDeployStatus("Agent deployed successfully!");
            } else {
                setDeployStatus(`Error: ${result.Err}`);
            }
        } catch (e) {
            setDeployStatus(`Error: ${e}`);
        }
    };

    // Prompt model
    const handlePrompt = async () => {
        setLoading(true);
        setResponse(null);
        try {
            const agent = new HttpAgent();
            if (process.env.DFX_NETWORK === "local" || !process.env.DFX_NETWORK) {
                await agent.fetchRootKey();
            }
            const actor = Actor.createActor(agentIdl, { agent, canisterId: agentCanisterId });
            const result = await actor.prompt_model(selectedModel, prompt);
            if ("Ok" in result) {
                setResponse(result.Ok);
            } else {
                setResponse(`Error: ${result.Err}`);
            }
        } catch (e) {
            setResponse(`Error: ${e}`);
        }
        setLoading(false);
    };

    if (!isConnected) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold mb-4">Please sign in to deploy and use an AI agent.</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-6">Deploy & Use AI Agent</h1>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Choose Model:</label>
                    <select
                        className="border rounded px-4 py-2"
                        value={JSON.stringify(selectedModel)}
                        onChange={e => setSelectedModel(JSON.parse(e.target.value))}
                    >
                        {MODEL_OPTIONS.map(opt => (
                            <option key={opt.label} value={JSON.stringify(opt.value)}>{opt.label}</option>
                        ))}
                    </select>
                </div>
                <Button onClick={handleDeploy} className="mb-6">Deploy Agent</Button>
                {deployStatus && <div className="mb-6">{deployStatus}</div>}
                <textarea
                    className="border rounded px-4 py-2 mb-4 w-full max-w-lg"
                    rows={4}
                    placeholder="Enter your prompt..."
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                />
                <Button onClick={handlePrompt} disabled={loading || !prompt}>
                    {loading ? "Querying..." : "Send Prompt"}
                </Button>
                {response && (
                    <div className="mt-6 p-4 border rounded bg-muted w-full max-w-lg">
                        <strong>Response:</strong>
                        <div className="whitespace-pre-wrap mt-2">{response}</div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default DeployAgent;