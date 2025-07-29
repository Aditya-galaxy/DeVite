use candid::{CandidType, Deserialize, Principal, Encode, Decode};
use ic_cdk::api::management_canister::main::*;
use ic_cdk::{query, update};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{DefaultMemoryImpl, StableBTreeMap, Storable, BoundedStorable};
use std::cell::RefCell;
use std::borrow::Cow;

type Memory = VirtualMemory<DefaultMemoryImpl>;

// Wrapper types to work around orphan rules
#[derive(Clone, Debug, CandidType, Deserialize, PartialEq, Eq, PartialOrd, Ord)]
pub struct StorablePrincipal(pub Principal);

impl From<Principal> for StorablePrincipal {
    fn from(p: Principal) -> Self {
        StorablePrincipal(p)
    }
}

impl From<StorablePrincipal> for Principal {
    fn from(sp: StorablePrincipal) -> Self {
        sp.0
    }
}

impl Storable for StorablePrincipal {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(&self.0).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        let principal: Principal = Decode!(bytes.as_ref(), Principal).unwrap();
        StorablePrincipal(principal)
    }
}

impl BoundedStorable for StorablePrincipal {
    const MAX_SIZE: u32 = 29;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct StorableVecU64(pub Vec<u64>);

impl From<Vec<u64>> for StorableVecU64 {
    fn from(v: Vec<u64>) -> Self {
        StorableVecU64(v)
    }
}

impl From<StorableVecU64> for Vec<u64> {
    fn from(sv: StorableVecU64) -> Self {
        sv.0
    }
}

impl Storable for StorableVecU64 {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(&self.0).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        let vec: Vec<u64> = Decode!(bytes.as_ref(), Vec<u64>).unwrap();
        StorableVecU64(vec)
    }
}

impl BoundedStorable for StorableVecU64 {
    const MAX_SIZE: u32 = 8192;
    const IS_FIXED_SIZE: bool = false;
}

type UserStore = StableBTreeMap<StorablePrincipal, UserProfile, Memory>;
type TokenStorage = StableBTreeMap<u64, ResearchNFT, Memory>;
type OwnerStorage = StableBTreeMap<StorablePrincipal, StorableVecU64, Memory>;
type ProposalStorage = StableBTreeMap<u64, Proposal, Memory>;
type GovernanceTokenStorage = StableBTreeMap<StorablePrincipal, u64, Memory>;

// USER MANAGEMENT TYPES

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct UserProfile {
    pub principal: Principal,
    pub username: String,
    pub email: String,
    pub institution: String,
    pub research_domains: Vec<String>,
    pub personal_canister_id: Option<Principal>,
    pub created_at: u64,
}

