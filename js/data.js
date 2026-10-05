// ===================== EXPERIENCE =====================
const EXPERIENCE = [
  {
    company: "OPENLANE / Automotive Finance Corporation (AFC)",
    role: "Data Science Intern",
    dates: "June 2026 – August 2026",
    location: "Carmel, Indianapolis",
    logo: "images/openlane-logo.png",
    summary:
      "Worked on real-world machine learning and analytics problems spanning B2B vehicle recommendation, dealer segmentation, and credit risk modeling.",
    stack: ["Python", "TensorFlow", "SQL", "Snowflake", "Snowpark", "dbt", "Tableau", "GitHub"],
    projects: [
      {
        title: "Dealer Vehicle Recommendation System",
        points: [
          "Generated recommendations for 15,000+ dealers from a corpus of 200,000+ vehicles on the OPENLANE marketplace",
          "Built a B2B vehicle recommender using Snowflake notebooks with feature engineering and similarity modeling",
          "Incorporated Snowflake Cortex embeddings to build dealer similarity representations",
          "Addressed cold-start dealers using postal-code and credit-tier based lookalikes",
          "Integrated live dealer bidding and purchase information into scoring",
          "Managed production workflows with dbt and GitHub, and used Tableau to show the recommender's performance to business stakeholders",
          "Pushed the recommender to production, where it now runs in production",
        ],
        metrics: [
          { value: "70%+", label: "reduced latency" },
          { value: "15K+", label: "dealers with generated recommendations" },
          { value: "↑ Bids & purchases", label: "increase in bid and purchase rates" },
        ],
      },
      {
        title: "Dealer Credit Risk Scorecard",
        points: [
          "Performed EDA, preprocessing, and feature engineering on dealer financial and lot-level data",
          "Built a Logistic Regression model to predict dealer credit risk scores and used the scorecard_generator Python library to generate interpretable risk scorecards",
          "Identified the key features driving each dealer's risk score and automated credit-line approval, rejection, or manual review decisions",
          "Evaluated model performance using precision and recall, benchmarked against the incumbent model",
        ],
        metrics: [],
      },
    ],
  },
  {
    company: "Jocata Financial Advisory & Technology",
    role: "Data Science Intern",
    dates: "Sep 2022 – Dec 2022",
    location: "Hyderabad, India",
    logo: "images/jocata-logo.png",
    summary:
      "Built a computer vision pipeline that reads customer identity cards and documents, extracts the text, and automates customer application filings.",
    stack: ["Python", "TensorFlow", "PyTorch", "CUDA", "Computer Vision", "OCR", "Tableau"],
    projects: [
      {
        title: "Identity Card Information Extraction",
        points: [
          "Built an image-processing pipeline for customer identity cards and documents, detecting text regions and extracting their contents to automate customer application filings",
          "Designed and trained an SSD-ResNet object detection model in TensorFlow and PyTorch, owning preprocessing, feature engineering, loss selection, and hyperparameter tuning",
          "Processed identity cards for 5,000+ customers, reaching 92%+ accuracy on text detection and extraction",
          "Optimized training and inference with CUDA and GPU parallelism on NVIDIA hardware, reducing latency by 30%",
          "Built ETL and preprocessing pipelines for large-scale, noisy image inputs",
          "Communicated model performance and extraction results to business and engineering stakeholders through Tableau visualizations and reports",
        ],
        metrics: [
          { value: "92%+", label: "text detection and extraction accuracy" },
          { value: "5K+", label: "customers' identity cards processed" },
          { value: "30%", label: "reduced latency with CUDA and GPUs" },
        ],
      },
    ],
  },
];

