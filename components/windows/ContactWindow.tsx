"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  MailRegular,
  LocationRegular,
  SendRegular,
  CheckmarkCircleRegular,
  ChatRegular,
  GitHubFluentMark,
  LinkedInFluentMark,
} from "@/components/icons/FluentIcons";

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

  const handleSubmit = (e: React.FormEvent) => {
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <div className="flex flex-col h-full bg-[#181818] select-text text-xs text-[#E1E1E1] overflow-y-auto p-6 md:p-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-[#2d2d2d]">
          <div className="flex items-center gap-2">
            <MailRegular className="w-5 h-5 text-[#4CC2FF]" />
            <h1 className="text-xl md:text-2xl font-bold text-[#FFFFFF]">
              Contact & Inquiries
            </h1>
          </div>
          <p className="text-xs text-[#A8AFBA] mt-1">
            Connect with Prasannaraj regarding AI engineering roles, research collaboration, or project inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Contact Channels */}
          <div className="space-y-3.5">
            <div className="p-5 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFBA]">
                Direct Communication Channels
              </h3>

              <a
                href={`mailto:${profileData.links.email}`}
                className="flex items-center gap-3 p-3 rounded-[4px] bg-[#1a1a1a] hover:bg-[#252525] border border-[#282828] transition-colors cursor-pointer group"
              >
                <div className="p-2 rounded-[4px] bg-[#0078D4]/20 text-[#4CC2FF]">
                  <MailRegular className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-[#A8AFBA]">Email Address</p>
                  <p className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#4CC2FF] truncate">
                    {profileData.links.email}
                  </p>
                </div>
              </a>

              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-[4px] bg-[#1a1a1a] hover:bg-[#252525] border border-[#282828] transition-colors cursor-pointer group"
              >
                <div className="p-2 rounded-[4px] bg-[#0078D4]/20 text-[#4CC2FF]">
                  <LinkedInFluentMark className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#A8AFBA]">Professional Network</p>
                  <p className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#4CC2FF]">
                    LinkedIn Profile
                  </p>
                </div>
              </a>

              <a
                href={profileData.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-[4px] bg-[#1a1a1a] hover:bg-[#252525] border border-[#282828] transition-colors cursor-pointer group"
              >
                <div className="p-2 rounded-[4px] bg-white/[0.08] text-[#FFFFFF]">
                  <GitHubFluentMark className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#A8AFBA]">Source Repositories</p>
                  <p className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#4CC2FF]">
                    GitHub Profile
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-[4px] bg-[#1a1a1a] border border-[#282828]">
                <div className="p-2 rounded-[4px] bg-[#10B981]/20 text-[#10B981]">
                  <LocationRegular className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#A8AFBA]">Location Base</p>
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
              <ChatRegular className="w-4 h-4 text-[#4CC2FF]" />
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFBA]">
                Send a Direct Message
              </h3>
            </div>

            {submitted ? (
              <div className="p-6 rounded-[4px] bg-[#10B981]/10 border border-[#10B981]/30 text-center space-y-2">
                <CheckmarkCircleRegular className="w-7 h-7 text-[#10B981] mx-auto" />
                <h4 className="text-sm font-bold text-[#FFFFFF]">
                  Message Sent Successfully
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
                      <SendRegular className="w-3.5 h-3.5" />
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
