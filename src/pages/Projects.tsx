import React from 'react';
import Header from '@/components/desktop/Header';
import { ExternalLink, Code, Shield, Zap } from 'lucide-react';
import BackButton from '@/components/ui/BackButton';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI Driven End-to-End Recruitment Automation Pipeline',
      description: 'Engineered an end-to-end Agentic Workflow in n8n to automate the full cycle recruitment funnel, reducing manual processing time by ~85%. Integrated OpenAI Agents for structured data extraction and AI-personalized screening questions. Multichannel sync between Google Sheets, Drive, and Gmail.',
      tech: 'n8n, OpenAI APIs, OpenRouter, Langchain, Google APIs',
      link: null,
      icon: Zap
    },
    {
      title: 'STEGO-CHATS: Stealth Secure Messaging',
      description: 'Web-based chat app integrating AES-256-GCM encryption with LSB steganography to conceal messages within media files. Browser-native steganography via HTML5 Canvas API. Real-time sync with Socket.IO.',
      tech: 'React 18, Node.js, Express, Socket.IO, PostgreSQL, Web Crypto API',
      link: 'https://stego-chat-application.vercel.app',
      icon: Shield
    },
    {
      title: 'X Clone Backend',
      description: 'Secure backend mirroring Twitter core features. User registration/login with bcrypt and JWT. Protected APIs for tweets, likes, replies, followers (11+ endpoints). Middleware and relational queries for data access control.',
      tech: 'Node.js, Express.js, JWT, REST APIs, SQLite',
      link: 'https://tinyurl.com/3kh6cmup',
      icon: Code
    },
    {
      title: 'Industry Production Full-Stack Projects',
      description: 'Delivered robust, scalable web applications for diverse startups. Moons, Yashray.in, Sangham Infotech, Beyond Books, Scomedia, Freshin10. MERN stack with PostgreSQL.',
      tech: 'HTML, CSS, JavaScript, React, Tailwind, PostgreSQL, REST API',
      link: null,
      icon: Code
    },
    {
      title: 'RAG Pipeline & Chatbot',
      description: 'Automated RAG pipeline using n8n, Google Drive, OpenAI embeddings, and Pinecone for context-aware information retrieval. Dynamic FAQ and chatbot interactions.',
      tech: 'n8n, OpenAI, Pinecone, Langchain, OpenRouter',
      link: null,
      icon: Zap
    },
    {
      title: 'Sentinel Gate - Anti-SQL Injection',
      description: 'Security-focused project for SQL injection prevention.',
      tech: 'HTML, Security',
      link: 'https://github.com/PavanSuryaChintada/sentinel-gate-anti-sql-injection',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />
      
      <div className="px-6 pb-8 pt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-text-base text-4xl font-bold">Projects</h1>
            <BackButton />
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index}
                  className="bg-bg-card rounded-lg p-6 border border-bg-highlight hover:border-spotify-green/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-spotify-green/10 flex items-center justify-center group-hover:bg-spotify-green/20 transition-colors flex-shrink-0">
                      <Icon className="text-spotify-green" size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-text-base text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-text-subdued text-sm mb-3">{project.description}</p>
                      <p className="text-spotify-green/90 text-xs font-medium mb-2">{project.tech}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-spotify-green hover:underline text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
