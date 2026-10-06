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
          "Built a B2B vehicle recommender in Snowflake notebooks using feature engineering, similarity modeling, and Snowflake Cortex embeddings for dealer similarity",
          "Addressed cold-start dealers with postal-code and credit-tier based lookalikes, and integrated live dealer bidding and purchase data into scoring",
          "Pushed the recommender to production using dbt and GitHub workflows, where it now runs",
          "Used Tableau to show the recommender's performance to business stakeholders",
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
          "Built ETL and preprocessing pipelines for large-scale, noisy image inputs and presented model performance to business and engineering stakeholders through Tableau reports",
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

// ===================== RESEARCH =====================
const RESEARCH = [
  {
    company: "College of Agriculture and Natural Resources, University of Maryland",
    role: "Research Assistant",
    dates: "May 2026 – Present",
    location: "College Park, Maryland",
    logo: "images/umd-logo.png",
    summary:
      "Applying data analysis, machine learning and deep learning techniques to groundwater and hydrology problems, from downscaling satellite water storage data to learning how groundwater wells relate to each other not only by distance but by hydrological features.",
    stack: ["Python", "TensorFlow", "BiLSTM", "Monte Carlo Dropout", "Graph Neural Networks", "Uncertainty Estimation", "Active Learning"],
    projects: [
      {
        title: "GRACE Terrestrial Water Storage Downscaling",
        dates: "May 2026 – July 2026",
        points: [
          "Reviewed and reproduced an ongoing research paper",
          "Developed a Monte Carlo Dropout BiLSTM model in TensorFlow to downscale GRACE terrestrial water storage data from approximately 1° to 0.25° resolution",
          "Worked with data spanning 2002–2022 across roughly 710 grid cells",
          "Generated 175K+ grid-month estimates and reconstructed 1,451 missing observations",
          "Used Monte Carlo Dropout for uncertainty estimation, achieving strong agreement with GRACE observations",
          "Investigated drought-related indicators such as SPEI-12",
          "Compared model predictions against groundwater well observations",
        ],
        metrics: [
          { value: "1° → 0.25°", label: "spatial downscaling" },
          { value: "175K+", label: "grid-month estimates" },
          { value: "710", label: "grid cells modeled" },
          { value: "2002–2022", label: "study period" },
        ],
      },
      {
        title: "Learning Hydrogeologic Connectivity with Graph Neural Networks (Ongoing Research Direction)",
        dates: "Sep 2026 – Present",
        points: [
          "Groundwater monitoring networks often contain spatial and temporal data gaps; this direction explores learning relationships between wells",
          "Using spatial characteristics, aquifer characteristics, well characteristics, groundwater-level time series, and temporal relationships",
          "Combining Graph Neural Networks, uncertainty estimation, and active learning to identify where an additional groundwater observation would provide the most information, and to predict the groundwater level in that aquifer or well",
        ],
        metrics: [],
      },
    ],
  },
];

