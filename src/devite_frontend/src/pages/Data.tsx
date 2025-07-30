import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, Filter, Shield, Lock, Database, Key, Globe, FileCheck } from 'lucide-react';

const Data: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const dataVaults = [
        {
            id: 1,
            name: 'Genomics Research Vault',
            owner: 'Dr. Sarah Chen',
            institution: 'Stanford Medical Research',
            type: 'Genomic Data',
            size: '2.4 TB',
            records: 150000,
            encryption: 'AES-256',
            access: 'Restricted',
            collaborators: 8,
            downloads: 1247,
            citations: 89,
            value: 450000,
            status: 'Active'
        },
        {
            id: 2,
            name: 'Climate Model Dataset',
            owner: 'Dr. Michael Rodriguez',
            institution: 'NOAA Research Division',
            type: 'Environmental Data',
            size: '5.1 TB',
            records: 890000,
            encryption: 'Quantum-Safe',
            access: 'Public',
            collaborators: 23,
            downloads: 3421,
            citations: 156,
            value: 320000,
            status: 'Active'
        },
        {
            id: 3,
            name: 'Pharmaceutical Trials Archive',
            owner: 'Dr. Emma Thompson',
            institution: 'Oxford Drug Discovery',
            type: 'Clinical Data',
            size: '1.8 TB',
            records: 75000,
            encryption: 'Multi-layer',
            access: 'Licensed',
            collaborators: 12,
            downloads: 892,
            citations: 67,
            value: 680000,
            status: 'Pending'
        },
        {
            id: 4,
            name: 'Neural Network Training Sets',
            owner: 'Dr. Alex Kumar',
            institution: 'MIT AI Lab',
            type: 'Machine Learning',
            size: '8.7 TB',
            records: 2400000,
            encryption: 'End-to-End',
            access: 'Consortium',
            collaborators: 45,
            downloads: 5678,
            citations: 234,
            value: 920000,
            status: 'Active'
        }
    ];

    const getAccessBadgeVariant = (access: string) => {
        switch (access) {
            case 'Public': return 'secondary';
            case 'Restricted': return 'destructive';
            case 'Licensed': return 'default';
            case 'Consortium': return 'outline';
            default: return 'default';
        }
    };

    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case 'Active': return 'default';
            case 'Pending': return 'secondary';
            case 'Suspended': return 'destructive';
            default: return 'outline';
        }
    };

    const filteredVaults = dataVaults.filter(vault => {
        const matchesSearch = vault.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vault.owner.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'all' || vault.type.toLowerCase().includes(selectedType);
        const matchesStatus = selectedStatus === 'all' || vault.status.toLowerCase() === selectedStatus;

        return matchesSearch && matchesType && matchesStatus;
    });

    return (
        <div className="container py-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Data Sovereignty</h1>
                    <p className="text-muted-foreground">
                        Secure, encrypted data vaults with complete ownership control
                    </p>
                </div>
                <Button className="gradient-primary">
                    Create Data Vault
                </Button>
            </div>

            {/* Security Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="shadow-card">
                    <CardContent className="p-6 text-center">
                        <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                            <Database className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-2xl font-bold">1,847</p>
                        <p className="text-sm text-muted-foreground">Secure Vaults</p>
                    </CardContent>
                </Card>
                <Card className="shadow-card">
                    <CardContent className="p-6 text-center">
                        <div className="h-12 w-12 gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-2xl font-bold">847 PB</p>
                        <p className="text-sm text-muted-foreground">Protected Data</p>
                    </CardContent>
                </Card>
                <Card className="shadow-card">
                    <CardContent className="p-6 text-center">
                        <div className="h-12 w-12 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                            <Key className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-2xl font-bold">100%</p>
                        <p className="text-sm text-muted-foreground">Encryption Rate</p>
                    </CardContent>
                </Card>
                <Card className="shadow-card">
                    <CardContent className="p-6 text-center">
                        <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                            <FileCheck className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-2xl font-bold">99.9%</p>
                        <p className="text-sm text-muted-foreground">Data Integrity</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <Card className="shadow-card">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Filter className="h-5 w-5 mr-2" />
                        Filter Data Vaults
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search vaults..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Select value={selectedType} onValueChange={setSelectedType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select data type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Types</SelectItem>
                                <SelectItem value="genomic">Genomic Data</SelectItem>
                                <SelectItem value="environmental">Environmental Data</SelectItem>
                                <SelectItem value="clinical">Clinical Data</SelectItem>
                                <SelectItem value="machine">Machine Learning</SelectItem>
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
                                <SelectItem value="suspended">Suspended</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline" className="w-full">
                            Reset Filters
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Vault Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredVaults.map((vault) => (
                    <Card key={vault.id} className="hover-lift shadow-card">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-3">
                                    <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center">
                                        <Database className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-lg leading-tight">{vault.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {vault.owner} • {vault.institution}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Type: {vault.type}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Badge variant={getAccessBadgeVariant(vault.access) as any}>
                                        {vault.access}
                                    </Badge>
                                    <Badge variant={getStatusBadgeVariant(vault.status) as any}>
                                        {vault.status}
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-muted/30 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <Database className="h-4 w-4 text-primary mr-1" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Size</p>
                                    <p className="font-bold">{vault.size}</p>
                                </div>
                                <div className="text-center p-3 bg-muted/30 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <FileCheck className="h-4 w-4 text-secondary mr-1" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Records</p>
                                    <p className="font-bold text-xs">{vault.records.toLocaleString()}</p>
                                </div>
                                <div className="text-center p-3 bg-muted/30 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <Shield className="h-4 w-4 text-accent mr-1" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Encryption</p>
                                    <p className="font-bold text-xs">{vault.encryption}</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Collaborators:</span>
                                    <span className="text-sm font-medium">{vault.collaborators}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Downloads:</span>
                                    <span className="text-sm font-medium">{vault.downloads.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Citations:</span>
                                    <span className="text-sm font-medium">{vault.citations}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Estimated Value:</span>
                                    <span className="text-sm font-medium">${vault.value.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="pt-2 border-t space-y-2">
                                <Button className="w-full" variant="hero" disabled={vault.status !== 'Active'}>
                                    {vault.access === 'Public' ? 'Access Data' : 'Request Access'}
                                </Button>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        View Metadata
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1">
                                        Security Audit
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredVaults.length === 0 && (
                <Card className="shadow-card">
                    <CardContent className="text-center py-12">
                        <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">No data vaults found</h3>
                        <p className="text-muted-foreground">
                            Try adjusting your search criteria or create a new secure data vault.
                        </p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default Data;