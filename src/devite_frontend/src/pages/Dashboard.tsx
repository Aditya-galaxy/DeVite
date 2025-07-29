import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import StatCard from '../components/ui/StatCard';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useFlowAuth } from '../hooks/useFlowAuth';
import {
  DollarSign,
  Shield,
  TrendingUp,
  AlertTriangle,
  Plus,
  Eye,
  Brain,
  Bot,
  FileText,
  Cpu,
  Play,
  Settings,
  Upload,
  Download
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logIn, logOut, isLoading, isConnected } = useFlowAuth();
  // Research Copilot Mock Data
  const researcherStats = {
    totalProjects: '15',
    activeQueries: '8',
    processingJobs: '3',
    completedAnalyses: '127'
  };

  const computeStats = {
    totalNodes: '342',
    utilization: '78%',
    avgResponseTime: '2.3s',
    activeModels: '12'
  };

  const systemData = {
    status: 'Operational',
    uptime: '99.8%',
    activeConnections: 1247,
    dataProcessed: '45.2TB',
    modelsDeployed: 8,
    alerts: ['High compute usage', 'Model update available']
  };

  // Check if user is authenticated
  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        <Header
          onConnect={logIn}
          isConnected={isConnected}
          address={user?.addr}
        />
        <div className="container py-20">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">Access Restricted</h1>
            <p className="text-xl text-muted-foreground">
              Please sign in to access the research dashboard
            </p>
            <Button onClick={logIn} variant="hero" size="lg">
              Sign Up / Login
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        onConnect={logOut}
        isConnected={isConnected}
        address={user?.addr}
      />
      <div className="container py-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Research Copilot Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your research projects, compute resources, and AI model performance
            </p>
          </div>
          <div className="flex space-x-4">
            <Button variant="hero" size="lg">
              <Plus className="h-4 w-4 mr-2" />
              New Research Project
            </Button>
            <Button variant="outline" size="lg">
              <Bot className="h-4 w-4 mr-2" />
              Deploy Agent
            </Button>
          </div>
        </div>

        <Tabs defaultValue="farmer" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="farmer">Research View</TabsTrigger>
            <TabsTrigger value="lp">Compute View</TabsTrigger>
          </TabsList>

          <TabsContent value="farmer" className="space-y-6">
            {/* Research Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Projects"
                value={researcherStats.totalProjects}
                change="+3 this week"
                changeType="positive"
                icon={FileText}
                variant="accent"
              />
              <StatCard
                title="Active Queries"
                value={researcherStats.activeQueries}
                change="+2 running"
                changeType="positive"
                icon={Brain}
              />
              <StatCard
                title="Processing Jobs"
                value={researcherStats.processingJobs}
                change="In progress"
                changeType="neutral"
                icon={Cpu}
                variant="secondary"
              />
              <StatCard
                title="Completed Analyses"
                value={researcherStats.completedAnalyses}
                change="+15 today"
                changeType="positive"
                icon={TrendingUp}
              />
            </div>

            {/* System Status and Research Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>System Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-success">{systemData.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Uptime:</span>
                      <span className="font-medium">{systemData.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Connections:</span>
                      <span className="font-medium">{systemData.activeConnections}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Data Processed:</span>
                      <span className="font-medium">{systemData.dataProcessed}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-2">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Active Research Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Climate Impact Analysis', type: 'Data Analysis', compute: '85% GPU', status: 'Running' },
                        { name: 'Material Properties ML', type: 'Machine Learning', compute: '92% CPU', status: 'Training' },
                        { name: 'Drug Discovery Pipeline', type: 'AI Automation', compute: '76% GPU', status: 'Processing' }
                      ].map((project, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-card transition-smooth">
                          <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 gradient-primary rounded-lg flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {project.name[0]}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{project.name}</p>
                              <p className="text-sm text-muted-foreground">Type: {project.type}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="font-medium">{project.compute}</p>
                              <p className="text-sm text-muted-foreground">{project.status}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Settings className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Play className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lp" className="space-y-6">
            {/* Compute Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Nodes"
                value={computeStats.totalNodes}
                change="+12 added"
                changeType="positive"
                icon={DollarSign}
                variant="accent"
              />
              <StatCard
                title="Utilization"
                value={computeStats.utilization}
                change="+5.3%"
                changeType="positive"
                icon={TrendingUp}
              />
              <StatCard
                title="Avg Response Time"
                value={computeStats.avgResponseTime}
                change="-0.2s improved"
                changeType="positive"
                icon={Shield}
                variant="secondary"
              />
              <StatCard
                title="Active Models"
                value={computeStats.activeModels}
                change="+3 deployed"
                changeType="positive"
                icon={TrendingUp}
              />
            </div>

            {/* Compute Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Network Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Compute Revenue</span>
                      <span className="font-semibold text-success">+$42,300</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Infrastructure Costs</span>
                      <span className="font-semibold text-destructive">-$18,900</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Token Rewards</span>
                      <span className="font-semibold text-success">+$8,450</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Net Performance</span>
                        <span className="font-bold text-success">+$31,850</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Resource Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>AI Training</span>
                        <span>45%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Data Analysis</span>
                        <span>35%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-2 bg-secondary rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Available</span>
                        <span>20%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-2 bg-accent rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-card hover-lift cursor-pointer">
            <CardContent className="p-6 text-center">
              <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Upload Dataset</h3>
              <p className="text-sm text-muted-foreground">Upload research data for AI analysis</p>
            </CardContent>
          </Card>
          <Card className="shadow-card hover-lift cursor-pointer">
            <CardContent className="p-6 text-center">
              <Bot className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Create AI Agent</h3>
              <p className="text-sm text-muted-foreground">Deploy custom research agents</p>
            </CardContent>
          </Card>
          <Card className="shadow-card hover-lift cursor-pointer">
            <CardContent className="p-6 text-center">
              <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Train Model</h3>
              <p className="text-sm text-muted-foreground">Train ML models on research data</p>
            </CardContent>
          </Card>
          <Card className="shadow-card hover-lift cursor-pointer">
            <CardContent className="p-6 text-center">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Export Results</h3>
              <p className="text-sm text-muted-foreground">Download analysis and insights</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;