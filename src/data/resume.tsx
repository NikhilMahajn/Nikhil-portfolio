import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const DATA = {
  name: "Nikhil Mahajan",
  initials: "Pro",
  url: "https://www.prathamesh-kothalkar.vercel.app",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Software Developer | Full Stack Python Engineer | Student ",
  summary:"I’m Nikhil Mahajan, a Python Full Stack Developer with hands-on experience in building scalable backend systems and dynamic web applications. I specialize in Django, Flask, FastAPI, and Serverless architectures, and have deployed robust APIs integrated with AWS Lambda, PostgreSQL, and asynchronous task queues like SQS.Currently interning at Banao Technologies, I’ve contributed to live projects with a focus on clean architecture, performance, and team collaboration. My project portfolio includes AI-driven platforms like a multi-agent resume screener and a stock price forecasting app using machine learning and interactive visualizations with Plotly.Beyond development, I actively write technical blogs, participate in hackathons, and continuously enhance my problem-solving skills through competitive programming. I’m passionate about delivering real-world software solutions that are efficient, intelligent, and user-friendly.",
  avatarUrl: "https://i.ibb.co/kg5nDrLR/linkdin-Profile.png",
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "C++",
    "React.js",
    "Django",
    "Flask",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
    "Material UI",
    "Git",
    "Docker",
    "Redis",
    "Servless Framework",
    "GenAI",
    "Agentic AI"
  ],
  codingProfiles:[
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/nikhil0069/",
      icon: Icons.globe,
      badges: [
        {
          title: "100+ problems solved",
          variant: "secondary",
        },
      ],
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/mahajannikhil002",
      icon: Icons.globe,
      badges: [
        {
          title: "100+ problems solved",
          variant: "secondary",
        },
      ],
    },
    {
      name: "GitHub",
      url: "https://github.com/NikhilMahajn",
      icon: Icons.globe,
      badges: [
        {
          title: "Projects and Contributions",
          variant: "secondary",
        },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nikhilmahajn@gmail.com",
    tel: "+91 8799948641",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/NikhilMahajn",
        icon: Icons.github,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "./Nikhil_Mahajan_backend_resume.pdf",
        icon: Icons.googleDrive,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhiljmahajan/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nikhilmahajan0016@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Medium:{
        name: "Medium",
        url: "https://medium.com/@mahajannikhil0016",
        icon: Icons.medium,
        navbar: true,
      }
    },
  },
  work: [
    {
      company: "Banao Techologies",
      href: "https://banao.tech/",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/banao_logo.jpeg",
      start: "Apr 2025",
      end: "Present",
      description:
        "At Banao Technologies, I worked as a Software Developer Intern where I designed and deployed scalable backend APIs using the Serverless Framework and AWS Lambda. I contributed to two live production projects, integrating AWS SQS for asynchronous task handling and boosting workflow efficiency by 40%. I leveraged SQLAlchemy to build efficient data models and managed complex queries on PostgreSQL. My role also involved collaborating closely with frontend and design teams to deliver high-performance, maintainable backend solutions aligned with product goals.",
    },
    {
      company: "Heuristic Technopark",
      href: "https://gdg.community.dev/gdg-on-campus-zcoer/",
      badges: [],
      location: "Nashik, Maharashtra",
      title: "Python/Django Intern",
      logoUrl: "/heuristic.jpeg",
      start: "Jan 2024",
      end: "Mar 2024",
      description:
        "During my internship at Heuristic Technopark, I developed RESTful APIs using Django REST Framework, improving API performance and reducing server response time by 40%. I optimized database interactions, resulting in a 15% reduction in server costs. My work emphasized secure, scalable backend development and involved debugging issues, enhancing features, and supporting production deployments. The experience helped solidify my foundation in Django, REST principles, and cross-functional collaboration.",
    },    
  ],
  education: [
    {
      school: "Savitribai Phule Pune University",
      href: "https://unipune.ac.in",
      degree: "B.E in Information Technology",
      logoUrl: "./sppu.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "MSBTE - Government Polytechnic Jalgaon",
      href: "https://gpjalgaon.ac.in/AboutInstitute.html",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/diploma.jpg",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
     {
      title: "AI Recruiter",
      href: "https://ai-recruiter-2q18.onrender.com/",
      dates: "Mar 2025",
      active: true,
     description:
  "AI Recruiter is a modular recruitment automation platform built with Flask, LangChain, LangGraph, FAISS, and HuggingFace Transformers. It automates resume parsing, job matching, and candidate scoring using multi-agent workflows and vector similarity search. The system includes resume parsing, job description summarization, and a scoring pipeline stored in SQLite. It reduced manual screening time by 75%, improved candidate-job matching accuracy by 80%, and enhanced hiring efficiency by 65% for small to mid-sized teams.",
      technologies: [
        "Python",
        "Flask (Python)",
        "LangGraph",
        "LangChain",
        "Sqlite",
        "Groq API"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/NikhilMahajn/AI-Recruiter.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://www.guessmycollege.in/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/ai_recruiter.png",
    },
     {
      title: "Stock Predictor WebApp",
      href: "https://stock-price-forcasting.onrender.com/",
      dates: "Oct 2024",
      active: false,
      description:
        "Stock Price Forecasting WebApp is a Django-based application that enables users to analyze and forecast stock prices for any ticker using machine learning models. The app achieved a prediction accuracy of 87% and uses Plotly to generate interactive visualizations of stock market trends, enhancing data clarity and user engagement. Optimized data pipelines reduced prediction time by 60%, and trend analysis efficiency improved by 70%, enabling faster, data-driven investment decisions."
,
      technologies: [
      "Python",
      "Django",
      "Machine Learning (scikit-learn)",
      "Pandas",
      "NumPy",
      "Plotly",
      "yfinance",
      "HTML/CSS",
      "JavaScript",
      "Bootstrap"
    ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/NikhilMahajn/Stock-Price-Forcasting",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/stock.png",
    },
    {
      title: "MultiPDF AI ChatBot",
      href: "https://huggingface.co/spaces/NikhilMahajan/Multi-PDF-AI-Agent",
      dates: "Apr 2025 - May 2025",
      active: true,
      description:
        "Multi-PDF AI Chatbot Agent is an AI-powered application that enables users to upload multiple PDF documents and interact with them through natural language queries. Built using LangChain, LangGraph, FAISS, and Streamlit, the chatbot supports multi-agent coordination for context-aware question answering, document summarization, and intelligent information retrieval. Integrated vector embeddings allow for semantic understanding across documents, enhancing research, legal, and enterprise workflows.",
      technologies: [
        "Streamlit",
        "Groq API",
        "FAISS",
        "HuggingFace",
        "LangChain",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/NikhilMahajn/Mulit-PDF-AI-Chatbot-Agent",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://huggingface.co/spaces/NikhilMahajan/Multi-PDF-AI-Agent",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/chatbot.png",
    },
    ],
  hackathons: [
    {
      title: "Intra-College Hackathon 2024",
      dates: "March 2024",
      location: "Pune, Maharashtra",
      description:
        "Built a utility app with my teammate as part of a 2-member team. I handled the complete backend and system design, including notifications and database integration.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