// ===================== PROJECTS =====================
// tags used for filtering: LLM, Agentic AI, RAG, Computer Vision, NLP, Deep Learning, Research
const PROJECTS = [
  {
    id: "alta",
    name: "ALTA — AI Risk & Route Intelligence",
    tagline: "A multi-agent AI system for intelligent route and risk analysis.",
    problem:
      "Route planning and risk assessment for logistics decisions typically rely on static rules. ALTA uses an LLM-driven multi-agent workflow to reason over route data and produce explainable risk scores.",
    tech: ["LangGraph", "GPT-4o", "FastAPI", "React", "Leaflet", "Recharts", "Python"],
    details: [
      "Built an 8-node LangGraph workflow orchestrating specialized reasoning agents",
      "Used LLM-based reasoning to generate risk scores from 0–100",
      "Evaluated 900+ routes with compliance-oriented logging",
      "Built a full-stack frontend/backend architecture (React + FastAPI)",
    ],
    tags: ["Agentic AI", "LLM"],
    github: "GITHUB_URL_HERE",
    demo: "LIVE_DEMO_URL_HERE",
    featured: true,
  },
  {
    id: "coincoach",
    name: "CoinCoach — Personal Finance AI Agent",
    tagline: "An agentic AI application that helps users understand their financial situation and goals.",
    problem:
      "Personal finance conversations are unstructured. CoinCoach extracts structured financial information from natural language and produces an inspectable, structured assessment.",
    tech: ["Python", "LangChain", "Gemini", "Pydantic", "Agent workflows"],
    details: [
      "Extracts structured financial information from natural language",
      "Identifies missing information and detects contradictions",
      "Evaluates savings goals against stated financial context",
      "Produces structured financial assessments with inspectable reasoning traces",
    ],
    tags: ["Agentic AI", "LLM", "NLP"],
    github: "GITHUB_URL_HERE",
    demo: null,
  },
  {
    id: "echo-of-hands",
    name: "Echo of Hands",
    tagline: "A computer vision system that converts hand gestures into voice and text.",
    problem:
      "Sign and gesture-based communication needs low-latency, accessible interfaces. This project runs gesture recognition entirely client-side for accessible human-computer interaction.",
    tech: ["Computer Vision", "Neural Networks", "JavaScript", "Machine Learning"],
    details: [
      "Recognizes approximately 18 hand signs",
      "Trained on approximately 2,470 samples",
      "Achieved approximately 97.9% accuracy",
      "Uses client-side inference for accessible, low-latency interaction",
    ],
    tags: ["Computer Vision", "Deep Learning"],
    github: "GITHUB_URL_HERE",
    demo: "LIVE_DEMO_URL_HERE",
  },
  {
    id: "jocata",
    name: "Jocata — Identity Card Information Extraction",
    tagline: "A deep learning computer vision system for extracting information from identity cards for banking applications.",
    problem:
      "Manual identity verification is slow and error-prone. This system automates field extraction from ID cards using object detection, tuned for banking-grade accuracy and latency.",
    tech: ["PyTorch", "TensorFlow", "CUDA", "Computer Vision", "OCR"],
    details: [
      "Used SSD/ResNet-based object detection for field localization",
      "Achieved approximately 92% performance on evaluation",
      "Used GPU acceleration to reduce inference latency by approximately 30%",
    ],
    tags: ["Computer Vision", "Deep Learning"],
    github: "GITHUB_URL_HERE",
    demo: null,
  },
  {
    id: "midi-generation",
    name: "MIDI Generation",
    tagline: "A deep learning project exploring automatic music generation.",
    problem:
      "Symbolic music generation raises different modeling challenges than audio generation. This project compares generative architectures for sequence-based music composition.",
    tech: ["GAN", "GRU", "VAE", "Transformer", "Jukebox"],
    details: [
      "Worked with 100+ MIDI files as training data",
      "Explored GAN, GRU, VAE, Transformer, and Jukebox-style architectures",
      "Developed sequence-based music generation models",
    ],
    tags: ["Deep Learning"],
    github: "GITHUB_URL_HERE",
    demo: null,
  },
  {
    id: "hydrogeologic-gnn",
    name: "Learning Hydrogeologic Connectivity with Graph Neural Networks",
    tagline: "Ongoing research exploring GNNs to model relationships between groundwater monitoring wells.",
    problem:
      "Groundwater monitoring networks often contain spatial and temporal data gaps. This direction learns relationships between wells using spatial, aquifer, and well characteristics alongside groundwater-level time series.",
    tech: ["Graph Neural Networks", "Uncertainty Estimation", "Active Learning", "Python"],
    details: [
      "Modeling spatial, aquifer, and well characteristics as graph structure",
      "Incorporating groundwater-level time series and temporal relationships",
      "Long-term goal: combine GNNs, uncertainty estimation, and active learning",
      "Aim: identify where an additional observation would be most informative",
    ],
    tags: ["Research", "Deep Learning"],
    github: null,
    demo: null,
    ongoing: true,
    featured: true,
  },
];

// ===================== SKILLS =====================
const SKILLS = [
  {
    category: "Programming",
    items: ["Python", "SQL", "R", "C++"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch", "Keras"],
  },
  {
    category: "AI / GenAI",
    items: ["LangChain", "LangGraph", "Hugging Face", "RAG", "LLMs", "Agentic AI", "Embeddings", "LLM Evaluation"],
  },
  {
    category: "Data / Cloud",
    items: ["Snowflake", "Snowpark", "Snowflake Cortex", "dbt", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Deployment / Engineering",
    items: ["FastAPI", "React", "Docker", "Git", "GitHub", "Render", "Netlify"],
  },
  {
    category: "Visualization",
    items: ["Tableau", "Power BI", "Matplotlib"],
  },
];

const FILTER_TAGS = ["All", "Agentic AI", "LLM", "Computer Vision", "NLP", "Deep Learning", "Research"];
