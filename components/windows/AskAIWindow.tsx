"use client";

import React, { useState, useRef, useEffect } from "react";
import { queryPortfolioKnowledge } from "@/data/knowledge-base";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import {
  SparkleRegular,
  SendRegular,
  FolderFilled,
  MailRegular,
} from "@/components/icons/FluentIcons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Mail, CheckCircle2 } from "lucide-react";

interface AskAIMessage {
  id: string;
  sender: "user" | "assistant";
  type?: "text" | "contact" | "projects-list" | "project-card";
  text: string;
  timestamp: string;
  projectData?: {
    title: string;
    description: string;
    technologies: string[];
    verification?: string;
  };
}

interface AskAIWindowProps {
  onOpenApp?: (appId: string) => void;
}

export function AskAIWindow({ onOpenApp }: AskAIWindowProps) {
  const [messages, setMessages] = useState<AskAIMessage[]>([
    {
      id: "initial-1",
      sender: "assistant",
      type: "text",
      text: "Ask me about Prasannaraj's projects, technical skills, experience, or contact information.",
      timestamp: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions = [
    "What AI projects has Prasannaraj built?",
    "Tell me about TRUST-CV.",
    "What technologies does he work with?",
    "Show me his Generative AI projects.",
    "How can I contact Prasannaraj?",
    "What is his experience?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const cleanText = (str: string) => {
    return str
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/~~(.*?)~~/g, "$1")
      .replace(/_([^_]+)_/g, "$1")
      .replace(/#{1,6}\s?/g, "")
      .replace(/`{1,3}/g, "")
      .replace(/^>\s?/gm, "")
      .replace(/^---$/gm, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .trim();
  };

  const handleSendMessage = (textToSend: string) => {
    const query = textToSend.trim();
    if (!query) return;

    const userMsg: AskAIMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      type: "text",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();

      // Check if contact question
      if (
        lower.includes("contact") ||
        lower.includes("email") ||
        lower.includes("reach") ||
        lower.includes("hire") ||
        lower.includes("linkedin")
      ) {
        const contactMsg: AskAIMessage = {
          id: `assistant-${Date.now()}`,
          sender: "assistant",
          type: "contact",
          text: "Here is how you can directly connect with Prasannaraj:",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, contactMsg]);
        setIsTyping(false);
        return;
      }

      // Check if specific project question
      const matchedProject = projectsData.find(
        (p) =>
          lower.includes(p.id.toLowerCase()) ||
          lower.includes(p.title.toLowerCase().split("/")[0].trim().toLowerCase())
      );

      if (matchedProject) {
        const projMsg: AskAIMessage = {
          id: `assistant-${Date.now()}`,
          sender: "assistant",
          type: "project-card",
          text: "",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          projectData: {
            title: matchedProject.title,
            description: matchedProject.overview,
            technologies: matchedProject.technologies,
            verification: matchedProject.badge,
          },
        };
        setMessages((prev) => [...prev, projMsg]);
        setIsTyping(false);
        return;
      }

      // Check if broad projects question
      if (
        (lower.includes("project") && !lower.includes("generative")) ||
        lower.includes("what has he built") ||
        lower.includes("portfolio")
      ) {
        const projListMsg: AskAIMessage = {
          id: `assistant-${Date.now()}`,
          sender: "assistant",
          type: "projects-list",
          text: "8 verified engineering projects across Computer Vision, Multi-Agent Systems, and Machine Learning:",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, projListMsg]);
        setIsTyping(false);
        return;
      }

      // Fallback query to knowledge base
      const response = queryPortfolioKnowledge(query);
      const sanitizedAnswer = cleanText(response.answer);

      const botMsg: AskAIMessage = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        type: "text",
        text: sanitizedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <div className="flex flex-col h-full bg-[#181818] select-none text-xs text-[#E1E1E1]">
      {/* Subheader Bar */}
      <div className="h-9 px-4 bg-[#1f1f1f] border-b border-[#2d2d2d] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <SparkleRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
          <span className="text-[11px] font-medium text-[#FFFFFF]">
            Explore Prasannaraj's portfolio
          </span>
        </div>
        <span className="text-[10px] text-[#A8AFBA]">Interactive Portfolio Assistant</span>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs select-text bg-[#181818]">
        {/* Welcome Banner */}
        <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2.5">
          <h2 className="text-sm font-semibold text-white">
            Ask me about Prasannaraj
          </h2>
          <p className="text-[11px] text-[#A8AFBA] leading-relaxed">
            I can answer questions regarding his AI engineering projects, technical stack, research background, and contact details.
          </p>

          {/* Quick Suggestion Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {suggestedQuestions.map((sug, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(sug)}
                className="text-[11px] px-2.5 py-1 rounded-[4px] bg-[#1a1a1a] hover:bg-[#252525] text-[#4CC2FF] hover:text-[#70c9ff] border border-[#303030] transition-colors text-left cursor-pointer"
              >
                {sug}
              </button>
            ))}
          </div>
        </div>

        {/* Message History */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.sender === "user" ? "items-end" : "items-start"
            }`}
          >
            {/* User message */}
            {msg.sender === "user" ? (
              <div className="p-3 rounded-[6px] max-w-[85%] bg-[#0078D4] text-[#FFFFFF] font-normal leading-relaxed">
                {msg.text}
              </div>
            ) : msg.type === "contact" ? (
              /* Contact Card (Section 11) */
              <div className="p-4 rounded-[6px] max-w-[95%] bg-[#202020] border border-[#2d2d2d] space-y-3.5 text-[#E1E1E1]">
                <div className="border-b border-[#2d2d2d] pb-2">
                  <h3 className="text-xs font-bold text-white tracking-wider uppercase">
                    Contact Prasannaraj
                  </h3>
                  <p className="text-[11px] text-[#A8AFBA] mt-0.5">
                    Available for AI Engineering roles and technical opportunities.
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] text-[#A8AFBA] uppercase tracking-wide block">
                      Email
                    </span>
                    <a
                      href={`mailto:${profileData.links.email}`}
                      className="text-white hover:text-[#4CC2FF] font-medium"
                    >
                      {profileData.links.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A8AFBA] uppercase tracking-wide block">
                      LinkedIn
                    </span>
                    <a
                      href={profileData.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#4CC2FF] font-medium"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A8AFBA] uppercase tracking-wide block">
                      GitHub
                    </span>
                    <a
                      href={profileData.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#4CC2FF] font-medium"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>

                {/* Quick Action Buttons with Real Brand Icons */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href={`mailto:${profileData.links.email}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#0078D4] hover:bg-[#106EBE] text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    <Mail size={14} />
                    <span>Email Me</span>
                  </a>
                  <a
                    href={profileData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    <FaLinkedinIn size={13} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profileData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#24292e] hover:bg-[#333940] text-white border border-white/10 text-xs font-medium transition-colors cursor-pointer"
                  >
                    <FaGithub size={13} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ) : msg.type === "project-card" && msg.projectData ? (
              /* Structured Project Card (Section 10) */
              <div className="p-4 rounded-[6px] max-w-[95%] bg-[#202020] border border-[#2d2d2d] space-y-2.5 text-[#E1E1E1]">
                <div className="border-b border-[#2d2d2d] pb-2">
                  <h3 className="text-xs font-bold text-white tracking-wide">
                    {msg.projectData.title}
                  </h3>
                  <p className="text-[11px] text-[#A8AFBA] mt-1 leading-relaxed">
                    {msg.projectData.description}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] text-[#A8AFBA] uppercase tracking-wider block mb-1">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {msg.projectData.technologies.slice(0, 6).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-[3px] bg-[#1a1a1a] text-[#4CC2FF] border border-[#2d2d2d]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {msg.projectData.verification && (
                  <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#10B981]">
                    <CheckCircle2 size={13} />
                    <span>{msg.projectData.verification}</span>
                  </div>
                )}
              </div>
            ) : msg.type === "projects-list" ? (
              /* Structured Projects List (Section 3 & 10) */
              <div className="p-4 rounded-[6px] max-w-[95%] bg-[#202020] border border-[#2d2d2d] space-y-3 text-[#E1E1E1]">
                <p className="text-xs text-white font-medium">
                  {msg.text}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {projectsData.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => onOpenApp && onOpenApp(`project-${p.id}`)}
                      className="p-2.5 rounded-[4px] bg-[#1a1a1a] hover:bg-[#252525] border border-[#282828] cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <FolderFilled className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                        <span className="text-[11px] font-semibold text-white group-hover:text-[#4CC2FF] truncate">
                          {p.title}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#A8AFBA] mt-1 line-clamp-2 leading-snug">
                        {p.overview}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Regular Text Message - Sanitize Markdown */
              <div className="p-3 rounded-[6px] max-w-[85%] bg-[#202020] text-[#D4D4D8] border border-[#2d2d2d] leading-relaxed whitespace-pre-wrap">
                {cleanText(msg.text)}
              </div>
            )}

            <span className="text-[10px] text-[#71717A] mt-1 px-1 font-mono">
              {msg.timestamp}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1.5 p-2 rounded-[4px] bg-[#202020] border border-[#2d2d2d] w-16">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CC2FF] animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CC2FF] animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CC2FF] animate-bounce [animation-delay:0.4s]" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-[#1f1f1f] border-t border-[#2d2d2d]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputVal);
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask a question..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 h-8 px-3 rounded-[4px] bg-[#141414] border border-[#333333] text-xs text-[#FFFFFF] placeholder-[#A8AFBA]/60 focus:outline-none focus:border-[#0078D4]"
          />
          <button
            type="submit"
            disabled={!inputVal.trim() || isTyping}
            className="w-8 h-8 rounded-[4px] bg-[#0078D4] text-white flex items-center justify-center hover:bg-[#106EBE] disabled:opacity-40 transition-colors cursor-pointer shrink-0"
            title="Send question"
          >
            <SendRegular className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