impl Storable for UserProfile {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for UserProfile {
    const MAX_SIZE: u32 = 2048;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct CreateUserRequest {
    pub username: String,
    pub email: String,
    pub institution: String,
    pub research_domains: Vec<String>,
}

// RESEARCH NFT TYPES

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct ResearchNFT {
    pub token_id: u64,
    pub owner: Principal,
    pub title: String,
    pub description: String,
    pub authors: Vec<String>,
    pub research_type: ResearchType,
    pub content_hash: String,
    pub license: License,
    pub created_at: u64,
    pub metadata: ResearchMetadata,
}

impl Storable for ResearchNFT {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for ResearchNFT {
    const MAX_SIZE: u32 = 4096;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub enum ResearchType {
    Paper,
    Dataset,
    Code,
    Experiment,
    Review,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct License {
    pub license_type: String,
    pub commercial_use: bool,
    pub attribution_required: bool,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct ResearchMetadata {
    pub keywords: Vec<String>,
    pub research_domain: String,
    pub institution: String,
    pub doi: Option<String>,
    pub peer_reviewed: bool,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct MintRequest {
    pub title: String,
    pub description: String,
    pub authors: Vec<String>,
    pub research_type: ResearchType,
    pub content_hash: String,
    pub license: License,
    pub metadata: ResearchMetadata,
}

// GOVERNANCE TYPES

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Proposal {
    pub id: u64,
    pub proposer: Principal,
    pub title: String,
    pub description: String,
    pub proposal_type: ProposalType,
    pub status: ProposalStatus,
    pub votes_for: u64,
    pub votes_against: u64,
    pub voters: Vec<Principal>,
    pub created_at: u64,
    pub voting_ends_at: u64,
}

impl Storable for Proposal {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Proposal {
    const MAX_SIZE: u32 = 4096;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(Clone, Debug, CandidType, Deserialize, PartialEq)]
pub enum ProposalType {
    PlatformUpgrade,
    ResearchStandard,
    TreasuryAllocation,
    GovernanceChange,
}

#[derive(Clone, Debug, CandidType, Deserialize, PartialEq)]
pub enum ProposalStatus {
    Active,
    Passed,
    Rejected,
    Executed,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct CreateProposalRequest {
    pub title: String,
    pub description: String,
    pub proposal_type: ProposalType,
    pub voting_duration_days: u64,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub enum Vote {
    For,
    Against,
}

// PERSONAL STORAGE TYPES

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct StoredItem {
    pub id: String,
    pub content: Vec<u8>,
    pub metadata: ItemMetadata,
    pub created_at: u64,
    pub updated_at: u64,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct ItemMetadata {
    pub content_type: String,
    pub filename: String,
    pub description: String,
    pub tags: Vec<String>,
}

// GLOBAL STATE

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));
    
    // User management (Memory ID 0)
    static USER_PROFILES: RefCell<UserStore> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
        )
    );
    
    // NFT storage (Memory ID 1, 2)
    static RESEARCH_TOKENS: RefCell<TokenStorage> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
        )
    );
    
    static TOKEN_OWNERS: RefCell<OwnerStorage> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2))),
        )
    );
    
    // Governance (Memory ID 3, 4)
    static PROPOSALS: RefCell<ProposalStorage> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(3))),
        )
    );
    
    static GOVERNANCE_TOKENS: RefCell<GovernanceTokenStorage> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(4))),
        )
    );
    
    // Counters
    static NEXT_TOKEN_ID: RefCell<u64> = RefCell::new(1);
    static NEXT_PROPOSAL_ID: RefCell<u64> = RefCell::new(1);
}

// CONSTANTS

const DAYS_TO_NANOSECONDS: u64 = 24 * 60 * 60 * 1_000_000_000;
const MIN_PROPOSAL_THRESHOLD: u64 = 100;
const QUORUM_PERCENTAGE: u64 = 20;
const INITIAL_GOVERNANCE_TOKENS: u64 = 1000;

// USER MANAGEMENT FUNCTIONS

#[update]
async fn register_user(request: CreateUserRequest) -> Result<UserProfile, String> {
    let caller = ic_cdk::api::caller();
    let storable_caller = StorablePrincipal::from(caller);
    
    // Check if user already exists
    if USER_PROFILES.with(|profiles| profiles.borrow().contains_key(&storable_caller)) {
        return Err("User already registered".to_string());
    }
    
    // Create personal canister for user
    let personal_canister_id = create_personal_canister(caller).await?;
    
    let user_profile = UserProfile {
        principal: caller,
        username: request.username,
        email: request.email,
        institution: request.institution,
        research_domains: request.research_domains,
        personal_canister_id: Some(personal_canister_id),
        created_at: ic_cdk::api::time(),
    };
    
    USER_PROFILES.with(|profiles| {
        profiles.borrow_mut().insert(storable_caller.clone(), user_profile.clone())
    });
    
    // Award initial governance tokens
    GOVERNANCE_TOKENS.with(|tokens| {
        tokens.borrow_mut().insert(storable_caller, INITIAL_GOVERNANCE_TOKENS);
    });
    
    Ok(user_profile)
}

