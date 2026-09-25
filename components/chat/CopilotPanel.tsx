"use client";

import React, { useState, useRef, useEffect } from "react";
import { queryPortfolioKnowledge } from "@/data/knowledge-base";
import { ChatMessage } from "@/types";
import {
  SparkleRegular,
  SendRegular,
  DismissRegular,
  ArrowResetRegular,
  ShieldCheckmarkRegular,
  CheckmarkCircleRegular,
  TagRegular,
  ChevronRightRegular,
} from "@/components/icons/FluentIcons";

interface CopilotPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp?: (appId: string) => void;
}

export function CopilotPanel({ isOpen, onClose, onOpenApp }: CopilotPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      sender: "assistant",
      text: "Ask me about Prasannaraj's projects, technical skills, experience, or contact information.",
      timestamp: "Just now",
      suggestions: [
        "Tell me about Prasannaraj",
        "Show me his AI projects",
        "What is TRUST-CV?",
        "What technologies does he use?",
        "What is his experience?",
      ],
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    const query = textToSend.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const response = queryPortfolioKnowledge(query);

      const botMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sources: response.sources,
        suggestions: response.suggestions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `initial-${Date.now()}`,
        sender: "assistant",
        text: "Chat cleared. Ask me any verified question regarding Prasannaraj's background, architectures, or engineering milestones.",
        timestamp: "Just now",
        suggestions: [
          "Who is Prasannaraj?",
          "What is TRUST-CV?",
          "Tell me about CrawlNews",
          "What is his tech stack?",
        ],
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay for smaller screens */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
        onClick={onClose}
      />

      {/* Floating Copilot Side-Panel */}
      <div className="fixed top-3 right-3 bottom-14 w-[420px] max-w-[94vw] z-50 rounded-[8px] bg-[#242424]/95 border border-[#383838] shadow-[0_16px_48px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-150 select-none text-xs text-[#E1E1E1]">
        {/* Panel Header */}
        <div className="h-12 px-4 border-b border-[#2d2d2d] bg-[#1f1f1f] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-[4px] bg-[#0078D4]/20 flex items-center justify-center">
              <SparkleRegular className="w-4 h-4 text-[#4CC2FF]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-xs font-bold text-[#FFFFFF]">
                  Prasanna AI
                </h3>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              </div>
              <p className="text-[10px] text-[#A8AFBA] font-light">
                Strict Knowledge Base Guardrails
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleResetChat}
              aria-label="Reset conversation"
              title="Reset Chat"
              className="p-1 rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              <ArrowResetRegular className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close assistant"
              className="p-1 rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              <DismissRegular className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs select-text bg-[#181818]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              {/* Message Bubble */}
              <div
                className={`p-3 rounded-[6px] max-w-[88%] leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#0078D4] text-[#FFFFFF] font-medium"
                    : "bg-[#202020] text-[#D4D4D8] border border-[#2d2d2d]"
                }`}
              >
                <div className="whitespace-pre-wrap">
                  {msg.text.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1")}
                </div>
              </div>

              {/* Timestamp */}
              <span className="text-[10px] text-[#71717A] mt-1 px-1 font-mono">
                {msg.timestamp}
              </span>

              {/* Follow-up Suggestions */}
              {msg.suggestions && (
                <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                  {msg.suggestions.map((sug, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(sug)}
                      className="text-[10px] px-2.5 py-1 rounded-[4px] bg-[#202020] hover:bg-[#282828] text-[#4CC2FF] border border-[#2d2d2d] transition-colors text-left cursor-pointer"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#202020] border border-[#2d2d2d] w-20">
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
              placeholder="Ask about projects, stack, role..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 h-8 px-3 rounded-[4px] bg-[#141414] border border-[#333333] text-xs text-[#FFFFFF] placeholder-[#A8AFBA]/60 focus:outline-none focus:border-[#0078D4]"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isTyping}
              className="w-8 h-8 rounded-[4px] bg-[#0078D4] text-white flex items-center justify-center hover:bg-[#106EBE] disabled:opacity-40 transition-colors cursor-pointer shrink-0"
            >
              <SendRegular className="w-3.5 h-3.5" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[9px] text-[#71717A] font-mono mt-2 px-1">
            <span>Ground Truth Only • Zero Hallucinations</span>
            <span>ESC to close</span>
          </div>
        </div>
      </div>
    </>
  );
}
