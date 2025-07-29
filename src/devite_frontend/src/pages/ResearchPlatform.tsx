import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, Filter, Microscope, BookOpen, Database, Brain, FileText, Users, TrendingUp } from 'lucide-react';

const ResearchPlatform: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedField, setSelectedField] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const researchProjects = [
        {
            id: 1,
            title: 'Quantum Computing Applications in Drug Discovery',
            field: 'Computational Biology',
            researchers: 45,
            progress: 78,
            status: 'Active',
            funding: 2500000,
            publications: 12,
            datasets: 8,
            collaborators: ['MIT', 'Stanford', 'Oxford']
        },
        {
            id: 2,
            title: 'Climate Model Optimization using Deep Learning',
            field: 'Environmental Science',
            researchers: 32,
            progress: 65,
            status: 'Active',
            funding: 1800000,
            publications: 8,
            datasets: 15,
            collaborators: ['NASA', 'NOAA', 'Cambridge']
        },
        {
            id: 3,
            title: 'Decentralized Genomics Data Analysis Framework',
            field: 'Bioinformatics',
            researchers: 28,
            progress: 43,
            status: 'Recruiting',
            funding: 3200000,
            publications: 5,
            datasets: 22,
            collaborators: ['Harvard', 'CERN', 'Tokyo University']
        },
        {
            id: 4,
            title: 'Blockchain-Based Peer Review System',
            field: 'Computer Science',
            researchers: 19,
            progress: 89,
            status: 'Finalizing',
            funding: 950000,
            publications: 15,
            datasets: 3,
            collaborators: ['ETH Zurich', 'UC Berkeley', 'Imperial College']
        }
    ];

    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case 'Active': return 'default';
            case 'Recruiting': return 'secondary';
            case 'Finalizing': return 'outline';
            default: return 'default';
        }
    };

    const filteredProjects = researchProjects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.field.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesField = selectedField === 'all' || project.field.toLowerCase().includes(selectedField);
        const matchesStatus = selectedStatus === 'all' || project.status.toLowerCase() === selectedStatus;

        return matchesSearch && matchesField && matchesStatus;
    });

    return (
        <div className="container py-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Research Platform</h1>
                    <p className="text-muted-foreground">
                        Collaborate on cutting-edge research projects with decentralized AI assistance
                    </p>
                </div>
                <Button className="gradient-primary">
                    New Project
                </Button>
            </div>

            {/* Filters */}
            <Card className="shadow-card">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Filter className="h-5 w-5 mr-2" />
                        Filter Research Projects
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Select value={selectedField} onValueChange={setSelectedField}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select field" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Fields</SelectItem>
                                <SelectItem value="biology">Computational Biology</SelectItem>
                                <SelectItem value="environmental">Environmental Science</SelectItem>
                                <SelectItem value="bioinformatics">Bioinformatics</SelectItem>
                                <SelectItem value="computer">Computer Science</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="recruiting">Recruiting</SelectItem>
                                <SelectItem value="finalizing">Finalizing</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline" className="w-full">
                            Reset Filters
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Project Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                    <Card key={project.id} className="hover-lift shadow-card">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-3">
                                    <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center">
                                        <Microscope className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-1">{project.field}</p>
                                    </div>
                                </div>
                                <Badge variant={getStatusBadgeVariant(project.status) as any}>
                                    {project.status}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-muted/30 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <Users className="h-4 w-4 text-primary mr-1" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Researchers</p>
                                    <p className="font-bold">{project.researchers}</p>
                                </div>
                                <div className="text-center p-3 bg-muted/30 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <FileText className="h-4 w-4 text-secondary mr-1" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Publications</p>
                                    <p className="font-bold">{project.publications}</p>
                                </div>
                                <div className="text-center p-3 bg-muted/30 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <Database className="h-4 w-4 text-accent mr-1" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Datasets</p>
                                    <p className="font-bold">{project.datasets}</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Progress:</span>
                                    <span className="text-sm font-medium">{project.progress}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Funding:</span>
                                    <span className="text-sm font-medium">${project.funding.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Collaborators:</span>
                                    <span className="text-sm font-medium">{project.collaborators.length} institutions</span>
                                </div>
                            </div>

                            <div className="pt-2 border-t space-y-2">
                                <Button className="w-full" variant="hero">
                                    Join Research
                                </Button>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        View Details
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1">
                                        Access Data
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <Card className="shadow-card">
                    <CardContent className="text-center py-12">
                        <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">No research projects found</h3>
                        <p className="text-muted-foreground">
                            Try adjusting your search criteria or start a new research project.
                        </p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default ResearchPlatform;