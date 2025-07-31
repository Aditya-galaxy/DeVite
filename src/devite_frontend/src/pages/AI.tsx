import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, Filter, Cpu, Zap, Server, TrendingUp, Clock, Globe } from 'lucide-react';
import Header from '../components/layout/Header';

const AI: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedModel, setSelectedModel] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');

    const processingNodes = [
        {
            id: 1,
            name: 'DeepMind Cluster Alpha',
            region: 'North America',
            model: 'GPT-4 Turbo',
            capacity: '1,024 GPUs',
            availability: 87,
            costPerHour: 45.50,
            throughput: '2.3M tokens/sec',
            reliability: 99.8,
            stake: 450000,
            rewards: 12800,
            status: 'Online'
        },
        {
            id: 2,
            name: 'Quantum Research Hub',
            region: 'Europe',
            model: 'Claude-3 Opus',
            capacity: '768 TPUs',
            availability: 92,
            costPerHour: 38.20,
            throughput: '1.9M tokens/sec',
            reliability: 99.6,
            stake: 320000,
            rewards: 8900,
            status: 'Online'
        },
        {
            id: 3,
            name: 'Neural Network Farm',
            region: 'Asia Pacific',
            model: 'LLaMA-70B',
            capacity: '512 A100s',
            availability: 78,
            costPerHour: 32.10,
            throughput: '1.5M tokens/sec',
            reliability: 98.9,
            stake: 280000,
            rewards: 7200,
            status: 'Maintenance'
        },
        {
            id: 4,
            name: 'Distributed AI Network',
            region: 'Global',
            model: 'Mixtral-8x7B',
            capacity: '2,048 H100s',
            availability: 95,
            costPerHour: 52.80,
            throughput: '3.1M tokens/sec',
            reliability: 99.9,
            stake: 680000,
            rewards: 18500,
            status: 'Online'
        }
    ];

    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case 'Online': return 'default';
            case 'Maintenance': return 'secondary';
            case 'Offline': return 'destructive';
            default: return 'default';
        }
    };

    const filteredNodes = processingNodes.filter(node => {
        const matchesSearch = node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            node.region.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesModel = selectedModel === 'all' || node.model.toLowerCase().includes(selectedModel);
        const matchesRegion = selectedRegion === 'all' ||
            node.region.toLowerCase().includes(selectedRegion);

        return matchesSearch && matchesModel && matchesRegion;
    });

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container py-8 space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Decentralized AI Processing</h1>
                        <p className="text-muted-foreground">
                            Access distributed computing power for your AI research and development
                        </p>
                    </div>
                    <Button className="gradient-primary">
                        Deploy Computation
                    </Button>
                </div>

                {/* Network Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Server className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">1,247</p>
                            <p className="text-sm text-muted-foreground">Active Nodes</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Cpu className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">47.2K</p>
                            <p className="text-sm text-muted-foreground">Total GPUs</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">12.8M</p>
                            <p className="text-sm text-muted-foreground">Tokens/sec</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">99.1%</p>
                            <p className="text-sm text-muted-foreground">Uptime</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Filter className="h-5 w-5 mr-2" />
                            Filter Processing Nodes
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search nodes..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <Select value={selectedModel} onValueChange={setSelectedModel}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select AI model" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Models</SelectItem>
                                    <SelectItem value="gpt">GPT Models</SelectItem>
                                    <SelectItem value="claude">Claude Models</SelectItem>
                                    <SelectItem value="llama">LLaMA Models</SelectItem>
                                    <SelectItem value="mixtral">Mixtral Models</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Regions</SelectItem>
                                    <SelectItem value="north">North America</SelectItem>
                                    <SelectItem value="europe">Europe</SelectItem>
                                    <SelectItem value="asia">Asia Pacific</SelectItem>
                                    <SelectItem value="global">Global</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" className="w-full">
                                Reset Filters
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Node Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredNodes.map((node) => (
                        <Card key={node.id} className="hover-lift shadow-card">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-3">
                                        <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center">
                                            <Server className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-lg leading-tight">{node.name}</CardTitle>
                                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                                                <Globe className="h-3 w-3 mr-1" />
                                                {node.region}
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Model: {node.model}
                                            </p>
                                        </div>
                                    </div>
                                    <Badge variant={getStatusBadgeVariant(node.status) as any}>
                                        {node.status}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                                        <div className="flex items-center justify-center mb-1">
                                            <Cpu className="h-4 w-4 text-primary mr-1" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">Capacity</p>
                                        <p className="font-bold text-xs">{node.capacity}</p>
                                    </div>
                                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                                        <div className="flex items-center justify-center mb-1">
                                            <Zap className="h-4 w-4 text-secondary mr-1" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">Throughput</p>
                                        <p className="font-bold text-xs">{node.throughput}</p>
                                    </div>
                                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                                        <div className="flex items-center justify-center mb-1">
                                            <Clock className="h-4 w-4 text-accent mr-1" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">Availability</p>
                                        <p className="font-bold">{node.availability}%</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Cost per Hour:</span>
                                        <span className="text-sm font-medium">${node.costPerHour}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Reliability:</span>
                                        <span className="text-sm font-medium">{node.reliability}%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Total Stake:</span>
                                        <span className="text-sm font-medium">${node.stake.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Monthly Rewards:</span>
                                        <span className="text-sm font-medium">${node.rewards.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="pt-2 border-t space-y-2">
                                    <Button className="w-full" variant="hero" disabled={node.status !== 'Online'}>
                                        {node.status === 'Online' ? 'Connect to Node' : 'Unavailable'}
                                    </Button>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" className="flex-1">
                                            View Details
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex-1">
                                            Stake Tokens
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredNodes.length === 0 && (
                    <Card className="shadow-card">
                        <CardContent className="text-center py-12">
                            <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">No processing nodes found</h3>
                            <p className="text-muted-foreground">
                                Try adjusting your search criteria or check back later for available nodes.
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default AI;