async fn create_personal_canister(owner: Principal) -> Result<Principal, String> {
    let create_args = CreateCanisterArgument {
        settings: Some(CanisterSettings {
            controllers: Some(vec![owner, ic_cdk::api::id()]),
            compute_allocation: None,
            memory_allocation: None,
            freezing_threshold: None,
        }),
    };
    
    match create_canister(create_args).await {
        Ok((canister_id,)) => {
            // Note: In a real implementation, you would install the personal storage WASM here
            // install_personal_storage_code(canister_id.canister_id, owner).await?;
            Ok(canister_id.canister_id)
        }
        Err((code, msg)) => Err(format!("Failed to create canister: {:?} - {}", code, msg)),
    }
}

#[query]
fn get_user_profile(user_id: Principal) -> Option<UserProfile> {
    let storable_user = StorablePrincipal::from(user_id);
    USER_PROFILES.with(|profiles| profiles.borrow().get(&storable_user))
}

#[query]
fn get_my_profile() -> Option<UserProfile> {
    let caller = ic_cdk::api::caller();
    get_user_profile(caller)
}

#[query]
fn list_all_users() -> Vec<UserProfile> {
    USER_PROFILES.with(|profiles| {
        profiles.borrow().iter().map(|(_, profile)| profile).collect()
    })
}

// RESEARCH NFT FUNCTIONS

#[update]
fn mint_research_nft(request: MintRequest) -> Result<u64, String> {
    let caller = ic_cdk::api::caller();
    let storable_caller = StorablePrincipal::from(caller);
    
    // Check if user is registered
    if !USER_PROFILES.with(|profiles| profiles.borrow().contains_key(&storable_caller)) {
        return Err("User must be registered first".to_string());
    }
    
    let token_id = NEXT_TOKEN_ID.with(|id| {
        let current_id = *id.borrow();
        *id.borrow_mut() = current_id + 1;
        current_id
    });
    
    let nft = ResearchNFT {
        token_id,
        owner: caller,
        title: request.title,
        description: request.description,
        authors: request.authors,
        research_type: request.research_type,
        content_hash: request.content_hash,
        license: request.license,
        created_at: ic_cdk::api::time(),
        metadata: request.metadata,
    };
    
    // Store the NFT
    RESEARCH_TOKENS.with(|tokens| {
        tokens.borrow_mut().insert(token_id, nft);
    });
    
    // Update owner's token list
    TOKEN_OWNERS.with(|owners| {
        let mut owner_tokens = owners.borrow()
            .get(&storable_caller)
            .map(|v| v.0.clone())
            .unwrap_or_default();
        owner_tokens.push(token_id);
        owners.borrow_mut().insert(storable_caller.clone(), StorableVecU64::from(owner_tokens));
    });
    
    // Award governance tokens for contributing research
    GOVERNANCE_TOKENS.with(|tokens| {
        let current_balance = tokens.borrow().get(&storable_caller).unwrap_or(0);
        tokens.borrow_mut().insert(storable_caller, current_balance + 50); // 50 tokens for minting
    });
    
    Ok(token_id)
}

#[query]
fn get_research_token(token_id: u64) -> Option<ResearchNFT> {
    RESEARCH_TOKENS.with(|tokens| tokens.borrow().get(&token_id))
}

#[query]
fn get_tokens_by_owner(owner: Principal) -> Vec<u64> {
    let storable_owner = StorablePrincipal::from(owner);
    TOKEN_OWNERS.with(|owners| {
        owners.borrow()
            .get(&storable_owner)
            .map(|v| v.0.clone())
            .unwrap_or_default()
    })
}

#[query]
fn get_tokens_by_research_type(research_type: ResearchType) -> Vec<ResearchNFT> {
    RESEARCH_TOKENS.with(|tokens| {
        tokens.borrow().iter()
            .filter(|(_, token)| std::mem::discriminant(&token.research_type) == std::mem::discriminant(&research_type))
            .map(|(_, token)| token)
            .collect()
    })
}

#[query]
fn search_research_by_keyword(keyword: String) -> Vec<ResearchNFT> {
    let keyword_lower = keyword.to_lowercase();
    RESEARCH_TOKENS.with(|tokens| {
        tokens.borrow().iter()
            .filter(|(_, token)| {
                token.metadata.keywords.iter().any(|k| k.to_lowercase().contains(&keyword_lower)) ||
                token.title.to_lowercase().contains(&keyword_lower) ||
                token.description.to_lowercase().contains(&keyword_lower)
            })
            .map(|(_, token)| token)
            .collect()
    })
}

