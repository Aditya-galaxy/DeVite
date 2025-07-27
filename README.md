# DeVite : Decentralized AI Research Assistant

## Overview

DeVite is a decentralised AI Research assistant with blockchain-based research platform with NFT-based intellectual property ownership, decentralized AI processing and DAO governance with complete Data sovereignty.

### ICP Canister Infrastructure

- **Personal Research Canisters**: Individual blockchain containers for each researcher's data and projects
- **On-Chain AI Processing**: Direct execution of research synthesis models within ICP infrastructure
- **Decentralized Storage**: User-controlled data storage without external dependencies
- **Smart Contract Automation**: Self-executing research workflows triggered by predefined conditions

### Token-Based Governance

- **DAO Structure**: Community governance for platform decisions and feature development
- **Voting Mechanisms**: Token-based decision making for research standards and platform improvements
- **Treasury Management**: Community-controlled funding allocation for development priorities

# Decentralized AI Research Assistant - User Flow & Technical Architecture

## Complete User Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           USER JOURNEY FLOW                                    │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   START     │────▶│ ONBOARDING  │────▶│ RESEARCH    │────▶│ GOVERNANCE  │
│             │     │             │     │ WORKFLOW    │     │ & SHARING   │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                        1. USER ONBOARDING FLOW                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────┐  Internet    ┌─────────────┐  Verification  ┌─────────────┐   │
│  │   Landing   │  Identity    │  Create     │  & Profile     │  Personal   │   │
│  │    Page     │─────────────▶│  Account    │───────────────▶│  Research   │   │
│  │             │  (WebAuthn)  │             │  Setup         │  Canister   │   │
│  └─────────────┘              └─────────────┘                └─────────────┘   │
│                                       │                             │          │
│                                       ▼                             ▼          │
│                              ┌─────────────┐               ┌─────────────┐     │
│                              │ Researcher  │               │ Welcome     │     │
│                              │ Profile &   │               │ Tutorial &  │     │
│                              │ Institution │               │ Dashboard   │     │
│                              │ Validation  │               │ Setup       │     │
│                              └─────────────┘               └─────────────┘     │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  User Actions:                                                                  │
│  • Click "Get Started" → Internet Identity Login                               │
│  • Complete researcher verification (ORCID/institutional email)                │
│  • Set research interests and privacy preferences                              │
│  • Receive governance tokens and access to personal canister                   │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                     2. RESEARCH WORKFLOW FLOW                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────┐  Query Input  ┌─────────────┐  AI Processing ┌─────────────┐  │
│  │  Research   │──────────────▶│  AI Multi-  │───────────────▶│  Results &  │  │
│  │  Question   │               │  Source     │                │  Synthesis  │  │
│  │  Input      │               │  Analysis   │                │  Display    │  │
│  └─────────────┘               └─────────────┘                └─────────────┘  │
│         │                              │                             │         │
│         │                              ▼                             ▼         │
│         │                    ┌─────────────┐               ┌─────────────┐     │
│         │                    │ External    │               │ Source      │     │
│         │                    │ Database    │               │ Credibility │     │
│         │                    │ Queries     │               │ Assessment  │     │
│         │                    │(PubMed,arXiv)│               │ & Ranking   │     │
│         │                    └─────────────┘               └─────────────┘     │
│         │                                                          │           │
│         ▼                                                          ▼           │
│  ┌─────────────┐     Save & Version     ┌───────────────────────────────────┐  │
│  │ Project     │◀─────Control───────────│    Research Output Management    │  │
│  │ Management  │                        │                                   │  │
│  │ Dashboard   │                        │  • Citation Generation            │  │
│  └─────────────┘                        │  • Collaboration Invites          │  │
│         │                               │  • Version History                │  │
│         │                               │  • Export Options                 │  │
│         ▼                               └───────────────────────────────────┘  │
│  ┌─────────────┐                                         │                     │
│  │ Automated   │                                         ▼                     │
│  │ Literature  │                              ┌─────────────┐                  │
│  │ Monitoring  │                              │ Auto NFT    │                  │
│  │ & Alerts    │                              │ Minting     │                  │
│  └─────────────┘                              │ on Publish  │                  │
│                                               └─────────────┘                  │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  User Actions:                                                                  │
│  • Enter research question in natural language                                 │
│  • AI synthesizes from multiple academic sources                               │
│  • Review results with credibility scores and source links                     │
│  • Save to personal research project                                           │
│  • Set up automated monitoring for new related publications                    │
│  • Collaborate with other researchers                                          │
│  • Publish findings → automatic NFT minting with authorship proof              │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                   3. GOVERNANCE & SHARING FLOW                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────┐  Browse &     ┌─────────────┐  Purchase/    ┌─────────────┐   │
│  │ NFT         │  Discover     │ Research    │  License      │ Access      │   │
│  │ Marketplace │──────────────▶│ Asset       │──────────────▶│ Granted to  │   │
│  │ Browse      │               │ Details     │               │ Content     │   │
│  └─────────────┘               └─────────────┘               └─────────────┘   │
│         │                                                            │         │
│         ▼                                                            ▼         │
│  ┌─────────────┐                                             ┌─────────────┐   │
│  │ Community   │                                             │ Revenue     │   │
│  │ Research    │                                             │ Sharing &   │   │
│  │ Projects    │                                             │ Attribution │   │
│  └─────────────┘                                             └─────────────┘   │
│         │                                                                      │
│         ▼                                                                      │
│  ┌─────────────┐  Create       ┌─────────────┐  Vote         ┌─────────────┐   │
│  │ DAO         │  Proposals    │ Community   │  on Platform  │ Platform    │   │
│  │ Governance  │──────────────▶│ Voting      │──────────────▶│ Updates &   │   │
│  │ Dashboard   │               │ Interface   │               │ Features    │   │
│  └─────────────┘               └─────────────┘               └─────────────┘   │
│         │                              │                             │         │
│         ▼                              ▼                             ▼         │
│  ┌─────────────┐               ┌─────────────┐               ┌─────────────┐   │
│  │ Treasury    │               │ Research    │               │ Community   │   │
│  │ Management  │               │ Standards   │               │ Rewards &   │   │
│  │ & Funding   │               │ & Ethics    │               │ Recognition │   │
│  └─────────────┘               └─────────────┘               └─────────────┘   │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  User Actions:                                                                  │
│  • Browse NFT marketplace for research assets                                  │
│  • Purchase/license research data, papers, or datasets                         │
│  • Join community research projects                                            │
│  • Create and vote on DAO proposals                                            │
│  • Contribute to platform development decisions                                │
│  • Manage treasury funds for community initiatives                             │
│  • Earn rewards for quality contributions                                      │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                        COMPLETE USER JOURNEY MAP                               │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Researcher ──▶ Onboard ──▶ Ask Question ──▶ Get AI Synthesis ──▶ Collaborate  │
│      │              │            │                   │                │         │
│      │              │            │                   │                │         │
│      ▼              ▼            ▼                   ▼                ▼         │
│  Identity      Personal      External          Research         NFT           │
│   Setup       Canister       APIs             Results         Minting       │
│      │         Created        Called           Saved            │             │
│      │              │            │                   │                │         │
│      │              │            │                   │                │         │
│      ▼              ▼            ▼                   ▼                ▼         │
│   Profile ──▶ Data Storage ──▶ Source Analysis ──▶ Auto-Cite ──▶ Governance  │
│                                                                                 │
│  Publish ──▶ Community Review ──▶ NFT Trading ──▶ Revenue Share ──▶ Reinvest  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Complete Technical Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        ICP TECHNICAL ARCHITECTURE                              │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                            PRESENTATION LAYER                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                        Asset Canister                                  │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │   │
│  │  │   React     │ │    Web3     │ │   Mobile    │ │    API      │      │   │
│  │  │ Dashboard   │ │  Wallet     │ │ Interface   │ │  Gateway    │      │   │
│  │  │             │ │ Integration │ │             │ │             │      │   │
│  │  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘      │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                        │                                        │
│                                        ▼                                        │
│                              ┌─────────────────┐                               │
│                              │  Internet       │                               │
│                              │  Identity       │                               │
│                              │  Integration    │                               │
│                              └─────────────────┘                               │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                           APPLICATION LAYER                                    │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────────┐  │
│  │  User Management    │    │  Personal Research   │    │  AI Processing      │  │
│  │     Canister        │    │     Canister         │    │    Canister         │  │
│  │                     │    │   (Per User)         │    │                     │  │
│  │ ┌─────────────────┐ │    │ ┌─────────────────┐  │    │ ┌─────────────────┐ │  │
│  │ │ Authentication  │ │    │ │ Encrypted Data  │  │    │ │ NLP Processing  │ │  │
│  │ │ & Identity      │ │    │ │ Storage         │  │    │ │ Engine          │ │  │
│  │ └─────────────────┘ │    │ └─────────────────┘  │    │ └─────────────────┘ │  │
│  │ ┌─────────────────┐ │    │ ┌─────────────────┐  │    │ ┌─────────────────┐ │  │
│  │ │ Profile         │ │    │ │ Smart Contract  │  │    │ │ Multi-Source    │ │  │
│  │ │ Management      │ │    │ │ Workflows       │  │    │ │ Synthesis       │ │  │
│  │ └─────────────────┘ │    │ └─────────────────┘  │    │ └─────────────────┘ │  │
│  │ ┌─────────────────┐ │    │ ┌─────────────────┐  │    │ ┌─────────────────┐ │  │
│  │ │ Canister        │ │    │ │ Access Control  │  │    │ │ ML Models       │ │  │
│  │ │ Factory         │ │    │ │ & Sharing       │  │    │ │ & Analytics     │ │  │
│  │ └─────────────────┘ │    │ └─────────────────┘  │    │ └─────────────────┘ │  │
│  └─────────────────────┘    └─────────────────────┘    └─────────────────────┘  │
│            │                          │                          │              │
│            │                          │                          │              │
│            ▼                          ▼                          ▼              │
│  ┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────────┐  │
│  │  NFT Research       │    │  DAO Governance     │    │  External           │  │
│  │  Assets Canister    │    │     Canister        │    │  Integration        │  │
│  │                     │    │                     │    │    Canister         │  │
│  │ ┌─────────────────┐ │    │ ┌─────────────────┐ │    │ ┌─────────────────┐ │  │
│  │ │ NFT Minting     │ │    │ │ Proposal System │ │    │ │ Academic APIs   │ │  │
│  │ │ & Management    │ │    │ │ & Voting        │ │    │ │ (HTTPS Outcalls)│ │  │
│  │ └─────────────────┘ │    │ └─────────────────┘ │    │ └─────────────────┘ │  │
│  │ ┌─────────────────┐ │    │ ┌─────────────────┐ │    │ ┌─────────────────┐ │  │
│  │ │ Marketplace     │ │    │ │ Token           │ │    │ │ Web Scraping    │ │  │
│  │ │ Functions       │ │    │ │ Management      │ │    │ │ & Analysis      │ │  │
│  │ └─────────────────┘ │    │ └─────────────────┘ │    │ └─────────────────┘ │  │
│  │ ┌─────────────────┐ │    │ ┌─────────────────┐ │    │ ┌─────────────────┐ │  │
│  │ │ Licensing &     │ │    │ │ Treasury        │ │    │ │ Rate Limiting   │ │  │
│  │ │ Revenue Share   │ │    │ │ Management      │ │    │ │ & Caching       │ │  │
│  │ └─────────────────┘ │    │ └─────────────────┘ │    │ └─────────────────┘ │  │
│  └─────────────────────┘    └─────────────────────┘    └─────────────────────┘  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                         DATA & SECURITY LAYER                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                        Security Framework                               │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │ End-to-End      │  │ Access Control  │  │ Audit Trails    │         │   │
│  │  │ Encryption      │  │ Matrix          │  │ & Logging       │         │   │
│  │  │ (AES-256)       │  │                 │  │                 │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │ Key Management  │  │ Role-Based      │  │ Immutable       │         │   │
│  │  │ (User Control)  │  │ Permissions     │  │ Record Keeping  │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                        │                                        │
│                                        ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                        Data Storage Layer                               │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │ Personal Data   │  │ Research        │  │ NFT Metadata    │         │   │
│  │  │ (Encrypted)     │  │ Outputs         │  │ & Assets        │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │ Version Control │  │ Collaboration   │  │ Governance      │         │   │
│  │  │ System          │  │ Projects        │  │ Records         │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                        INFRASTRUCTURE LAYER                                    │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                        ICP Network Layer                                │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │   Subnet A      │  │   Subnet B      │  │   Subnet C      │         │   │
│  │  │ (Research &     │  │ (Governance &   │  │ (Storage &      │         │   │
│  │  │  AI Processing) │  │  DAO Functions) │  │  NFT Assets)    │         │   │
│  │  │                 │  │                 │  │                 │         │   │
│  │  │ 13+ Nodes       │  │ 13+ Nodes       │  │ 13+ Nodes       │         │   │
│  │  │ High Compute    │  │ High Security   │  │ High Storage    │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                        │                                        │
│                                        ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    Consensus & Replication                              │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │ BFT Consensus   │  │ Threshold       │  │ Chain-Key       │         │   │
│  │  │ Protocol        │  │ Cryptography    │  │ Signatures      │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │ State           │  │ Cross-Subnet    │  │ Deterministic   │         │   │
│  │  │ Replication     │  │ Communication   │  │ Execution       │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                          EXTERNAL LAYER                                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    External Academic APIs                               │   │
│  │                     (via HTTPS Outcalls)                               │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │    PubMed       │  │     arXiv       │  │   Crossref      │         │   │
│  │  │   Database      │  │   Repository    │  │  DOI Service    │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │ Institutional   │  │ Research News   │  │ Conference      │         │   │
│  │  │ Repositories    │  │ & Updates       │  │ & Event APIs    │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                        │                                        │
│                                        ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    Integration & Processing                              │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │ Rate Limiting   │  │ Data            │  │ Error Handling  │         │   │
│  │  │ & Quotas        │  │ Transformation  │  │ & Retry Logic   │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │   │
│  │  │ Authentication  │  │ Response        │  │ Source          │         │   │
│  │  │ Management      │  │ Caching         │  │ Credibility     │         │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                      INTER-CANISTER COMMUNICATION                              │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  User Management ──Query──▶ Personal Research ──Update──▶ AI Processing        │
│       │                          │                           │                 │
│       │                          │                           ▼                 │
│       │                          │                    External Integration     │
│       │                          │                           │                 │
│       │                          ▼                           │                 │
│       └─────Update──▶ NFT Research Assets ◀──Query──────────┘                 │
│                              │                                                 │
│                              │                                                 │
│                              ▼                                                 │
│                      DAO Governance ◀──Heartbeat──── All Canisters            │
│                                                                                 │
│  Communication Types:                                                          │
│  • Query Calls: Read-only operations (fast, no consensus)                     │
│  • Update Calls: State-changing operations (slower, requires consensus)       │
│  • Heartbeat: Scheduled operations for automation                             │
│  • Timer Calls: Delayed execution for workflows                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                            MONITORING & ANALYTICS                              │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                        System Metrics                                   │   │
│  │                                                                         │   │
│  │  Memory Usage    │  Instruction Count  │  Query/Update Rates  │  Errors │   │
│  │  Cycle Balance   │  Response Times     │  User Activity       │  Alerts │   │
│  │  Performance     │  Resource Usage     │  Success Rates       │  Health │   │
│  └─────────────────────────────────────────────────────────────────-------------
```

## Essential MVP Features

### NFT Ownership: Research Output Tokenization

**Core Implementation**:

- **Automatic Minting**: Research outputs (papers, datasets, code) automatically tokenized upon creation
- **Immutable Authorship**: Cryptographic proof of original contribution with timestamps
- **Basic Licensing**: Simple smart contracts for usage rights and attribution
- **Ownership Transfer**: Standard NFT transfer mechanisms for research asset trading

**Technical Requirements**:

- NFT metadata including author, creation date, research domain, and content hash
- Integration with ICP's NFT standards for interoperability
- Basic marketplace functionality for research asset discovery

### DAO Governance: Community Decision Making

**Essential Governance Features**:

- **Proposal System**: Community members can submit platform improvement proposals
- **Voting Interface**: Simple voting mechanism for approved community members
- **Basic Treasury**: Funding pool for essential platform maintenance and development
- **Membership Management**: System for researcher verification and token distribution

**Implementation Requirements**:

- Governance token distribution based on research contributions
- Proposal creation and voting smart contracts
- Basic reputation system for voting weight calculation

### Smart Contract Workflows: Automated Research Tasks

**Core Automation Features**:

- **Literature Monitoring**: Automated tracking of new publications in specified research domains
- **Collaboration Triggers**: Automatic project setup when multiple researchers express interest
- **Publication Pipeline**: Streamlined process from research completion to community validation
- **Quality Gates**: Basic validation checkpoints for research methodology compliance

**Technical Implementation**:

- Event-driven workflow engine using ICP's messaging system
- Integration with external academic APIs through HTTPS outcalls
- State management for long-running research processes

### Multi-Source Synthesis: Information Integration

**Essential Synthesis Capabilities**:

- **Academic Database Integration**: Direct connections to major research databases (PubMed, arXiv)
- **Web Source Analysis**: AI-powered evaluation of online research material credibility
- **Conflict Detection**: Identification of contradictory information across sources
- **Summary Generation**: Automated creation of research literature summaries

**Implementation Requirements**:

- Web scraping modules for academic content extraction
- Natural language processing for content analysis and synthesis
- Source credibility scoring algorithm
- Basic bias detection in research materials

### User-Controlled Storage: Personal Data Sovereignty

**Core Storage Features**:

- **Encrypted Canisters**: End-to-end encrypted storage for sensitive research data
- **Access Control**: Granular permissions for research collaboration and sharing
- **Version Control**: Basic versioning system for research document evolution
- **Backup Systems**: Distributed replication across ICP nodes

## 🛠️ Technology Stack

- **Frontend:** [React.js](https://reactjs.org/) - A popular JavaScript library for building dynamic and interactive user interfaces.
- **Backend Canisters:** [Rust](https://www.rust-lang.org/) - A performant and memory-safe language used for writing secure smart contracts (canisters) on the Internet Computer.
- **Blockchain Platform:** [Internet Computer Protocol (ICP)](https://internetcomputer.org/) - The underlying decentralized cloud platform providing compute, storage, and consensus.
- **IC SDK:** `dfx` - The command-line interface and SDK for developing and deploying applications on the Internet Computer.

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Ensure you have the following tools installed on your system:

1.  **DFX (The IC SDK):** Required to build, deploy, and interact with Internet Computer applications.

    - [Installation Guide](https://internetcomputer.org/docs/current/developer-docs/setup/install/)
    - Quick Install (Linux/macOS):
      ```bash
      sh -ci "$(curl -fsSL [https://internetcomputer.org/install.sh](https://www.google.com/search?q=https://internetcomputer.org/install.sh))"
      ```
    - Verify installation: `dfx --version`

2.  **Node.js and npm:** Required for the React frontend development environment.
    - [Download Node.js](https://nodejs.org/) (LTS version is generally recommended)
    - Verify installation: `node -v` and `npm -v`

### Installation & Local Deployment

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Aditya-galaxy/DeVite.git](https://www.google.com/search?q=https://github.com/Aditya-galaxy/DeVite.git)
    cd DeVite
    ```

