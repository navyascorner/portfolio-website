export const experience = [
  {
    company: "Ritchie Bros. / VeriTread",
    date: "Jul 2024 – Present",
    location: "Boston, MA · Remote",
    note: "Ritchie Bros. acquired VeriTread in March 2026.",
    positions: [
      {
        role: "Machine Learning Engineer",
        date: "Oct 2025 – Present",
        bullets: [
         "Led development of an AI bidding agent supporting concurrent users and session memory with AWS Bedrock AgentCore, Strands SDK, Claude Sonnet, and MCP tools used by admins, reducing manual bid processing time by 85%",
          "Owned end-to-end machine learning pipelines with PyTorch and scikit-learn (regressors) to generate price estimations for transporting heavy hauls, increasing quarterly revenue by 20%",
          "Engineered 100+ time-series features and cached recent quotes for a LightGBM confidence model to score price prediction accuracy, enabling stakeholders to set risk thresholds and guardrails on automated quotes",
          "Added an LLM-based plausibility guardrail (Claude) to route flagged prices with the reasoning so that humans can accept or override before a price ships",
          "Developed a LinUCB-based contextual bandit system in reinforcement learning, improving automated price accuracy by 35% while ensuring compliance with business-fairness policies",
          "Ran an online A/B test to measure the incremental impact of a new pricing model, establishing a statistically significant 37% lift in acceptance with no revenue degradation, where the incrementality read-out drove the go/no-go launch decision",
          "Built an evaluation harness for the agent using 50 time-split bidding scenarios to regression-test 15+ prompt versions for tool selection, failure handling, and multi-turn behavior",
          "Built a recommendation engine that suggested top 10 carriers for a load based on prior activity, achieving 0.87 Recall@10 and a 64% lift over a popularity baseline using matrix-factorization embeddings and weighted ranking",
        ],
      },
      {
        role: "Software Engineer, Machine Learning",
        date: "Jul 2024 – Sep 2025",
        bullets: [
          "Developed company-specific predictive models for client freight movement using gradient boosting methods in scikit-learn.",
          "Built and tested .NET 6 and C# REST APIs for internal pricing services, enabling reliable SQL-based data access.",
          "Used CircleCI to deploy code across dev, QA, and production environments.",
          "Worked across backend, data, and ML workflows to support production pricing systems.",
          "Conducted MLOps in a prod environment by automating the pricing model retraining with AWS EventBridge and Lambda, maintained observability across CloudWatch and Datadog through metrics, logs, and alerts, used MLflow for experiment tracking across 20+ model versions, and streamlined the deployment cycle by containerizing with Docker",
        ],
      },
    ],
  },
  {
    company: "Realix AI",
    date: "Nov 2024 – Jan 2025",
    location: "Boston, MA · Remote",
    positions: [
      {
        role: "Data Scientist",
        bullets: [
          "Designed a GPT-4 Turbo RAG pipeline with LlamaIndex and MySQL to convert natural language into executable SQL, streamlining query creation and accelerating analysis turnaround.",
          "Conducted structured QA with varied question phrasings, achieving consistent SQL accuracy across diverse query formats.",
          "Automated preprocessing of 500+ transcript files with Python text-cleaning scripts, cutting manual formatting time by 80% and enabling faster ingestion into NLP pipelines.",
        ],
      },
    ],
  },
  {
    company: "Boston University",
    date: "Jan 2023 – Jan 2024",
    location: "Boston, MA · On-site",
    positions: [
      {
        role: "Graduate Teaching Assistant",
        bullets: [
          "Led discussion sessions and created weekly homework assignments for Foundations of Data Science III.",
          "Explained probability, statistics, Bayesian methods, optimization, and sampling concepts.",
          "Supported Python implementations using pandas, NumPy, SciPy, and scikit-learn.",
        ],
      },
    ],
  },
  {
    company: "Go Girl Organisation",
    date: "Jun 2021 – Jan 2022",
    location: "Delhi, India",
    positions: [
      {
        role: "Data Science Intern",
        bullets: [
          "Hosted data science workshops for a community of 35 aspiring women in tech.",
          "Taught the data science lifecycle, including data collection, wrangling, exploratory data analysis, machine learning prediction, and visualization.",
          "Helped develop a long-term cloud data engineering curriculum covering platforms such as AWS and Azure.",
        ],
      },
    ],
  },
  {
  company: "DoorsTour",
  date: "Mar 2021 – Aug 2021",
  location: "Delhi, India",
  positions: [
    {
      role: "Data Science Intern",
      bullets: [
        "Enhanced website engagement by 23% by using Python for A/B testing and SciPy for statistical analysis.",
        "Collaborated with AWS professionals to streamline migration of MySQL databases for 1,500 users to Amazon S3 using AWS Glue and Athena.",
        "Used Python visualization libraries including Matplotlib and Seaborn to analyze user behavior and inform targeted content strategies.",
      ],
    },
  ],
},
  {
    company: "Nawaazish Crew",
    date: "Feb 2020 – Jan 2021",
    location: "Delhi, India",
    positions: [
      {
        role: "Co-founder",
        bullets: [
          "Co-founded an organization focused on empowerment for women and children in marginalized communities in India.",
          "Led COVID relief initiatives by collaborating with organizations to improve access to affordable healthcare and necessities.",
          "Used data-driven approaches, including clustering-based workflows, to support organizational onboarding and operations.",
        ],
      },
    ],
  },
];