#[update]
fn transfer_research_token(token_id: u64, to: Principal) -> Result<(), String> {
    let caller = ic_cdk::api::caller();
    let storable_caller = StorablePrincipal::from(caller);
    let storable_to = StorablePrincipal::from(to);
    
    // Get the token first
    let mut token = RESEARCH_TOKENS.with(|tokens| {
        tokens.borrow().get(&token_id)
    }).ok_or("Token not found")?;
    
    if token.owner != caller {
        return Err("Not the owner".to_string());
    }
    
    // Check if recipient is registered
    if !USER_PROFILES.with(|profiles| profiles.borrow().contains_key(&storable_to)) {
        return Err("Recipient must be registered".to_string());
    }
    
    // Update token owner
    token.owner = to;
    RESEARCH_TOKENS.with(|tokens| {
        tokens.borrow_mut().insert(token_id, token);
    });
    
    // Update ownership records
    TOKEN_OWNERS.with(|owners| {
        // Remove from old owner
        let mut old_owner_tokens = owners.borrow()
            .get(&storable_caller)
            .map(|v| v.0.clone())
            .unwrap_or_default();
        old_owner_tokens.retain(|&id| id != token_id);
        owners.borrow_mut().insert(storable_caller, StorableVecU64::from(old_owner_tokens));
        
        // Add to new owner
        let mut new_owner_tokens = owners.borrow()
            .get(&storable_to)
            .map(|v| v.0.clone())
            .unwrap_or_default();
        new_owner_tokens.push(token_id);
        owners.borrow_mut().insert(storable_to, StorableVecU64::from(new_owner_tokens));
    });
    
    Ok(())
}

#[query]
fn total_research_tokens() -> u64 {
    NEXT_TOKEN_ID.with(|id| *id.borrow() - 1)
}

// GOVERNANCE FUNCTIONS

#[update]
fn create_proposal(request: CreateProposalRequest) -> Result<u64, String> {
    let caller = ic_cdk::api::caller();
    let storable_caller = StorablePrincipal::from(caller);
    
    // Check if caller is registered
    if !USER_PROFILES.with(|profiles| profiles.borrow().contains_key(&storable_caller)) {
        return Err("User must be registered first".to_string());
    }
    
    // Check if caller has enough tokens to create proposal
    let caller_tokens = GOVERNANCE_TOKENS.with(|tokens| {
        tokens.borrow().get(&storable_caller).unwrap_or(0)
    });
    
    if caller_tokens < MIN_PROPOSAL_THRESHOLD {
        return Err(format!("Need at least {} governance tokens to create proposal", MIN_PROPOSAL_THRESHOLD));
    }
    
    let proposal_id = NEXT_PROPOSAL_ID.with(|id| {
        let current_id = *id.borrow();
        *id.borrow_mut() = current_id + 1;
        current_id
    });
    
    let proposal = Proposal {
        id: proposal_id,
        proposer: caller,
        title: request.title,
        description: request.description,
        proposal_type: request.proposal_type,
        status: ProposalStatus::Active,
        votes_for: 0,
        votes_against: 0,
        voters: Vec::new(),
        created_at: ic_cdk::api::time(),
        voting_ends_at: ic_cdk::api::time() + (request.voting_duration_days * DAYS_TO_NANOSECONDS),
    };
    
    PROPOSALS.with(|proposals| {
        proposals.borrow_mut().insert(proposal_id, proposal);
    });
    
    Ok(proposal_id)
}

