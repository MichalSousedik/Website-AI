"use client";

import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content";
import { useEffect, useMemo, useRef, useState } from "react";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold tracking-tight mb-8 text-foreground/90">{title}</h2>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.classList.add("scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}

function ImageModal({ src, alt, isOpen, onClose }: { src: string; alt: string; isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors z-10"
          aria-label="Close modal"
        >
          ×
        </button>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const initials = useMemo(() => {
    return profile.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, []);

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="mx-auto max-w-5xl px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-accent text-accent-foreground grid place-items-center font-semibold">
              {initials}
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight">{profile.name}</div>
              <div className="text-xs text-foreground/70 leading-tight">{profile.role}</div>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-8 text-sm">
            <a href="#timeline" className="hover:underline underline-offset-4 hover:text-accent transition-colors">Timeline</a>
            <a href="#education" className="hover:underline underline-offset-4 hover:text-accent transition-colors">Education</a>
            <a href="#contact" className="hover:underline underline-offset-4 hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-10">
          <div className="rounded-2xl border border-border p-8 bg-card shadow-sm">
            <div className="text-center mb-8">
              <div className="relative mx-auto mb-6 flex justify-center">
                <Image
                  src="/profile.jpeg"
                  alt={profile.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover border-4 border-accent/20 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full border-4 border-card flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">{profile.name}</h1>
                <p className="text-foreground/70 text-lg font-medium leading-tight">{profile.role}</p>
                {profile.location && (
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-sm text-foreground/60">{profile.location}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="border-t border-border/50 pt-6">
              <h3 className="text-sm font-semibold text-foreground/90 mb-3">About</h3>
              <p className="text-sm text-foreground/80 leading-7">{profile.summary}</p>
            </div>

            {profile.socials && profile.socials.length > 0 && (
              <div className="border-t border-border/50 pt-6 mt-6">
                <h3 className="text-sm font-semibold text-foreground/90 mb-3">Connect</h3>
                <div className="flex flex-wrap gap-3">
                  {profile.socials.map((s) => (
                    <Link 
                      key={s.href} 
                      href={s.href} 
                      target="_blank" 
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm font-medium border border-accent/20"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-16">
          <Section id="timeline" title="Experience Timeline">
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-accent/30">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent/60 animate-pulse"></div>
              </div>
              <div className="space-y-10">
                {profile.timeline && profile.timeline.map((item, idx) => {
                  const isCurrent = item.period.includes("Present");
                  return (
                    <ScrollReveal key={`${item.title}-${idx}`}>
                      <div className="relative group">
                        <div className={`absolute -left-2 top-2 size-4 rounded-full shadow-lg border-2 border-card transition-all duration-200 ${
                          isCurrent ? 'bg-accent ring-4 ring-accent/20 group-hover:ring-accent/30' : 'bg-accent/60 group-hover:bg-accent/80'
                        }`}>
                          {isCurrent && (
                            <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping"></div>
                          )}
                        </div>
                        <div className={`ml-6 rounded-xl border p-8 interactive shadow-sm transition-all duration-200 hover:shadow-md ${
                          isCurrent 
                            ? 'border-accent bg-accent/5 shadow-lg hover:bg-accent/8' 
                            : 'border-border bg-card hover:border-accent/20 hover:bg-accent/3'
                        }`}>
                          <div className="flex items-baseline justify-between gap-4">
                            <div className="font-medium text-foreground/90 text-lg group-hover:text-foreground transition-colors duration-200">
                              {item.title}
                              {isCurrent && (
                                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground animate-pulse">
                                  Current
                                </span>
                              )}
                            </div>
                            <div className={`text-xs whitespace-nowrap px-3 py-1 rounded-full border transition-all duration-200 ${
                              isCurrent 
                                ? 'bg-accent text-accent-foreground border-accent group-hover:bg-accent/90' 
                                : 'bg-accent/10 text-foreground/60 border-accent/20 group-hover:bg-accent/15 group-hover:text-foreground/70'
                            }`}>
                              {item.period}
                            </div>
                          </div>
                          {item.description && (
                            <div className="mt-4">
                              {item.description.includes('. ') ? (
                                <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80 group-hover:text-foreground/85 transition-colors duration-200">
                                  {item.description.split('. ').filter(item => item.trim()).map((bullet, index) => (
                                    <li key={index} className="leading-6 hover:text-foreground transition-colors duration-150">
                                      {bullet.endsWith('.') ? bullet.slice(0, -1) : bullet}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-sm text-foreground/80 leading-6 group-hover:text-foreground/85 transition-colors duration-200">{item.description}</p>
                              )}
                            </div>
                          )}
                          {item.technologies && (
                            <div className="flex flex-wrap gap-3 mt-6">
                              {item.technologies.map((t) => (
                                <span key={t} className={`text-[11px] px-3 py-1 rounded-full border transition-all duration-200 hover:shadow-sm ${
                                  isCurrent 
                                    ? 'bg-accent/20 text-foreground/80 border-accent/40 hover:bg-accent/25 hover:border-accent/50' 
                                    : 'bg-accent/10 text-foreground/70 border-accent/20 hover:bg-accent/15 hover:border-accent/30 hover:text-foreground/80'
                                }`}>
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </Section>

          <Section id="education" title="Education">
            {profile.education.length === 0 && (
              <div className="text-sm text-foreground/60">Add education in <code className="font-mono">src/content.ts</code>.</div>
            )}
            {profile.education.map((ed) => (
              <div key={`${ed.school}-${ed.degree}-${ed.start}`} className="rounded-xl border border-border p-8 bg-card shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div className="text-base font-medium text-lg">{ed.degree} — {ed.school}</div>
                  <div className="text-xs text-foreground/60 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">{ed.start} · {ed.end}</div>
                </div>
                {ed.location && <div className="text-xs text-foreground/60 mt-2">{ed.location}</div>}
                {ed.details && ed.details.length > 0 && (
                  <div className="mt-6 space-y-3 text-sm text-foreground/85">
                    {ed.details.map((d, i) => {
                      if (d.startsWith('•')) {
                        // Custom bullet point - render as regular text with custom styling
                        return (
                          <div key={i} className="leading-6 pl-6 relative">
                            <span className="absolute left-0 text-accent">•</span>
                            <span className="pl-2">{d.substring(1).trim()}</span>
                          </div>
                        );
                      } else {
                        // Regular list item
                        return (
                          <div key={i} className="leading-6 pl-6 relative">
                            <span className="absolute left-0 text-accent">•</span>
                            <span className="pl-2">{d}</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
                {ed.thesisLink && (
                  <div className="mt-6">
                    <Link 
                      href={ed.thesisLink} 
                      target="_blank" 
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm font-medium border border-accent/20"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Thesis
                    </Link>
                  </div>
                )}
                {ed.images && ed.images.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-sm font-medium text-foreground/90 mb-4">Thesis Documentation</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {ed.images.map((image, index) => (
                        <div 
                          key={index} 
                          className="group relative rounded-xl overflow-hidden border border-border bg-muted shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleImageClick(image, `Thesis documentation ${index + 1}`)}
                        >
                          <div className="aspect-[4/3] relative">
                            <Image
                              src={image}
                              alt={`Thesis documentation ${index + 1}`}
                              width={400}
                              height={300}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 bg-accent/80 text-accent-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Section>

          <Section id="contact" title="Contact">
            <div className="rounded-xl border border-border p-8 bg-card shadow-sm">
              <div className="text-sm text-foreground/80">Feel free to reach out.</div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                {profile.email && (
                  <a href={`mailto:${profile.email}`} className="text-accent hover:underline font-medium">{profile.email}</a>
                )}
                {profile.socials.map((s) => (
                  <Link key={s.href} href={s.href} target="_blank" className="text-accent hover:underline font-medium">{s.label}</Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-xs text-foreground/50 italic">
                  They say the cobbler's kids go barefoot... well, in my case, this whole website was whipped up by AI.
                </p>
              </div>
            </div>
          </Section>
        </div>
        </div>
      </main>
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
