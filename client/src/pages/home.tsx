import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-primary/10 selection:text-primary">
      {/* Container - Max Width 840px (per requirements) */}
      <div className="max-w-[840px] mx-auto px-6 py-12 md:py-20">
        
        {/* 1. Header */}
        <header className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-16 md:mb-24">
          <h1 className="text-xl font-semibold tracking-tight">Biser Dimitrov</h1>
          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="mailto:hello@biserdimitrov.com" className="hover:text-primary transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/biserdimitrov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://www.forbes.com/sites/biserdimitrov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Forbes</a>
            <a href="#patents" className="hover:text-primary transition-colors">Patents</a>
          </nav>
        </header>

        <main className="space-y-16 md:space-y-24">
          
          {/* 2. Hero */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground/90 leading-tight">
              Digital Assets Technology & Enterprise Platforms
            </h2>
            <div className="space-y-6 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I lead teams delivering secure, scalable financial infrastructure across digital assets, stablecoin-based payment rails, tokenization, and enterprise integrations—with a focus on production readiness, controls, and resilience in regulated environments.
              </p>
              
              <div className="text-sm text-muted-foreground space-y-1 pt-2">
                <p><span className="text-foreground font-medium">Currently:</span> Digital Assets Technology leader, Citi</p>
                <p><span className="text-foreground font-medium">Location:</span> New York City</p>
              </div>
            </div>
          </section>

          {/* 3. Expertise */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Areas of focus</h3>
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                "Digital assets platforms: custody workflows, tokenization, settlement and post-trade integrations",
                "Stablecoins & programmable payments: enterprise-grade rails, compliance-aware design, operational controls",
                "Applied AI in financial infrastructure: automation, monitoring, analytics, and decision support (human-in-the-loop)",
                "Platform engineering: APIs, data pipelines, reliability, security-by-design, governance"
              ].map((item, i) => (
                <li key={i} className="text-base leading-relaxed text-foreground/80 relative pl-4 border-l-2 border-border/50">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Selected Experience */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">Selected experience</h3>
            <div className="space-y-10">
              <div className="grid md:grid-cols-[200px_1fr] gap-4">
                <div className="font-medium text-foreground">Citi — Digital Assets Technology</div>
                <div className="text-muted-foreground leading-relaxed">
                  Leadership across platform engineering for digital assets initiatives, partnering across product, risk, legal, and operations to bring capabilities from concept to production.
                </div>
              </div>
              <div className="grid md:grid-cols-[200px_1fr] gap-4">
                <div className="font-medium text-foreground">Enterprise platforms & integrations</div>
                <div className="text-muted-foreground leading-relaxed">
                  Architected and delivered high-availability systems spanning internal platforms and partner ecosystems, emphasizing measurable outcomes, operating cadence, and long-term maintainability.
                </div>
              </div>
            </div>
          </section>

          {/* 5. Patents */}
          <section id="patents">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Patents</h3>
            <div className="space-y-2">
              <p className="text-foreground/80">Inventor on patents related to financial systems and platform infrastructure.</p>
              <a 
                href="https://patents.google.com/?inventor=Biser+Dimitrov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-primary hover:underline underline-offset-4 decoration-primary/30"
              >
                View patents &rarr;
              </a>
            </div>
          </section>

          {/* 6. Speaking */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Speaking</h3>
            <div className="max-w-3xl space-y-6">
              <p className="text-muted-foreground">
                I speak on stablecoin infrastructure, tokenization, enterprise adoption of digital assets, and operating models for shipping in regulated environments.
              </p>
              <ul className="space-y-3 pl-4 list-disc marker:text-muted-foreground">
                {[
                  "Stablecoin rails in the enterprise: architecture, controls, and adoption patterns",
                  "From pilots to production: building digital assets platforms that last",
                  "Practical AI for financial infrastructure: automation, monitoring, and governance"
                ].map((topic, i) => (
                  <li key={i} className="text-foreground/80 pl-2">{topic}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Writing */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Writing</h3>
            <p className="text-muted-foreground mb-2">
              Occasional notes on digital assets infrastructure, platform leadership, and applied AI in enterprise systems.
            </p>
            <a 
              href="https://www.forbes.com/sites/biserdimitrov/"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-primary hover:underline underline-offset-4 decoration-primary/30"
            >
              Read my articles on Forbes &rarr;
            </a>
          </section>

          {/* 8. Contact */}
          <section className="pt-8 border-t border-border">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Contact</h3>
            <p className="text-lg">
              For speaking, advisory, or professional inquiries: <br className="sm:hidden"/>
              <a href="mailto:hello@biserdimitrov.com" className="text-primary hover:underline underline-offset-4 decoration-primary/30">
                hello@biserdimitrov.com
              </a>
            </p>
          </section>
        
        </main>

        <footer className="mt-24 pt-8 text-sm text-muted-foreground/60 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Biser Dimitrov</p>
        </footer>
      </div>
    </div>
  );
}