#[update]
fn vote_on_proposal(proposal_id: u64, vote: Vote) -> Result<(), String> {
    let caller = ic_cdk::api::caller();
    let storable_caller = StorablePrincipal::from(caller);
    
    // Check if caller is registered
    if !USER_PROFILES.with(|profiles| profiles.borrow().contains_key(&storable_caller)) {
        return Err("User must be registered first".to_string());
    }
    
    // Get caller's voting power
    let voting_power = GOVERNANCE_TOKENS.with(|tokens| {
        tokens.borrow().get(&storable_caller).unwrap_or(0)
    });
    
    if voting_power == 0 {
        return Err("No governance tokens to vote".to_string());
    }
    
    let current_time = ic_cdk::api::time();
    
    PROPOSALS.with(|proposals| {
        let mut proposal = proposals.borrow().get(&proposal_id)
            .ok_or("Proposal not found")?;
        
        // Check if voting period is still active
        if current_time > proposal.voting_ends_at {
            return Err("Voting period has ended".to_string());
        }
        
        // Check if already voted
        if proposal.voters.contains(&caller) {
            return Err("Already voted on this proposal".to_string());
        }
        
        // Record vote
        match vote {
            Vote::For => proposal.votes_for += voting_power,
            Vote::Against => proposal.votes_against += voting_power,
        }
        
        proposal.voters.push(caller);
        
        proposals.borrow_mut().insert(proposal_id, proposal);
        Ok(())
    })
}

#[update]
fn finalize_proposal(proposal_id: u64) -> Result<(), String> {
    let current_time = ic_cdk::api::time();
    
    PROPOSALS.with(|proposals| {
        let mut proposal = proposals.borrow().get(&proposal_id)
            .ok_or("Proposal not found")?;
        
        // Check if voting period has ended
        if current_time <= proposal.voting_ends_at {
            return Err("Voting period still active".to_string());
        }
        
        // Check if already finalized
        if proposal.status != ProposalStatus::Active {
            return Err("Proposal already finalized".to_string());
        }
        
        // Calculate total votes and determine outcome
        let total_votes = proposal.votes_for + proposal.votes_against;
        let total_tokens = get_total_governance_tokens();
        let quorum = (total_tokens * QUORUM_PERCENTAGE) / 100;
        
        if total_votes < quorum {
            proposal.status = ProposalStatus::Rejected;
        } else if proposal.votes_for > proposal.votes_against {
            proposal.status = ProposalStatus::Passed;
        } else {
            proposal.status = ProposalStatus::Rejected;
        }
        
        proposals.borrow_mut().insert(proposal_id, proposal);
        Ok(())
    })
}

#[query]
fn get_proposal(proposal_id: u64) -> Option<Proposal> {
    PROPOSALS.with(|proposals| proposals.borrow().get(&proposal_id))
}

#[query]
fn get_governance_token_balance(user: Principal) -> u64 {
    let storable_user = StorablePrincipal::from(user);
    GOVERNANCE_TOKENS.with(|tokens| tokens.borrow().get(&storable_user).unwrap_or(0))
}

#[query]
fn get_active_proposals() -> Vec<Proposal> {
    PROPOSALS.with(|proposals| {
        proposals.borrow().iter()
            .filter(|(_, proposal)| proposal.status == ProposalStatus::Active)
            .map(|(_, proposal)| proposal)
            .collect()
    })
}

#[query]
fn get_all_proposals() -> Vec<Proposal> {
    PROPOSALS.with(|proposals| {
        proposals.borrow().iter().map(|(_, proposal)| proposal).collect()
    })
}

fn get_total_governance_tokens() -> u64 {
    GOVERNANCE_TOKENS.with(|tokens| {
        tokens.borrow().iter().map(|(_, balance)| balance).sum()
    })
}

// PLATFORM STATISTICS

#[query]
fn get_platform_stats() -> PlatformStats {
    let total_users = USER_PROFILES.with(|profiles| profiles.borrow().len()) as u64;
    let total_research_tokens = total_research_tokens();
    let active_proposals = get_active_proposals().len() as u64;
    let total_governance_tokens = get_total_governance_tokens();
    
    PlatformStats {
        total_users,
        total_research_tokens,
        active_proposals,
        total_governance_tokens,
    }
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct PlatformStats {
    pub total_users: u64,
    pub total_research_tokens: u64,
    pub active_proposals: u64,
    pub total_governance_tokens: u64,
}