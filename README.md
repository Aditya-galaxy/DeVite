# DeVite

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
