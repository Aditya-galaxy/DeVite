import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StatCard from '@/components/ui/StatCard';
import { useFlowAuth } from '@/hooks/useFlowAuth';
import {
  ArrowRight,
  Brain,
  Database,
  Cpu,
  BarChart3,
  Microscope,
  Network,
  Zap,
  Bot,
  FileText,
  TestTube,
  GitBranch
} from 'lucide-react';

const Index = () => {
  const { user, logIn, logOut, isLoading, isConnected } = useFlowAuth();

  // Mock data for the research copilot
  const researchStats = {
    modelsDeployed: '847',
    activeAgents: '1,243',
    researchPapers: '156K',
    computeNodes: '2,156'
  };

  const features = [
    {
      icon: Brain,
      title: 'AI Research Assistant',
      description: 'Advanced LLM-powered agent that understands complex research methodologies and scientific literature'
    },
    {
      icon: Database,
      title: 'Decentralized Data Analysis',
      description: 'Distributed computing network for processing large datasets with blockchain-verified results'
    },
    {
      icon: TestTube,
      title: 'Automated Testing',
      description: 'AI-driven automation of physical experiments and architectural testing processes'
    },
    {
      icon: FileText,
      title: 'Paper Analysis & Training',
      description: 'Train models on research papers and generate insights from scientific literature'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header
        onConnect={logIn}
        isConnected={isConnected}
        address={user?.addr}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="animate-pulse-glow">
                  Powered by Decentralized AI
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  DeVite{' '}
                  <span className="text-primary">
                    Research Platform
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Decentralized AI research platform with blockchain-based data sovereignty,
                  NFT intellectual property ownership, and distributed AI processing for scientific discovery.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  className="animate-float shadow-glow"
                  onClick={() => window.location.href = isConnected ? '/dashboard' : '#'}
                  disabled={!isConnected}
                >
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-2 hover:shadow-card"
                  onClick={() => window.location.href = isConnected ? '/dashboard' : '#'}
                  disabled={!isConnected}
                >
                  Deploy Agent
                </Button>
              </div>
              {!isConnected && (
                <p className="text-sm text-muted-foreground">
                  Please sign in to access the research platform
                </p>
              )}

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{researchStats.modelsDeployed}</p>
                  <p className="text-sm text-muted-foreground">Models Deployed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">{researchStats.activeAgents}</p>
                  <p className="text-sm text-muted-foreground">Active Agents</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">{researchStats.researchPapers}</p>
                  <p className="text-sm text-muted-foreground">Papers Analyzed</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="shadow-glow border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bot className="h-5 w-5 mr-2 text-primary" />
                    AI Agent Console
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-secondary/5 p-4 rounded-lg border">
                    <code className="text-sm text-primary">
                      {">"} Analyzing research dataset...
                    </code>
                  </div>
                  <div className="bg-muted p-3 rounded text-sm">
                    <span className="text-accent font-medium">Agent-001:</span> Processing 1,247 papers on quantum computing
                  </div>
                  <div className="bg-muted p-3 rounded text-sm">
                    <span className="text-primary font-medium">Validator:</span> Blockchain verification complete ✓
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-success" />
                    Recent Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">Paper analysis completed</span>
                    </div>
                    <span className="text-sm font-medium">2.3k papers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TestTube className="h-4 w-4 text-accent" />
                      <span className="text-sm">Experiment automated</span>
                    </div>
                    <span className="text-sm font-medium">Lab Protocol #47</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Network className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Node deployment</span>
                    </div>
                    <span className="text-sm font-medium">GPU Cluster</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="AI Models Deployed"
              value={researchStats.modelsDeployed}
              change="+127 this week"
              changeType="positive"
              icon={Brain}
              variant="accent"
            />
            <StatCard
              title="Active AI Agents"
              value={researchStats.activeAgents}
              change="+23% uptime"
              changeType="positive"
              icon={Bot}
            />
            <StatCard
              title="Papers Processed"
              value={researchStats.researchPapers}
              change="Auto-indexed"
              changeType="neutral"
              icon={FileText}
              variant="secondary"
            />
            <StatCard
              title="Compute Nodes"
              value={researchStats.computeNodes}
              change="+8.7% efficiency"
              changeType="positive"
              icon={Cpu}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose Our Research Copilot?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Harness the power of decentralized AI to accelerate scientific discovery,
              automate complex research processes, and validate experimental results with blockchain security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift shadow-card border-primary/10">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Ready to Revolutionize Your Research?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Deploy AI agents on our decentralized network and experience the future of scientific research today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="text-primary"
                onClick={() => window.location.href = isConnected ? '/dashboard' : '#'}
                disabled={!isConnected}
              >
                Launch Copilot
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.location.href = isConnected ? '/dashboard' : '#'}
                disabled={!isConnected}
              >
                View Agents
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;