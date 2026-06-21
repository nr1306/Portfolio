export type Project = {
  id: string;
  title: string;
  label?: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  image?: string;
  featured?: boolean;
  comingSoon?: boolean;
  category?: string;
};

export type ResearchWork = {
  id: string;
  title: string;
  venue: string;
  date: string;
  url: string;
  summary: string;
  tags: string[];
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  year: string;
  bullets: string[];
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  start: string;
  end: string;
  year: string;
  details: string[];
};

export type Hobby = {
  id: string;
  label: string;
  icon: string;
};

export type Skill = {
  label: string;
  category: "language" | "framework" | "tool";
};

// ── Featured Projects ────────────────────────────────────
export const featuredProjects: Project[] = [
  {
    id: "aria",
    title: "ARIA",
    label: "Clinical AI System",
    category: "Healthcare",
    description: "AI-powered pre-visit briefing system for a hypertension patient panel. ARIA generates risk-stratified clinical summaries before appointments using rules-based checks, risk scoring, FHIR R4 ingestion, and guarded LLM summaries.\n\nThe system is designed as clinician decision support, not autonomous diagnosis, with deterministic safety gates controlling when model output can be surfaced.",
    tags: ["Python", "FastAPI", "FHIR R4", "LLM Guardrails", "Healthcare AI"],
    github: "https://github.com/nr1306/Aria",
    demo: "https://youtu.be/ZyLbQzBVr6g",
    image: "/ARIA.png",
    featured: true,
    comingSoon: true,
  },
  {
    id: "carebridge",
    title: "CareBridge",
    label: "Community Care AI",
    category: "Healthcare",
    description: "Community care platform connecting elderly, homebound, and vulnerable individuals with vetted volunteers from local faith organizations. A safety-first 6-step AI intake protocol halts immediately for emergencies; multi-signal matching scores candidates across distance, schedule, skills, rating, language, and history — returning a ranked top 5.\n\nSMS dispatch tracks volunteer check-in/check-out and auto-escalates on silence. A daily 7am risk scan flags at-risk receivers from weather conditions and missed visits. Powered by Claude AI, Google A2A, and 5 MCP servers — coordinator support only, no medical decisions.",
    tags: ["Next.js", "TypeScript", "Anthropic Claude", "Google A2A", "MCP", "PostgreSQL", "Twilio"],
    github: "https://github.com/Sahil-Khalsa/outreach-revival",
    demo: "https://outreach-production-04e5.up.railway.app",
    image: "/carebridge.png",
    featured: true,
  },
  {
    id: "venturescope",
    title: "VentureScope",
    label: "Multi-Agent Platform",
    category: "Multi-Agent AI",
    description: "Multi-agent due diligence platform that runs market, financial, competitor, and risk agents in parallel. Built with FastAPI, Celery, Redis, PostgreSQL, and pgvector, then synthesized into structured investment reports in under 2 minutes.\n\nIncludes an evaluation harness tested on a 50-company golden dataset, reaching 100% competitor recall.",
    tags: ["FastAPI", "Next.js", "Python", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/nr1306/VentureScope",
    demo: "https://www.youtube.com/watch?v=qH7DqGAJocM",
    image: "/Venturescope.png",
    featured: true,
    comingSoon: true,
  },
  {
    id: "golazo",
    title: "Golazo",
    label: "World Cup AI Agent",
    category: "Multi-Agent AI",
    description: "AI-powered companion for the 2026 FIFA World Cup. Chat with an AI agent to explore match lineups, plan your trip, check stadium crowd vibes, manage a fantasy roster, and receive live score alerts — all for USA/Canada/Mexico 2026.\n\nBuilt on Google ADK (Agent Development Kit) with Gemini 2.0 Flash, backed by FastAPI and MongoDB Atlas vector search for personalized, context-aware responses.",
    tags: ["Next.js", "FastAPI", "Google ADK", "Gemini 2.0", "MongoDB Atlas", "TypeScript"],
    github: "https://github.com/nr1306/golazo",
    demo: "https://golazo-wc2026-de61e.web.app",
    image: "/golazo.png",
    featured: true,
  },
  {
    id: "prepwise",
    title: "PrepWise",
    label: "Voice AI Product",
    category: "Voice AI",
    description: "Real-time AI mock interview platform with voice-driven sessions via Vapi AI. Features Firebase authentication, Google Gemini-powered conversational flows, instant feedback with session transcripts, and a full session dashboard — built on Next.js with a sub-300ms response pipeline.",
    tags: ["Next.js", "TypeScript", "Firebase", "Vapi AI", "Gemini"],
    github: "https://github.com/nr1306",
    image: "/Prepwise.png",
    featured: true,
    comingSoon: true,
  },
  {
    id: "ticker",
    title: "Ticker",
    label: "v0.9.0 Released",
    category: "Productivity",
    description: "Ambient Electron desktop widget for live stock tracking across portfolio and watchlist views. Includes GPT-4o-powered recommendations, smart price alerts, native notifications, and an AI news pulse backed by SQLite caching.",
    tags: ["TypeScript", "Electron", "Node.js", "SQLite", "GPT-4o"],
    github: "https://github.com/nr1306/Ticker",
    demo: "https://github.com/nr1306/Ticker/releases/tag/v0.9.0",
    demoLabel: "Download",
    image: "/Ticker.png",
    featured: true,
  },
];

// ── Other Projects ───────────────────────────────────────
export const projects: Project[] = [
  {
    id: "spacedata",
    title: "SpaceData Launch System",
    description: "Full-stack web app delivering real-time space mission and planetary data by integrating the SpaceX API with GraphQL. Built with React and Node.js; improved responsiveness 35% through async data fetching and reusable component architecture.",
    tags: ["React", "Node.js", "GraphQL"],
    github: "https://github.com/nr1306/SpaceDataLaunchSystem",
  },
  {
    id: "mcp-chatbot",
    title: "MCP-based MongoDB Chatbot",
    description: "AI-driven database chatbot integrating MongoDB with the Model Context Protocol (MCP) to perform CRUD operations through natural language. Terminal interface powered by Google Gemini API for real-time, conversational data retrieval.",
    tags: ["Python", "MongoDB", "Gemini", "MCP"],
    github: "https://github.com/nr1306/MCP-Based_MongoDB_Chatbot",
  },
  {
    id: "pdf-qa",
    title: "PDF Question Answering System",
    description: "Semantic document QA system using Apache Cassandra and DataStax Astra DB as vector databases for retrieval-augmented generation. Streamlit interface for PDF upload and context-aware Q&A powered by LangChain + OpenAI GPT-3.5.",
    tags: ["Python", "LangChain", "OpenAI", "Cassandra", "Streamlit"],
    github: "https://colab.research.google.com/drive/1w6yjhLL-wFDydBkzdgxcrHksWOaHfoxt",
  },
  {
    id: "aws-compliance",
    title: "AWS Compliance Automation",
    description: "Event-driven policy enforcement platform across AWS services. Lambda functions triggered via EventBridge auto-remediate non-compliant EBS, EC2, and S3 configurations — reducing manual compliance checks by 70% and cloud ops overhead by 60%.",
    tags: ["Python", "AWS", "Lambda", "EventBridge"],
    github: "https://github.com/nr1306/AWS-Event-Driven-Compliance-Automation",
  },
  {
    id: "dynamo-viz",
    title: "DynamoDB Data Visualization",
    description: "Serverless analytics pipeline enabling SQL querying on NoSQL data by connecting DynamoDB to Athena via an AWS Lambda connector and Glue crawlers. Real-time dashboards built with Amazon QuickSight, secured through IAM role policies.",
    tags: ["AWS", "Python", "Athena", "QuickSight"],
  },
  {
    id: "gradient-boosting",
    title: "Gradient Boosting from Scratch",
    description: "Custom Gradient Boosting Tree implementation following ESL Ch.10 with a familiar fit–predict interface. Supports squared error, absolute error, and Huber loss with tunable hyperparameters. Validated on the California Housing dataset with feature importance analysis.",
    tags: ["Python", "ML", "Statistics"],
    github: "https://github.com/nr1306/ML_Project2",
  },
  {
    id: "elasticnet",
    title: "ElasticNet Regression",
    description: "Linear Regression with ElasticNet regularization (L1 + L2 blend) built from scratch. Includes synthetic data generation, clean fit–predict interface, and configurable alpha and l1_ratio hyperparameters for balancing prediction accuracy with model sparsity.",
    tags: ["Python", "ML", "Statistics"],
    github: "https://github.com/nr1306/Project1_ML",
  },
  {
    id: "home-automation",
    title: "Home Automation Dashboard",
    description: "Production-ready IoT home automation system integrating ESP32 microcontrollers and DS18B20 sensors into a responsive Qt Quick dashboard. MQTT + AWS IoT Core for secure real-time device communication across 10+ connected devices.",
    tags: ["C++", "Qt/QML", "MQTT", "AWS", "IoT"],
    github: "https://github.com/20IT121/Homemade_Automation-Dashboard",
  },
  {
    id: "fitpulse",
    title: "FitPulse — Fitness Microservices",
    description: "Full-stack microservices fitness platform built with Java Spring Boot. RESTful services for user management, workout logging, and real-time tracking — containerized with Docker, persisted via Spring Data JPA, and covered with unit and integration tests.",
    tags: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
  },
  {
    id: "realestate-pipeline",
    title: "Real Estate Analytics Pipeline",
    description: "Batch data pipeline using PySpark to ingest raw CSV/JSON lease and occupancy data, apply cleansing and deduplication, and write optimized Parquet outputs. SQL models for KPI reporting — occupancy rate, renewal rate, delinquency risk — with full data quality checks.",
    tags: ["PySpark", "SQL", "Python", "Parquet"],
  },
];

// ── Research Publications ───────────────────────────────
export const research: ResearchWork[] = [
  {
    id: "breast-cancer-cnn",
    title: "Deep Learning for Breast Cancer Classification: A Comparative Study of Pretrained CNN Models",
    venue: "Springer",
    date: "Apr 2025",
    url: "https://link.springer.com/chapter/10.1007/978-981-97-8526-1_39",
    summary: "Comparative study of six pretrained CNN architectures (VGG16, ResNet50, Xception, InceptionV3, DenseNet121, DenseNet169) on a 2,292-image histopathology biopsy dataset, split 80/10/10 train/validation/test. Xception + SGD achieved 99.99% accuracy; ResNet50 + Adam reached 99.8% — demonstrating transfer learning's efficacy for biopsy-based cancer classification.",
    tags: ["Python", "TensorFlow", "CNN", "Transfer Learning", "Medical AI"],
  },
  {
    id: "timeseries-forecasting",
    title: "Comparing Effectiveness of Statistical Versus Deep Learning for Time Series Forecasting",
    venue: "Springer",
    date: "Jun 2024",
    url: "https://link.springer.com/chapter/10.1007/978-981-97-1313-4_22",
    summary: "Benchmarked ARIMA, Prophet, RNN, GRU, LSTM, DeepAR, Bi-LSTM, and Bi-GRU on the Jena Climate and Appliances Energy datasets. DeepAR and Bi-LSTM outperformed all others — deep learning captured non-linear long-term dependencies that statistical models consistently missed.",
    tags: ["Python", "TensorFlow", "ARIMA", "LSTM", "Time Series"],
  },
];

export const skills: Skill[] = [
  { label: "TypeScript", category: "language" },
  { label: "Python", category: "language" },
  { label: "Next.js", category: "framework" },
  { label: "Node.js", category: "framework" },
  { label: "FastAPI", category: "framework" },
  { label: "PostgreSQL", category: "tool" },
  { label: "MongoDB", category: "tool" },
  { label: "Redis", category: "tool" },
  { label: "Docker", category: "tool" },
  { label: "AWS", category: "tool" },
  { label: "LangChain", category: "framework" },
  { label: "Firebase", category: "tool" },
];

export const experience: Experience[] = [
  {
    id: "findme",
    role: "Full Stack Developer",
    company: "FyndMe",
    start: "Jul 2025",
    end: "Sep 2025",
    year: "2025",
    bullets: [
      "Built and maintained backend services for FyndMe, a production-grade microservices-based SaaS portfolio platform supporting 9 portfolio types and tiered templates, using Node.js, Express.js, MongoDB Atlas, Mongoose, Supabase Auth, PostgreSQL, and Azure Blob Storage.",
      "Designed and supported REST APIs for user registration, portfolio CRUD, visibility controls, public portfolio delivery, and media upload/delete workflows — with request validation, scalable data-access patterns, proper HTTP semantics, and Swagger/OpenAPI documentation.",
      "Strengthened authentication and platform security by implementing Supabase JWT verification with issuer/audience/expiry validation, cookie-based auth, Next.js middleware, and API proxy routes, improving session security and reducing direct backend exposure.",
      "Worked with Mongoose discriminators, soft-delete patterns, and a repository-based architecture to support polymorphic portfolio schemas, safer data lifecycle management, and cleaner separation between route handlers and database logic.",
      "Built secure file and media workflows using Azure Blob Storage and time-limited SAS tokens, enabling controlled access to uploaded images, videos, and documents while preventing public hotlinking of private user assets.",
      "Integrated and supported a containerized Python FastAPI background-removal service using U²Net, MediaPipe, OpenCV, Pillow, and PyTorch, enabling automated transparent profile-image generation as part of the portfolio publishing workflow.",
    ],
  },
  {
    id: "nxon",
    role: "Software Developer",
    company: "NXON AI Pvt Ltd",
    start: "Jan 2024",
    end: "Jun 2024",
    year: "2024",
    bullets: [
      "Engineered a smart home automation system combining IoT, embedded systems, and cloud computing to control and monitor home appliances in real time.",
      "Built the frontend using Qt Quick (QML) and Qt Creator IDE, creating a highly intuitive, responsive, and cross-platform user interface for smart device management.",
      "Wrote robust backend logic in C++, enabling data handling, event-driven operations, and real-time device interactions through MQTT and UART protocols.",
      "Integrated ESP32 microcontrollers with AWS IoT Core, implementing secure device registration, message brokering, and cloud-to-device communication.",
      "Implemented energy monitoring using current sensors and temperature feedback via DS18B20, optimizing resource use with smart automation triggers.",
      "Employed Agile development practices with iterative testing (unit, integration, performance, and usability), maintaining clean code architecture and modular design.",
    ],
  },
];

export const education: Education[] = [
  {
    id: "ms-cs",
    degree: "M.S. Computer Science",
    institution: "Illinois Institute of Technology",
    start: "Aug 2024",
    end: "May 2026",
    year: "2026",
    details: [
      "GPA: 3.6 / 4.0",
      "Coursework: Medical Informatics & AI, Design & Analysis of Algorithms, Big Data Technologies, Advanced Database Organization",
    ],
  },
  {
    id: "btech-it",
    degree: "B.Tech Information Technology",
    institution: "Charusat University",
    start: "Aug 2020",
    end: "May 2024",
    year: "2024",
    details: [
      "GPA: 3.7 / 4.0",
      "Coursework: Data Structures & Algorithms, Operating Systems, Full Stack Development, Statistical & Numerical Techniques",
    ],
  },
];

export const hobbies: Hobby[] = [
  { id: "workout", label: "Workout", icon: "Dumbbell" },
  { id: "reading", label: "Reading", icon: "BookOpen" },
  { id: "cooking", label: "Cooking", icon: "ChefHat" },
  { id: "cycling", label: "Cycling", icon: "Bike" },
  { id: "hiking", label: "Hiking", icon: "Mountain" },
];

export const tagFilters = ["All", "React", "Python", "AWS", "ML", "TypeScript", "Node.js", "Java", "IoT"];
