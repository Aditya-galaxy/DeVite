import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, Filter, Vote, Users, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import Header from '../components/layout/Header';

const Governance: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const proposals = [
        {
            id: 1,
            title: 'Implement New Peer Review Incentive System',
            type: 'Protocol',
            proposer: 'Research Coalition DAO',
            description: 'Introduce tokenized rewards for quality peer reviews to improve research validation',
            votesFor: 2847,
            votesAgainst: 1203,
            status: 'Active',
            timeLeft: '5 days',
            quorum: 4500,
            threshold: 60,
            tags: ['Incentives', 'Peer Review']
        },
        {
            id: 2,
            title: 'Reduce AI Processing Node Staking Requirements',
            type: 'Economic',
            proposer: 'Decentralized Compute Alliance',
            description: 'Lower minimum stake from 100K to 50K tokens to increase network participation',
            votesFor: 3421,
            votesAgainst: 892,
            status: 'Active',
            timeLeft: '12 hours',
            quorum: 4000,
            threshold: 66,
            tags: ['Staking', 'Economics']
        },
        {
            id: 3,
            title: 'Establish Research Ethics Committee',
            type: 'Governance',
            proposer: 'Ethics Working Group',
            description: 'Create a decentralized committee to oversee ethical research practices and AI safety',
            votesFor: 4156,
            votesAgainst: 234,
            status: 'Passed',
            timeLeft: 'Concluded',
            quorum: 4000,
            threshold: 95,
            tags: ['Ethics', 'Safety']
        },
        {
            id: 4,
            title: 'Integrate New Quantum Computing Resources',
            type: 'Technical',
            proposer: 'Quantum Research Collective',
            description: 'Add support for quantum computing nodes in the distributed processing network',
            votesFor: 1823,
            votesAgainst: 2156,
            status: 'Failed',
            timeLeft: 'Concluded',
            quorum: 4000,
            threshold: 46,
            tags: ['Quantum', 'Infrastructure']
        }
    ];

    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case 'Active': return 'default';
            case 'Passed': return 'secondary';
            case 'Failed': return 'destructive';
            default: return 'outline';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Active': return <Clock className="h-4 w-4" />;
            case 'Passed': return <CheckCircle className="h-4 w-4" />;
            case 'Failed': return <XCircle className="h-4 w-4" />;
            default: return <AlertCircle className="h-4 w-4" />;
        }
    };

    const filteredProposals = proposals.filter(proposal => {
        const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            proposal.proposer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'all' || proposal.type.toLowerCase().includes(selectedType);
        const matchesStatus = selectedStatus === 'all' || proposal.status.toLowerCase() === selectedStatus;

        return matchesSearch && matchesType && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container py-8 space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Community Governance</h1>
                        <p className="text-muted-foreground">
                            Participate in decentralized decision-making for the research platform
                        </p>
                    </div>
                    <Button className="gradient-primary">
                        Create Proposal
                    </Button>
                </div>

                {/* Governance Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Vote className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">847</p>
                            <p className="text-sm text-muted-foreground">Total Proposals</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">12.4K</p>
                            <p className="text-sm text-muted-foreground">Active Voters</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                                <CheckCircle className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">623</p>
                            <p className="text-sm text-muted-foreground">Passed Proposals</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardContent className="p-6 text-center">
                            <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Vote className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-2xl font-bold">78.2%</p>
                            <p className="text-sm text-muted-foreground">Voter Participation</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Filter className="h-5 w-5 mr-2" />
                            Filter Proposals
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search proposals..."
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
                                    <SelectItem value="protocol">Protocol</SelectItem>
                                    <SelectItem value="economic">Economic</SelectItem>
                                    <SelectItem value="governance">Governance</SelectItem>
                                    <SelectItem value="technical">Technical</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="passed">Passed</SelectItem>
                                    <SelectItem value="failed">Failed</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" className="w-full">
                                Reset Filters
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Proposals Grid */}
                <div className="space-y-6">
                    {filteredProposals.map((proposal) => (
                        <Card key={proposal.id} className="hover-lift shadow-card">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="outline">{proposal.type}</Badge>
                                            <Badge variant={getStatusBadgeVariant(proposal.status) as any}>
                                                <div className="flex items-center gap-1">
                                                    {getStatusIcon(proposal.status)}
                                                    {proposal.status}
                                                </div>
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl leading-tight">{proposal.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Proposed by {proposal.proposer}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-muted-foreground">Time Left</p>
                                        <p className="font-medium">{proposal.timeLeft}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">{proposal.description}</p>

                                <div className="flex flex-wrap gap-1">
                                    {proposal.tags.map((tag, index) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Voting Progress</span>
                                        <span className="text-sm text-muted-foreground">
                                            {((proposal.votesFor + proposal.votesAgainst) / proposal.quorum * 100).toFixed(1)}% quorum
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="flex items-center gap-1">
                                                <CheckCircle className="h-3 w-3 text-green-500" />
                                                For: {proposal.votesFor.toLocaleString()}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <XCircle className="h-3 w-3 text-red-500" />
                                                Against: {proposal.votesAgainst.toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="w-full bg-muted rounded-full h-3">
                                            <div className="flex h-3 rounded-full overflow-hidden">
                                                <div
                                                    className="bg-green-500 transition-all"
                                                    style={{
                                                        width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%`
                                                    }}
                                                ></div>
                                                <div
                                                    className="bg-red-500 transition-all"
                                                    style={{
                                                        width: `${(proposal.votesAgainst / (proposal.votesFor + proposal.votesAgainst)) * 100}%`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>Approval: {proposal.threshold}%</span>
                                            <span>Quorum: {proposal.quorum.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2 border-t">
                                    {proposal.status === 'Active' ? (
                                        <div className="flex gap-2">
                                            <Button className="flex-1" variant="hero">
                                                Vote For
                                            </Button>
                                            <Button variant="outline" className="flex-1">
                                                Vote Against
                                            </Button>
                                            <Button variant="outline" size="icon">
                                                <Vote className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ) : (
                                        <Button variant="outline" className="w-full">
                                            View Results
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredProposals.length === 0 && (
                    <Card className="shadow-card">
                        <CardContent className="text-center py-12">
                            <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">No proposals found</h3>
                            <p className="text-muted-foreground">
                                Try adjusting your search criteria or create a new proposal.
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default Governance;