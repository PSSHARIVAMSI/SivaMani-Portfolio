export const PERSON = {
  name: 'Siva Mani Pullipudi',
  title: 'Data Engineer',
  subtitle: '5 years building data platforms on Snowflake & AWS',
  summary: 'Data Engineer with 5 years of experience designing, building, and operating scalable data platforms and pipelines on Snowflake and AWS. Proven record engineering ETL/ELT workflows that move millions of records daily with 99.5%+ reliability.',
  email: 'spullipu@gmail.com',
  github: 'https://github.com/PSSHARIVAMSI',
  linkedin: 'https://linkedin.com/in/sivapullipudi',
  location: 'Fairfax, VA',
  introScript: "Hi! I'm Siva Mani Pullipudi — a Data Engineer with 5 years of experience building scalable data platforms on Snowflake and AWS. I engineer pipelines that move millions of records daily with 99.5% reliability. Welcome to my portfolio!",
}

export const METRICS = [
  { value: '5', suffix: 'yrs', label: 'Experience' },
  { value: '2M+', suffix: '', label: 'Records/day' },
  { value: '99.5%', suffix: '', label: 'Reliability' },
  { value: '50+', suffix: '', label: 'Pipelines Built' },
  { value: '60%', suffix: '', label: 'Cost Reduction' },
]

export const SKILLS_BY_CATEGORY = [
  {
    category: 'Data Engineering',
    color: '#00D9A0',
    items: ['Snowflake', 'dbt', 'Apache Kafka', 'Matillion', 'Fivetran', 'MuleSoft', 'Apache Airflow', 'Snowpark', 'Databricks', 'ETL/ELT'],
  },
  {
    category: 'Cloud & DevOps',
    color: '#FF9900',
    items: ['AWS S3', 'AWS EC2', 'AWS RDS', 'AWS Glue', 'Docker', 'CI/CD', 'Git', 'Azure DevOps'],
  },
  {
    category: 'Data Modeling',
    color: '#A78BFA',
    items: ['Dimensional Modeling', 'RBAC', 'Stored Procedures', 'Task Orchestration', 'Data Quality', 'Data Governance'],
  },
  {
    category: 'Analytics & BI',
    color: '#60A5FA',
    items: ['Tableau', 'Power BI', 'Looker', 'Streamlit'],
  },
  {
    category: 'Programming',
    color: '#F472B6',
    items: ['Python', 'SQL', 'R', 'C', 'pandas', 'PySpark'],
  },
]

export const EXPERIENCE = [
  {
    company: 'George Mason University',
    role: 'Graduate Teaching Assistant',
    period: 'Jan 2026 – May 2026',
    location: 'Fairfax, VA',
    highlights: [
      'Built Python-based data workflows and analytical datasets supporting coursework and research using SQL, pandas, and cloud tooling',
      'Designed reproducible data pipelines to process structured datasets, reinforcing ETL, data modeling, and data-quality best practices',
      'Guided 80+ students per semester through programming, data manipulation, and analytical problem solving',
    ],
    tech: ['Python', 'SQL', 'pandas', 'AWS'],
  },
  {
    company: 'George Mason University',
    role: 'Data Analytics Intern',
    period: 'Jan 2025 – Dec 2025',
    location: 'Fairfax, VA',
    highlights: [
      'Performed data cleaning, exploratory analysis, and visualization on structured datasets using Python (pandas), SQL, and BI tools',
      'Built analytical reports and dashboards to communicate findings to technical and non-technical audiences',
      'Engineered reproducible Python data pipelines to ingest and transform academic and research datasets',
    ],
    tech: ['Python', 'SQL', 'Tableau', 'Power BI'],
  },
  {
    company: 'Kipi.ai (acquired by Capgemini)',
    role: 'Lead Engineer → Senior SWE → SWE',
    period: 'Oct 2021 – Dec 2024',
    location: 'Remote',
    highlights: [
      'Progressed from Software Engineer to Lead Engineer over 3+ years, owning end-to-end Snowflake data platforms for clients across manufacturing, healthcare, banking, insurance, and logistics',
      'Led a team of 4 engineers and mentored 6 junior engineers on Snowflake optimization, Matillion orchestration, and CI/CD, raising deployment reliability to 99.9%',
      'Engineered 50+ MuleSoft and Matillion ETL/ELT pipelines with automated error handling achieving 99.5% data reliability while processing 2M+ records daily',
      'Drove up to 60% faster query execution, 40% pipeline performance gains, and 18% reduction in compute cost',
      'Established DevOps standards using Git and automated deployment pipelines, reducing production incidents by 60%',
    ],
    tech: ['Snowflake', 'Matillion', 'MuleSoft', 'AWS', 'Python', 'SQL', 'Fivetran', 'CI/CD'],
  },
]

