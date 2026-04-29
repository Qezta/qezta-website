export interface KnowledgeChunk {
	id: string;
	title: string;
	content: string;
	keywords: string[];
}

export const knowledgeBase: KnowledgeChunk[] = [
	{
		id: 'identity',
		title: 'Who is Divit Mittal',
		content: `Divit Mittal is an Infrastructure Engineer and ML Researcher based in India. He is currently pursuing a B.Tech in Data Science at Manipal University Jaipur (MUJ). His work sits at the intersection of declarative infrastructure, type-safe systems, and production ML deployment.

He is particularly passionate about functional programming — especially Haskell and Nix — and believes in building systems that are reproducible, correct by construction, and easy to reason about. Outside of code, his interests span audio digital signal processing, autonomous systems, and research-grade computer vision.

Divit approaches engineering with an emphasis on correctness and elegance over hacks. He favors declarative configuration (NixOS) over imperative setup scripts, pure functions over side effects, and strongly-typed languages over dynamic ones.`,
		keywords: [
			'who',
			'about',
			'identity',
			'person',
			'background',
			'introduction',
			'divit',
			'mittal',
			'engineer',
			'researcher'
		]
	},
	{
		id: 'education',
		title: 'Education',
		content: `Divit is pursuing a Bachelor of Technology (B.Tech) in Data Science at Manipal University Jaipur (MUJ), India. His coursework covers machine learning, statistics, data engineering, and software systems.

During his studies, he has gone well beyond the curriculum — building NixOS configurations with 100+ modules, publishing ML models on HuggingFace, and contributing to open-source infrastructure tooling. His academic research has focused on computer vision, specifically multi-focus image fusion using transformer architectures.`,
		keywords: [
			'education',
			'university',
			'college',
			'degree',
			'study',
			'student',
			'manipal',
			'btech',
			'data science',
			'academic'
		]
	},
	{
		id: 'experience-cv-researcher',
		title: 'Computer Vision Researcher at Manipal University',
		content: `Divit worked as a Computer Vision Researcher at Manipal University Jaipur from May to August 2025. During this role he:

• Developed the HybridTransformer-MFIF model — a novel transformer-based architecture for Multi-Focus Image Fusion (MFIF)
• Evaluated the model on benchmark datasets: LLVIP (low-light visible-infrared pairs), TNO (thermal-visual), and MSRS (multi-spectral remote sensing)
• Published the trained model on HuggingFace with a live interactive demo space
• Contributed original research advancing state-of-the-art in image fusion for applications like autonomous driving and surveillance

This role demonstrates Divit's capability to take ML research from idea through implementation to published, reproducible artifact.`,
		keywords: [
			'experience',
			'job',
			'work',
			'research',
			'computer vision',
			'researcher',
			'manipal',
			'internship',
			'cv',
			'image fusion',
			'transformer',
			'huggingface'
		]
	},
	{
		id: 'experience-devops',
		title: 'DevOps & SysAdmin at UbiOps / Yes!Delft',
		content: `Divit worked as a DevOps and SysAdmin engineer at UbiOps, hosted at Yes!Delft (a Dutch deep-tech incubator), from December 2021 to February 2022. During this role he:

• Containerized ML workloads using Docker and Kubernetes
• Set up and maintained CI/CD pipelines for model deployment
• Managed cloud infrastructure on AWS and GCP
• Contributed to the automation and reliability of a production ML platform

This early experience gave Divit deep exposure to production infrastructure concerns — container orchestration, cloud cost management, and deployment pipelines — which he later refined through his NixOS and functional infrastructure work.`,
		keywords: [
			'experience',
			'job',
			'work',
			'devops',
			'sysadmin',
			'ubiops',
			'yes delft',
			'docker',
			'kubernetes',
			'aws',
			'gcp',
			'internship',
			'infrastructure',
			'cloud'
		]
	},
	{
		id: 'project-hybridtransformer',
		title: 'HybridTransformer-MFIF Project',
		content: `HybridTransformer-MFIF is Divit's flagship research project — a novel multi-focus image fusion (MFIF) architecture combining CNN and Transformer components. Key details:

• Architecture: Hybrid CNN + Vision Transformer design for capturing both local texture and global context in image fusion
• Task: Fusing multiple images of the same scene taken at different focal depths into a single all-in-focus image
• Applications: Autonomous driving cameras, medical imaging, surveillance systems, microscopy
• Datasets: Evaluated on LLVIP, TNO, and MSRS benchmarks
• Published: Available on HuggingFace (divitmittal/HybridTransformer-MFIF) with a live demo
• Built with: PyTorch, HuggingFace Transformers, Python

This project showcases Divit's ability to work with state-of-the-art architectures and contribute original research-grade ML work.`,
		keywords: [
			'project',
			'hybridtransformer',
			'mfif',
			'image fusion',
			'computer vision',
			'transformer',
			'pytorch',
			'ml',
			'research',
			'huggingface',
			'model'
		]
	},
	{
		id: 'project-nixcfg',
		title: 'OS-nixCfg: Multi-Platform NixOS Configuration',
		content: `OS-nixCfg is Divit's comprehensive NixOS configuration repository, one of the most starred projects on his GitHub (14+ stars). Key details:

• Scope: 100+ NixOS modules covering system configuration, home-manager, shell environments, editors, and development tools
• Platforms: Supports 4+ platforms including NixOS (x86_64, aarch64), nix-darwin (macOS), and WSL
• Approach: Fully declarative — the entire system state is defined in Nix, reproducible on any supported machine
• Features: Custom overlays, flake-based composition, modular separation of concerns, agenix for secrets management
• Tools: Uses devshell, treefmt, git-hooks, and Hydra for CI

This repo demonstrates Divit's deep expertise in Nix/NixOS and his philosophy of infrastructure as code — if it's not in git, it doesn't exist.`,
		keywords: [
			'project',
			'nix',
			'nixos',
			'configuration',
			'infrastructure',
			'system',
			'os-nixcfg',
			'devops',
			'declarative',
			'flakes',
			'darwin',
			'macos'
		]
	},
	{
		id: 'project-hsfaust',
		title: 'hs-faust: Haskell DSL for Audio Processing',
		content: `hs-faust is a Haskell library providing a Domain-Specific Language (DSL) for audio signal processing using the FAUST (Functional Audio Stream) language. Key details:

• Purpose: Lets Haskell programmers write audio processing pipelines in a type-safe, functional style
• Technology: Haskell FFI (Foreign Function Interface) to call into FAUST-generated C code
• Domain: Digital Signal Processing (DSP), real-time audio synthesis and effects
• Approach: Builds on Haskell's strong type system to catch DSP composition errors at compile time
• Stars: 5+ GitHub stars

This project sits at the intersection of Divit's two deep interests: functional programming and audio DSP. It showcases his ability to design ergonomic APIs and work with FFI in Haskell.`,
		keywords: [
			'project',
			'haskell',
			'faust',
			'audio',
			'dsp',
			'signal processing',
			'functional programming',
			'ffi',
			'music',
			'hs-faust'
		]
	},
	{
		id: 'project-carla',
		title: 'CARLA Autonomous Driving Project',
		content: `CARLA-Autonomous-Driving is a machine learning project using the CARLA simulator for autonomous vehicle research. It is one of Divit's most popular repositories (18+ stars). Key details:

• Simulator: CARLA — an open-source autonomous driving simulator
• Approach: Trains and evaluates deep learning models for perception and control in simulated environments
• Tasks: Object detection, lane following, collision avoidance in realistic 3D environments
• Built with: Python, PyTorch, CARLA Python API

This project reflects Divit's interest in applying computer vision and ML to real-world safety-critical applications like autonomous driving.`,
		keywords: [
			'project',
			'carla',
			'autonomous',
			'driving',
			'self-driving',
			'car',
			'simulation',
			'reinforcement learning',
			'ml',
			'perception',
			'vehicle'
		]
	},
	{
		id: 'project-docassist',
		title: 'DocAssist-LLM: RAG-Enhanced LLM from Scratch',
		content: `DocAssist-LLM is a project where Divit built a RAG (Retrieval-Augmented Generation) system from scratch for document question-answering. Key details:

• Purpose: A document assistant that answers questions about uploaded documents using retrieved context
• Architecture: Full RAG pipeline — document chunking, embedding, vector retrieval, LLM generation
• Built from scratch: Implements core RAG components without relying on high-level frameworks like LangChain
• Technologies: Python, PyTorch / HuggingFace Transformers, vector similarity search
• Stars: 8+ GitHub stars

This project shows Divit's deep understanding of how LLMs and retrieval systems work at a fundamental level, beyond just using APIs.`,
		keywords: [
			'project',
			'rag',
			'llm',
			'docassist',
			'retrieval',
			'augmented',
			'generation',
			'language model',
			'document',
			'question answering',
			'nlp',
			'ai'
		]
	},
	{
		id: 'project-kanata',
		title: 'kanata-service: macOS Launchctl Service Manager',
		content: `kanata-service is a utility for managing the Kanata keyboard remapper as a persistent macOS launchd service. Key details:

• Purpose: Automates the setup of Kanata (a cross-platform keyboard remapper) as a background service on macOS
• Technology: macOS launchd / launchctl for service lifecycle management
• Use case: Lets Divit maintain a highly customized keyboard layout that persists across reboots without manual intervention
• Stars: 11+ GitHub stars

This project reflects Divit's SysAdmin expertise and his pragmatic approach to automating repetitive system administration tasks.`,
		keywords: [
			'project',
			'kanata',
			'macos',
			'launchctl',
			'service',
			'keyboard',
			'system',
			'sysadmin',
			'automation'
		]
	},
	{
		id: 'skills-functional',
		title: 'Functional Programming Skills',
		content: `Divit has expert-level proficiency in functional programming, which he considers one of his core strengths:

Haskell:
• Advanced type system usage (GADTs, type families, kind polymorphism)
• FFI (Foreign Function Interface) for C interop
• Cabal and Stack build systems
• Designing type-safe DSLs
• Pure functional patterns, monads, applicatives, lenses

Nix / NixOS:
• Advanced derivations and overrides
• Flakes and flake composition
• Custom overlays and patches
• Home Manager module authoring
• Binary cache configuration
• 100+ module NixOS configurations across multiple platforms

Type Systems:
• Strong preference for types over tests (types are proofs)
• Experience with dependent types conceptually
• DSL design with type safety

Level: Expert`,
		keywords: [
			'skills',
			'functional',
			'programming',
			'haskell',
			'nix',
			'type systems',
			'monads',
			'pure',
			'expert',
			'ffi',
			'flakes'
		]
	},
	{
		id: 'skills-infrastructure',
		title: 'Infrastructure & DevOps Skills',
		content: `Divit has strong infrastructure engineering skills:

NixOS & Declarative Infrastructure:
• 100+ NixOS modules across 4+ platforms
• Reproducible system configuration
• Flake-based project management
• Custom CI with Hydra and GitHub Actions

Containers & Orchestration:
• Docker (containerization, multi-stage builds, compose)
• Kubernetes (cluster management, deployments, services)
• Experienced from production ML workloads at UbiOps

Cloud Platforms:
• AWS (EC2, S3, Glue, Lambda)
• GCP (Compute Engine, Cloud Storage)
• Terraform for IaC

CI/CD:
• GitHub Actions
• Jenkins
• Hydra (Nix-native CI)
• Nix binary caching for fast CI

Level: Advanced`,
		keywords: [
			'skills',
			'infrastructure',
			'devops',
			'docker',
			'kubernetes',
			'aws',
			'gcp',
			'terraform',
			'cicd',
			'cloud',
			'nixos',
			'github actions'
		]
	},
	{
		id: 'skills-aiml',
		title: 'AI/ML Skills',
		content: `Divit has solid AI/ML skills with a focus on computer vision and applied research:

Deep Learning Frameworks:
• PyTorch (primary framework)
• HuggingFace Transformers (fine-tuning, custom architectures)
• Experience with training loop optimization, mixed precision, etc.

Computer Vision:
• Transformer-based architectures (ViT, hybrid CNN-Transformer)
• Image fusion, object detection, semantic segmentation
• Benchmark evaluation on standard datasets

RAG & LLMs:
• Built RAG pipelines from scratch (DocAssist-LLM)
• Understanding of embeddings, vector search, context retrieval
• Prompt engineering and system design

MLOps:
• HuggingFace Hub for model publishing and demo spaces
• Model packaging and deployment
• Kaggle competitions (datasets)

Level: Intermediate to Advanced`,
		keywords: [
			'skills',
			'ai',
			'ml',
			'machine learning',
			'deep learning',
			'pytorch',
			'transformers',
			'computer vision',
			'rag',
			'llm',
			'huggingface',
			'kaggle',
			'neural network'
		]
	},
	{
		id: 'skills-data-engineering',
		title: 'Data Engineering Skills',
		content: `Divit has data engineering experience from his coursework and projects:

Distributed Processing:
• Apache Spark (PySpark) for large-scale data processing
• Hadoop ecosystem
• Apache Kafka for stream processing

Cloud Data:
• AWS Glue for ETL pipelines
• S3 data lakes
• AWS Athena for serverless SQL

Visualization:
• PowerBI for dashboards and reporting
• Matplotlib/Seaborn for analysis

Databases:
• SQL (PostgreSQL, SQLite)
• Experience with NoSQL patterns

Level: Intermediate`,
		keywords: [
			'skills',
			'data engineering',
			'spark',
			'hadoop',
			'kafka',
			'aws glue',
			'etl',
			'pipeline',
			'data',
			'powerbi',
			'sql'
		]
	},
	{
		id: 'skills-languages',
		title: 'Programming Languages',
		content: `Divit's programming language proficiency:

Expert / Daily Use:
• Python — ML, scripting, automation
• Nix — system configuration, build tooling
• Haskell — functional programming, type-safe DSLs
• Bash — shell scripting, automation

Proficient:
• TypeScript — web development (this portfolio uses SvelteKit + TS)
• Go — systems programming, CLI tools

Learning / Familiar:
• Swift — iOS/macOS development exposure
• Rust — interested, learning incrementally

Divit strongly prefers statically typed languages and is skeptical of dynamic typing for anything beyond small scripts.`,
		keywords: [
			'skills',
			'languages',
			'python',
			'typescript',
			'haskell',
			'go',
			'swift',
			'bash',
			'nix',
			'programming',
			'coding'
		]
	},
	{
		id: 'contact',
		title: 'Contact Information',
		content: `How to reach Divit Mittal:

Email: divitmittal@outlook.in
GitHub: github.com/DivitMittal
LinkedIn: linkedin.com/in/divit-mittal
HuggingFace: huggingface.co/divitmittal
Kaggle: kaggle.com/divitmittal
Twitter / X: x.com/Divit_Mittal

Divit is open to:
• Research collaborations (especially computer vision, functional programming)
• Interesting infrastructure or ML engineering roles
• Open-source contributions and discussions
• Conversations about Haskell, Nix, or audio DSP

The best way to start a conversation is through GitHub or LinkedIn.`,
		keywords: [
			'contact',
			'email',
			'github',
			'linkedin',
			'twitter',
			'huggingface',
			'kaggle',
			'reach',
			'connect',
			'hire',
			'collaboration'
		]
	},
	{
		id: 'interests-philosophy',
		title: "Divit's Interests and Engineering Philosophy",
		content: `Divit's engineering philosophy is shaped by a few core beliefs:

1. Correctness by construction: He prefers systems where incorrect states are unrepresentable — Nix derivations that either build or fail, Haskell types that rule out invalid inputs.

2. Reproducibility over convenience: A system you can't reproduce from scratch in 10 minutes is already broken. His entire OS setup can be rebuilt from a single git clone.

3. Declarative over imperative: Describe what you want, not how to get there. NixOS modules, Terraform configs, functional transformations.

4. Types over tests (where possible): A well-designed type system catches entire categories of bugs the test suite never needs to cover.

Personal interests outside of his primary work:
• Audio DSP and music technology (hs-faust project)
• Autonomous systems and robotics (CARLA project)
• Philosophy of programming languages
• Linux rice and terminal workflow optimization
• Reading about programming language theory`,
		keywords: [
			'interests',
			'philosophy',
			'values',
			'hobbies',
			'approach',
			'beliefs',
			'engineering',
			'style',
			'personality',
			'audio',
			'music',
			'robotics'
		]
	},
	{
		id: 'resume-cv',
		title: 'CV and Resume',
		content: `Divit's full CV is available on Europass. It covers his complete academic background, work experience, technical skills, projects, and publications.

The CV can be viewed at his Europass ePortfolio. For a structured summary:

Education: B.Tech Data Science, Manipal University Jaipur
Experience:
  • Computer Vision Researcher @ MUJ (May–Aug 2025)
  • DevOps & SysAdmin @ UbiOps, Yes!Delft (Dec 2021–Feb 2022)

Key Projects: HybridTransformer-MFIF, OS-nixCfg, CARLA-Autonomous-Driving, DocAssist-LLM, hs-faust, kanata-service

If you're a recruiter or collaborator interested in Divit, the best next step is to reach out via email (divitmittal@outlook.in) or LinkedIn.`,
		keywords: [
			'resume',
			'cv',
			'curriculum',
			'vitae',
			'europass',
			'hire',
			'recruiter',
			'download',
			'portfolio',
			'experience',
			'qualifications'
		]
	}
];
