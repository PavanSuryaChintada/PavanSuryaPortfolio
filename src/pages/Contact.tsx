import React from 'react';
import Header from '@/components/desktop/Header';
import profileImage from '@/assets/avatar.png';
import { Linkedin, Mail, Phone, Coffee } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#050505] to-[#020202]">
      <Header />
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col items-center gap-16 px-6 pb-20 pt-14">
        <section className="relative w-full max-w-[420px]">
          <div className="absolute inset-0 rounded-[0.95rem] bg-[radial-gradient(circle_at_top_left,rgba(38,219,110,0.24),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(38,219,110,0.2),transparent_58%)] shadow-[0_0_22px_rgba(38,219,110,0.18)]" />
          <div className="relative overflow-hidden rounded-[0.9rem] border border-[#1d1d1d] bg-[#151515] shadow-[0_0_14px_rgba(30,210,110,0.12)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-16 right-0 h-60 w-72 rotate-[18deg] rounded-[2.4rem] bg-[linear-gradient(140deg,rgba(90,90,90,0.35)_0%,rgba(50,50,50,0.16)_55%,rgba(0,0,0,0)_100%)] opacity-60" />
              <div className="absolute -bottom-32 -left-4 h-64 w-96 rotate-[8deg] rounded-[52%] bg-[linear-gradient(160deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0)_92%)] opacity-35" />
            </div>
            <div className="relative flex flex-col gap-5 px-9 py-8">
              <div className="flex items-start gap-5">
                <img
                  src={profileImage}
                  alt="Sumanth Samala"
                  className="h-20 w-20 rounded-full border border-[#282828] object-cover shadow-[0_0_12px_rgba(30,215,96,0.18)]"
                />
                <div className="space-y-3">
                  <div className="space-y-[2px]">
                    <h1 className="text-[1.9rem] font-semibold leading-tight text-white">Sumanth Samala</h1>
                    <p className="text-base font-medium text-[#d5d5d5]">Senior Software Engineer</p>
                  </div>
                  <p className="max-w-sm text-sm leading-relaxed text-[#bcbcbc]">
                    With 5+ years in full-stack development, skilled in Ruby on Rails, Java Spring Boot, React, Node, AWS,
                    Kubernetes, and Docker.
                  </p>
                  <p className="text-sm text-[#a3a3a3]">Kajima Community | Swansea University</p>
                  <a
                    href="https://www.linkedin.com/in/sumanthsamala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-3 rounded-lg bg-[#18a64b] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(24,166,75,0.22)] transition-transform duration-150 hover:-translate-y-[1px] hover:bg-[#159344]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[#159344]">
                      <Linkedin className="h-3.5 w-3.5" />
                    </span>
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full max-w-[520px] flex-col items-center gap-12 text-center">
          <p className="text-base text-[#dcdcdc]">
            I'm always up for a chat or a coffee! Feel free to reach out.
          </p>

          <div className="flex w-full flex-col items-center gap-4">
            <div className="relative w-full max-w-[320px]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,rgba(29,185,84,0.5)_0%,rgba(29,185,84,0.12)_70%,transparent_100%)] opacity-70 blur" />
              <a
                href="mailto:chintusamala96@gmail.com"
                className="relative flex w-full items-center gap-3 rounded-full border border-[#2a2a2a] bg-[#191919] px-5 py-3 text-sm font-medium text-[#7ef5a6] transition duration-200 hover:bg-[#202020]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#153a25] text-[#7ef5a6]">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <span className="flex-1 text-left tracking-wide">chintusamala96@gmail.com</span>
              </a>
            </div>

            <div className="relative w-full max-w-[320px]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,rgba(29,185,84,0.5)_0%,rgba(29,185,84,0.12)_70%,transparent_100%)] opacity-70 blur" />
              <a
                href="tel:+447442796769"
                className="relative flex w-full items-center gap-3 rounded-full border border-[#2a2a2a] bg-[#191919] px-5 py-3 text-sm font-medium text-[#7ef5a6] transition duration-200 hover:bg-[#202020]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#153a25] text-[#7ef5a6]">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <span className="flex-1 text-left tracking-wide">+44 7442 796769</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#cfcfcf]">
            <span>Or catch up over a coffee</span>
            <Coffee className="h-4 w-4 text-[#d3ad6c]" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