2.  **Install frontend dependencies:**

    ```bash
    npm install
    ```

3.  **Start the local Internet Computer replica:**
    It's recommended to run the local replica in a separate terminal window/tab as it provides ongoing status logs.

    ```bash
    # Navigate to your project directory (DeVite) in a new terminal
    dfx start --background --clean
    ```

    - `--background` runs the replica process in the background.
    - `--clean` starts with a fresh state, useful for avoiding potential conflicts from previous runs.

4.  **Deploy the canisters (backend logic):**
    In your original terminal window (within the `DeVite` directory):

    ```bash
    dfx deploy
    ```

    - This command compiles the Rust canister code, deploys it to your local replica, and generates necessary interface files for the frontend.

5.  **Run the frontend development server:**
    ```bash
    npm start
    ```
    This command will typically:
    - Build the React application.
    - Start a local development server (often on `http://localhost:3000` or a similar port).
    - Open the application automatically in your default web browser. Check the terminal output for the exact URL.

## 🗺️ Project Structure

```text
DeVite/
├── .gitignore              # Specifies intentionally untracked files for Git
├── dfx.json                # DFINITY SDK project configuration (defines canisters)
├── LICENSE                 # Project license information
├── README.md               # Project overview and instructions (this file)
├── src/
│   ├── declarations/         # Auto-generated canister interfaces (used by frontend)
│   │   └── devite_backend/ # TS/JS types and client for backend canister
│   │   └── ...               # (Interfaces for other canisters if any)
│   ├── devite_backend/    # Rust backend canister source code
│   │   ├── src/
│   │   │   └── lib.rs        # Main Rust canister logic
│   │   ├── Cargo.toml        # Rust package definition and dependencies
│   │   └── DeVite_backend.did # Candid interface definition (source)
│   └── devite_frontend/   # React frontend source code
│       ├── public/           # Static assets (e.g., favicon.ico, index.html template)
│       │   └── index.html    # Main HTML file template
│       ├── src/              # Core React application code
│       │   ├── assets/       # Frontend-specific assets (images, css, etc.)
│       │   ├── components/   # Reusable UI components (e.g., Navbar.jsx)
│       │   ├── context/      # React context files (e.g., AuthContext.jsx)
│       │   ├── pages/        # Page components (e.g., Home.jsx, Login.jsx)
│       │   ├── services/     # Logic for interacting with backend (e.g., api.js)
│       │   ├── App.jsx       # Root React component, routing setup
│       │   └── main.jsx      # Frontend entry point (renders App)
│       ├── package.json      # Frontend Node.js dependencies and scripts
│       ├── tailwind.config.js # Configuration for Tailwind CSS (if used)
│       └── vite.config.js    # Configuration for Vite build tool (if used)
└── # Other root config files (e.g., .prettierrc, tsconfig.json)

# --- Generated Directories (Usually ignored by Git) ---
# .dfx/                     # DFX build outputs, local replica state, canister IDs
# dist/                     # Compiled frontend build output
# node_modules/             # Installed Node.js dependencies (frontend)
# target/                   # Rust build output directory (backend)
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1.  Fork the Project (`https://github.com/Aditya-galaxy/DeVite/fork`)
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please ensure your code follows the project's coding style and includes tests where appropriate.

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.