// ===================== PROJECTS =====================
// scope tags (used for filtering): Machine Learning, Deep Learning, GenAI, Agentic AI, Core NLP
const PROJECTS = [
  {
    id: "alta",
    name: "ALTA — Adaptive Logistics and Tracking Agent",
    year: "2026",
    scope: ["Agentic AI", "GenAI"],
    description:
      "A real-time agentic AI platform for pharmaceutical cold-chain monitoring. An 8-node LangGraph pipeline powered by GPT-4o scores shipment risk and recommends actions, with human approval at every step.",
    highlights: [
      { value: "8", label: "LangGraph nodes" },
      { value: "900+", label: "cargo routes evaluated" },
      { value: "0–100", label: "dynamic risk score" },
    ],
    tech: ["Python", "LangGraph", "LangChain", "GPT-4o", "FastAPI", "React", "TypeScript", "Leaflet", "Recharts"],
    github: "https://github.com/Hamshika06/Cargo-Monitoring",
  },
  {
    id: "geomagnetic-storm",
    name: "Geomagnetic Storm Early-Warning System",
    year: "2026",
    scope: ["Machine Learning"],
    description:
      "An end-to-end MLOps system that forecasts geomagnetic storms (Kp ≥ 5) three hours ahead. Trained on NASA OMNI2 history and served live from NOAA solar-wind feeds, with drift monitoring.",
    highlights: [
      { value: "228K+", label: "hourly observations" },
      { value: "3 hr", label: "advance warning" },
      { value: "Live", label: "NOAA inference" },
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "MLflow", "DVC", "FastAPI", "Docker", "GitHub Actions", "Evidently AI"],
    github: "https://github.com/Hamshika06/Project-Machine_Learning_System",
  },
  {
    id: "coincoach",
    name: "CoinCoach — Personal Finance AI Agent",
    year: "2026",
    scope: ["Agentic AI", "GenAI"],
    description:
      "An agentic AI app that turns a user's own words into a structured view of their finances. It flags missing details and contradictions, evaluates savings goals, and shows its reasoning.",
    highlights: [
      { value: "Structured", label: "financial extraction" },
      { value: "Conflicts", label: "contradictions detected" },
      { value: "Traceable", label: "reasoning traces" },
    ],
    tech: ["Python", "LangChain", "Gemini", "Pydantic"],
    github: "https://github.com/Hamshika06/CoinCoach",
  },
  {
    id: "inkwell",
    name: "Inkwell — Privacy Policy Clause Classifier",
    year: "2026",
    scope: ["Core NLP", "Deep Learning", "Machine Learning"],
    description:
      "An NLP system that classifies privacy-policy clauses into fixed categories and ties every label to the exact clause behind it. Missing categories are reported as gaps, with no generative model involved.",
    highlights: [
      { value: "0.80", label: "micro F1, RoBERTa-base" },
      { value: "3", label: "models compared" },
      { value: "0", label: "LLM APIs used" },
    ],
    tech: ["Python", "DistilBERT", "RoBERTa", "TF-IDF", "SVM"],
    github: "https://github.com/Hamshika06/Inkwell",
  },
  {
    id: "conversational-diagram-designer",
    name: "Conversational Diagram Designer",
    year: "2026",
    scope: ["GenAI", "Agentic AI"],
    description:
      "A browser tool that turns plain-language requests into Graphviz, Mermaid, or PlantUML diagrams. A vision-feedback loop checks the rendered image and corrects it.",
    highlights: [
      { value: "3", label: "diagram formats" },
      { value: "3", label: "self-correction passes" },
      { value: "3", label: "LLM providers" },
    ],
    tech: ["Python", "FastAPI", "React", "Vite", "Gemini", "Graphviz", "Mermaid", "PlantUML", "Docker"],
    github: "https://github.com/Hamshika06/Conversational-Diagram-Designer",
  },
  {
    id: "echo-of-hands",
    name: "Echo of Hands",
    year: "2024",
    scope: ["Machine Learning", "Deep Learning"],
    description:
      "A real-time hand-sign communication aid that recognises 18 signs from a webcam and speaks the matching phrase aloud. It runs entirely in the browser using MediaPipe hand landmarks.",
    highlights: [
      { value: "97.9%", label: "held-out accuracy" },
      { value: "18", label: "hand signs" },
      { value: "Client-side", label: "no uploads or server" },
    ],
    tech: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "JavaScript", "Web Speech API"],
    github: "https://github.com/Hamshika06/Echo-of-hands",
  },
  {
    id: "vision-pass",
    name: "VisionPass — ANPR Vehicle Entry Authorization",
    year: "2025",
    scope: ["Deep Learning", "Machine Learning"],
    description:
      "An ANPR system that reads Indian number plates with YOLOv11 and EasyOCR to authorize vehicle entry. Uncertain reads go to manual review, and every decision is logged.",
    highlights: [
      { value: "3", label: "access decisions" },
      { value: "50", label: "YOLOv11 training epochs" },
      { value: "Audit log", label: "timestamped decisions" },
    ],
    tech: ["Python", "YOLOv11", "EasyOCR", "OpenCV", "Flask"],
    github: "https://github.com/Hamshika06/Vision-Pass",
  },
  {
    id: "symphony-of-algorithms",
    name: "Symphony of Algorithms",
    year: "2024",
    scope: ["Deep Learning", "GenAI"],
    description:
      "A comparison of GRU, LSTM, GAN, VAE, and GPT-2 Transformer models composing Pokémon-style music. All models train on one MIDI corpus and share the same metrics.",
    highlights: [
      { value: "307", label: "MIDI themes" },
      { value: "31.6%", label: "best next-note accuracy" },
      { value: "5", label: "models compared" },
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "Keras", "Hugging Face", "GPT-2"],
    github: "https://github.com/Hamshika06/Symphony-of-Algorithms",
  },
];

// ===================== SKILLS =====================
const SKILLS = [
  {
    category: "Programming",
    items: ["Python", "SQL", "R", "C++"],
  },
  {
    category: "Data / Cloud",
    items: ["Snowflake", "Snowpark", "dbt", "AWS", "PostgreSQL", "MySQL", "SQLite"],
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
    category: "Deployment / Engineering",
    items: ["FastAPI", "React", "Docker", "Git", "GitHub", "Render", "Netlify"],
  },
  {
    category: "Visualization",
    items: ["Tableau", "Power BI", "Matplotlib"],
  },
];

const FILTER_TAGS = ["All", "Machine Learning", "Deep Learning", "GenAI", "Agentic AI", "Core NLP"];
