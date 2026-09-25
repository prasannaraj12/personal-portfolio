"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export function ContactWindow() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError("Please fill out all required fields.");
      return;
    }
    if (!formState.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "74c0d192-8f42-4588-934a-750e42ad79ef",
          name: formState.name,
          email: formState.email,
          subject: formState.subject || `New Portfolio Inquiry from ${formState.name}`,
          message: formState.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Unable to send your message. Please try email instead.");
      }
    } catch {
      setError("Unable to send your message. Please try email instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#181818] select-text text-xs text-[#E1E1E1] overflow-y-auto p-6 md:p-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-[#2d2d2d] space-y-3">
          <div className="flex items-center gap-2">
            <Mail size={20} strokeWidth={1.75} className="w-5 h-5 text-[#4CC2FF]" />
            <h1 className="text-xl md:text-2xl font-bold text-[#FFFFFF]">
              Contact & Inquiries
            </h1>
          </div>
          <p className="text-xs text-[#A8AFBA]">
            Connect with Prasannaraj regarding AI engineering roles, research collaboration, or project opportunities.
          </p>

          {/* Recruiter-First Quick-Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <a
              href={`mailto:${profileData.links.email}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#0078D4] hover:bg-[#106EBE] text-white font-medium text-xs transition-colors shadow-sm cursor-pointer"
            >
              <Mail size={15} strokeWidth={2} />
              <span>Email Me</span>
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#0A66C2] hover:bg-[#084e96] text-white font-medium text-xs transition-colors shadow-sm cursor-pointer"
            >
              <FaLinkedinIn size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#24292e] hover:bg-[#333940] text-white border border-white/10 font-medium text-xs transition-colors shadow-sm cursor-pointer"
            >
              <FaGithub size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Contact Channels & Focus Areas */}
          <div className="space-y-4">
            {/* Focus Topics Box */}
            <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#4CC2FF]">
                Connect regarding:
              </h3>
              <ul className="text-xs text-[#D1D5DB] space-y-1.5 list-none pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CC2FF]" />
                  <span>AI Engineering roles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CC2FF]" />
                  <span>Machine Learning roles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CC2FF]" />
                  <span>Generative AI & LLM Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CC2FF]" />
                  <span>Agentic AI & Swarm Frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CC2FF]" />
                  <span>Research collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CC2FF]" />
                  <span>Project opportunities</span>
                </li>
              </ul>
            </div>

            {/* Direct Communication Channels */}
            <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2.5">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFBA]">
                Direct Communication
              </h3>

              <a
                href={`mailto:${profileData.links.email}`}
                aria-label="Send email to Prasannaraj"
                className="flex items-center gap-3 p-2.5 rounded-[4px] bg-[#1a1a1a] hover:bg-[#252525] border border-[#282828] transition-colors cursor-pointer group"
              >
                <div className="p-2 rounded-[4px] bg-[#0078D4]/20 text-[#4CC2FF] flex items-center justify-center shrink-0">
                  <Mail size={18} strokeWidth={1.75} />
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-[#A8AFBA]">Email</p>
                  <p className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#4CC2FF] truncate">
                    {profileData.links.email}
                  </p>
                </div>
              </a>

              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-3 p-2.5 rounded-[4px] bg-[#1a1a1a] hover:bg-[#252525] border border-[#282828] transition-colors cursor-pointer group"
              >
                <div className="p-2 rounded-[4px] bg-[#0078D4]/20 text-[#4CC2FF] flex items-center justify-center shrink-0">
                  <FaLinkedinIn size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-[#A8AFBA]">LinkedIn</p>
                  <p className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#4CC2FF]">
                    LinkedIn Profile
                  </p>
                </div>
              </a>

              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-3 p-2.5 rounded-[4px] bg-[#1a1a1a] hover:bg-[#252525] border border-[#282828] transition-colors cursor-pointer group"
              >
                <div className="p-2 rounded-[4px] bg-white/[0.08] text-[#FFFFFF] flex items-center justify-center shrink-0">
                  <FaGithub size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-[#A8AFBA]">GitHub</p>
                  <p className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#4CC2FF]">
                    GitHub Profile
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded-[4px] bg-[#1a1a1a] border border-[#282828]">
                <div className="p-2 rounded-[4px] bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0">
                  <MapPin size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[10px] text-[#A8AFBA]">Location</p>
                  <p className="text-xs font-semibold text-[#FFFFFF]">
                    {profileData.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="p-5 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-4">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} strokeWidth={1.75} className="w-[18px] h-[18px] text-[#4CC2FF]" />
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFBA]">
                Send a Direct Message
              </h3>
            </div>

            {submitted ? (
              <div className="p-6 rounded-[4px] bg-[#10B981]/10 border border-[#10B981]/30 text-center space-y-2">
                <CheckCircle2 size={28} strokeWidth={1.75} className="w-7 h-7 text-[#10B981] mx-auto" />
                <h4 className="text-sm font-bold text-[#FFFFFF]">
                  Message sent successfully.
                </h4>
                <p className="text-xs text-[#A8AFBA]">
                  Thank you for reaching out. Prasannaraj will respond directly to your email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-3 h-7 rounded-[4px] text-xs bg-white/[0.08] hover:bg-white/[0.12] text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {error && (
                  <div className="p-2 rounded-[4px] bg-red-500/10 border border-red-500/30 text-[11px] text-red-300">
                    {error}
                  </div>
                )}

                <div>
                  <label className="text-[11px] text-[#A8AFBA] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager / Collaborator"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full h-8 px-3 rounded-[4px] bg-[#1a1a1a] border border-[#2d2d2d] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#0078D4]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#A8AFBA] block mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@organization.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full h-8 px-3 rounded-[4px] bg-[#1a1a1a] border border-[#2d2d2d] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#0078D4]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#A8AFBA] block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI Engineering Opportunity / Project Discussion"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full h-8 px-3 rounded-[4px] bg-[#1a1a1a] border border-[#2d2d2d] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#0078D4]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#A8AFBA] block mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your project, team, or opportunity..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full p-2.5 rounded-[4px] bg-[#1a1a1a] border border-[#2d2d2d] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#0078D4] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-8 rounded-[4px] text-xs font-normal bg-[#0078D4] text-white hover:bg-[#106EBE] disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} strokeWidth={1.75} className="w-[18px] h-[18px]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
