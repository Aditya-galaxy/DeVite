use candid::{CandidType, Deserialize, Principal};
use ic_cdk::api;
use ic_cdk_macros::*;
use std::collections::BTreeMap;
use ic_llm as llm; // <-- import the ic-llm crate

#[derive(Clone, Debug, CandidType, Deserialize)]
pub enum Model {
    Llama3_1_8B,
    Qwen3_32B,
    Llama4Scout,
}

impl From<Model> for llm::Model {
    fn from(model: Model) -> Self {
        match model {
            Model::Llama3_1_8B => llm::Model::Llama3_1_8B,
            Model::Qwen3_32B => llm::Model::Qwen3_32B,
            Model::Llama4Scout => llm::Model::Llama4Scout,
        }
    }
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct AgentDeployment {
    pub owner: Principal,
    pub model: Model,
    pub deployed_at: u64,
}

thread_local! {
    static AGENTS: std::cell::RefCell<BTreeMap<Principal, Vec<AgentDeployment>>> = Default::default();
}

#[update]
fn deploy_agent(model: Model) -> Result<AgentDeployment, String> {
    let caller = api::caller();
    let deployment = AgentDeployment {
        owner: caller,
        model: model.clone(),
        deployed_at: api::time(),
    };
    AGENTS.with(|agents| {
        let mut agents = agents.borrow_mut();
        agents.entry(caller).or_default().push(deployment.clone());
    });
    Ok(deployment)
}

#[update]
async fn prompt_model(model: Model, prompt: String) -> Result<String, String> {
    let llm_model: llm::Model = model.clone().into();
    let response = llm::prompt(llm_model, &prompt).await;
    Ok(response)
}

#[query]
fn get_my_agents() -> Vec<AgentDeployment> {
    let caller = api::caller();
    AGENTS.with(|agents| agents.borrow().get(&caller).cloned().unwrap_or_default())
}