export const PROJECTS = [
  {
    title: 'Enterprise Data Warehouse',
    company: 'Oscar W. Larson Co.',
    description: 'Multi-source integration platform consolidating financial, sales, and inventory data from 7 enterprise systems into a unified Snowflake warehouse serving 100+ business users. Cut report generation from 4 hours to 15 minutes.',
    impact: '4h → 15min reports',
    tech: ['Snowflake', 'MuleSoft', 'AWS'],
    emoji: '🏭',
    highlight: '2M+ records/day · 99.5% reliability',
  },
  {
    title: 'KPI & Use-Case Platform',
    company: 'LEAF Accelerator',
    description: 'Led 4-engineer team to design and deploy a Snowflake-backed Streamlit native app surfacing 25,000+ KPIs and 10,000+ analytics use cases across 5 industry domains. Eliminated 400+ analyst hours per quarter.',
    impact: '400+ hours saved/quarter',
    tech: ['Snowflake', 'Streamlit', 'AWS'],
    emoji: '📊',
    highlight: '25K+ KPIs · 99.9% deployment reliability',
  },
  {
    title: 'Real-Time Stock Market Analytics',
    company: 'Personal Project',
    description: 'Streamed live market data via Apache Kafka into Snowflake with sub-second latency, processing 500,000+ daily transactions. Built interactive Tableau dashboards for technical and fundamental analysis.',
    impact: '500K+ transactions/day',
    tech: ['Snowflake', 'Kafka', 'Matillion', 'Tableau', 'AWS'],
    emoji: '📈',
    highlight: 'Sub-second latency · 500K txns/day',
  },
  {
    title: 'Query Analyzer — Snowflake Marketplace',
    company: 'Kipi.ai',
    description: 'Designed and developed a Snowflake Native App, now live on the Snowflake Marketplace, that analyzes long-running queries and generates automated performance-tuning recommendations. Improved query performance by up to 60%.',
    impact: '60% query performance improvement',
    tech: ['Snowflake', 'Streamlit'],
    emoji: '🔍',
    highlight: 'Live on Snowflake Marketplace',
  },
  {
    title: 'Document Intelligence Pipeline (RAG/LLM)',
    company: 'R&D',
    description: 'Built a retrieval-augmented QA pipeline over corporate 10-K and 10-Q filings, scraping and processing 50+ financial reports. Prototyped automated financial-insight workflows using LLMs and Snowflake.',
    impact: '50+ financial reports processed',
    tech: ['Python', 'AWS', 'Snowflake'],
    emoji: '🤖',
    highlight: 'RAG · LLM · Financial Intelligence',
  },
  {
    title: 'Exasol → Snowflake Migration',
    company: 'Blue Yonder',
    description: 'Migrated 300+ complex Exasol SQL templates to Snowflake, building Python regression-test pipelines to guarantee syntactic compatibility, query performance, and data accuracy. Reduced compute costs by 18%.',
    impact: '18% compute cost reduction',
    tech: ['Snowflake', 'Python', 'Docker'],
    emoji: '🚀',
    highlight: '300+ templates · 98% on-time delivery',
  },
]

export const CERTIFICATIONS = [
  {
    name: 'SnowPro Advanced: Data Engineer',
    issuer: 'Snowflake',
    color: '#29B5E8',
    logo: 'snowflake',
  },
  {
    name: 'SnowPro Advanced: Architect',
    issuer: 'Snowflake',
    color: '#29B5E8',
    logo: 'snowflake',
  },
  {
    name: 'SnowPro Core',
    issuer: 'Snowflake',
    color: '#29B5E8',
    logo: 'snowflake',
  },
  {
    name: 'Fivetran Certified',
    issuer: 'Fivetran',
    color: '#0073E6',
    logo: 'fivetran',
  },
  {
    name: 'Coalesce Fundamentals',
    issuer: 'Coalesce',
    color: '#6366F1',
    logo: 'coalesce',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    color: '#FF9900',
    logo: 'aws',
  },
  {
    name: 'MTA: Python',
    issuer: 'Microsoft',
    color: '#00BCF2',
    logo: 'microsoft',
  },
  {
    name: 'CCNA',
    issuer: 'Cisco',
    color: '#1BA0D7',
    logo: 'cisco',
  },
  {
    name: 'Juniper Networking',
    issuer: 'Juniper Networks',
    color: '#84BD00',
    logo: 'juniper',
  },
]

export const EDUCATION = [
  {
    degree: 'MS in Data Analytics Engineering',
    school: 'George Mason University',
    period: 'Jan 2025 – May 2026',
    location: 'Fairfax, VA',
  },
  {
    degree: 'BTech in Electronics & Communication Engineering',
    school: 'Aditya College of Engineering (JNTUK)',
    period: '2018 – 2022',
    location: 'Andhra Pradesh, India',
  },
]
