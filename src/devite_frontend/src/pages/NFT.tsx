import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, Filter, Shield, Award, FileText, DollarSign, Zap, Clock } from 'lucide-react';
import Header from '../components/layout/Header';

const NFT: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const intellectualProperties = [
        {
            id: 1,
            title: 'Quantum Error Correction Algorithm',
            type: 'Algorithm',
            owner: 'Dr. Sarah Chen',
            institution: 'MIT Quantum Lab',
            value: 850000,
            royalties: 12500,
            status: 'Active',
            licensees: 8,
            tokenId: 'QEC-2024-001',
            verifications: 47,
            citations: 156
        },
        {
            id: 2,
            title: 'Novel Protein Folding Prediction Model',
            type: 'AI Model',
            owner: 'Dr. Michael Rodriguez',
            institution: 'Stanford Bio-AI',
            value: 1200000,
            royalties: 18750,
            status: 'Active',
            licensees: 12,
            tokenId: 'PFP-2024-002',
            verifications: 62,
            citations: 203
        },
        {
            id: 3,
            title: 'Decentralized Research Methodology Framework',
            type: 'Methodology',
            owner: 'Dr. Emma Thompson',
            institution: 'Oxford Research Institute',
            value: 650000,
            royalties: 9200,
            status: 'Pending',
            licensees: 5,
            tokenId: 'DRM-2024-003',
            verifications: 23,
            citations: 89
        },
        {
            id: 4,
            title: 'Climate Data Analysis Pipeline',
            type: 'Software',
            owner: 'Dr. Alex Kumar',
            institution: 'CERN Data Science',
            value: 950000,
            royalties: 14300,
            status: 'Active',
            licensees: 15,
            tokenId: 'CDA-2024-004',
            verifications: 38,
            citations: 127
        }
    ];

    const getTypeBadgeVariant = (type: string) => {
        switch (type) {
            case 'Algorithm': return 'default';
            case 'AI Model': return 'secondary';
            case 'Methodology': return 'outline';
            case 'Software': return 'destructive';
            default: return 'default';
        }
    };

    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case 'Active': return 'default';
            case 'Pending': return 'secondary';
            case 'Disputed': return 'destructive';
            default: return 'default';
        }
    };

    const filteredIPs = intellectualProperties.filter(ip => {
        const matchesSearch = ip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ip.owner.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'all' || ip.type.toLowerCase().includes(selectedType);
        const matchesStatus = selectedStatus === 'all' || ip.status.toLowerCase() === selectedStatus;

        return matchesSearch && matchesType && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container py-8 space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">NFT-Based IP Ownership</h1>
                        <p className="text-muted-foreground">
                            Secure, transparent intellectual property rights on the blockchain
                        </p>
                    </div>
                    <Button className="gradient-primary">
                        Register New IP
                    </Button>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">2,847</p>
                            <p className="text-sm text-muted-foreground">Protected IPs</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <DollarSign className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">$12.4M</p>
                            <p className="text-sm text-muted-foreground">Total Value Locked</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Award className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">156</p>
                            <p className="text-sm text-muted-foreground">Active Licenses</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">98.7%</p>
                            <p className="text-sm text-muted-foreground">Verification Rate</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Filter className="h-5 w-5 mr-2" />
                            Filter Intellectual Properties
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search IPs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <Select value={selectedType} onValueChange={setSelectedType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    <SelectItem value="algorithm">Algorithm</SelectItem>
                                    <SelectItem value="model">AI Model</SelectItem>
                                    <SelectItem value="methodology">Methodology</SelectItem>
                                    <SelectItem value="software">Software</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="disputed">Disputed</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" className="w-full">
                                Reset Filters
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* IP Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredIPs.map((ip) => (
                        <Card key={ip.id} className="hover-lift shadow-card">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-3">
                                        <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center">
                                            <FileText className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-lg leading-tight">{ip.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {ip.owner} • {ip.institution}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Token ID: {ip.tokenId}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Badge variant={getTypeBadgeVariant(ip.type) as any}>
                                            {ip.type}
                                        </Badge>
                                        <Badge variant={getStatusBadgeVariant(ip.status) as any}>
                                            {ip.status}
                                        </Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                                        <div className="flex items-center justify-center mb-1">
                                            <DollarSign className="h-4 w-4 text-primary mr-1" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">Value</p>
                                        <p className="font-bold">${(ip.value / 1000).toFixed(0)}K</p>
                                    </div>
                                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                                        <div className="flex items-center justify-center mb-1">
                                            <Award className="h-4 w-4 text-secondary mr-1" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">Licensees</p>
                                        <p className="font-bold">{ip.licensees}</p>
                                    </div>
                                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                                        <div className="flex items-center justify-center mb-1">
                                            <Shield className="h-4 w-4 text-accent mr-1" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">Verifications</p>
                                        <p className="font-bold">{ip.verifications}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Monthly Royalties:</span>
                                        <span className="text-sm font-medium">${ip.royalties.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Citations:</span>
                                        <span className="text-sm font-medium">{ip.citations}</span>
                                    </div>
                                </div>

                                <div className="pt-2 border-t space-y-2">
                                    <Button className="w-full" variant="hero">
                                        License IP
                                    </Button>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" className="flex-1">
                                            View Details
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex-1">
                                            Verify Ownership
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredIPs.length === 0 && (
                    <Card className="shadow-card">
                        <CardContent className="text-center py-12">
                            <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">No intellectual properties found</h3>
                            <p className="text-muted-foreground">
                                Try adjusting your search criteria or register a new IP.
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default NFT;