"use client";

import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Briefcase,
  Users,
  Building2,
  Quote,
    TrendingUp,
    Zap,
    Award,
    Globe,
  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useState } from "react";

const caseStudiesData: Record<string, any> = {
  "betterhealth-group": {
    company: "BetterHealth Group",
    industry: "Healthcare",
    size: "500+ Employees",
    useCase: "Unified Provider Directory",
    hero: {
      title: "Consistent, Professional Branding for 450+ Healthcare Providers Across 6 States",
      subtitle: "How BetterHealth Group eliminated scheduling chaos and saved 85% on professional headshots using BetterPic.",
      metrics: [
        { label: "Consistency", value: "100%", icon: Shield },
        { label: "Cost Savings", value: "85%", icon: TrendingUp },
        { label: "Turnaround", value: "48h", icon: Clock },
      ],
      image: "1576091160399-112ba8d25d1d",
    },
    challenge: {
      title: "The Challenge: A Fragmented Brand Identity",
      content: "With providers scattered across six states, BetterHealth Group struggled to maintain a consistent professional image. Many providers were using vacation snapshots or family photos in the official directory. Coordinating local photographers was a logistical nightmare and prohibitively expensive.",
      points: [
        "Inconsistent image quality and backgrounds",
        "High costs of local photographers ($150-300 per headshot)",
        "Scheduling chaos for distributed teams",
        "Slow onboarding for new providers",
      ],
    },
    solution: {
      title: "The Solution: Enterprise AI Headshots",
      content: "BetterHealth Group implemented BetterPic to provide every provider with a studio-quality headshot without leaving their clinic. They selected a specific brand style: white backgrounds, professional lab coats, stethoscopes, and navy scrubs.",
      points: [
        "Self-service uploads for all providers",
        "Centralized management for brand consistency",
        "Automated AI styling matching medical standards",
        "Instant delivery for new hire onboarding",
      ],
    },
    results: {
      title: "The Results: Professional Credibility at Scale",
      metrics: [
        { label: "Brand Consistency", value: "100%", description: "Every provider profile now matches brand guidelines perfectly." },
        { label: "Cost Reduction", value: "85%", description: "Saved tens of thousands compared to traditional photography." },
        { label: "Logistics Simplified", value: "Zero", description: "No more scheduling, travel, or manual coordination required." },
      ],
      impact: "Beyond the numbers, the primary impact was boosted patient trust. Patients now see a unified, professional team when browsing the provider directory, establishing credibility before the first appointment.",
    },
    testimonial: {
      quote: "BetterPic solved what we thought was impossible—getting consistent, professional headshots for our entire distributed team. Our team photos now look polished and unified, and we don't have to scramble to coordinate expensive photoshoots anymore.",
      author: "Manali Shah",
      role: "Social Media Manager",
      avatar: "1494790108377-be9c29b29330",
    },
  },
  "elucient-betterpic": {
    company: "Elucient Dental",
    industry: "Healthcare / Dental",
    size: "100+ Employees",
    useCase: "Brand Unification",
    hero: {
      title: "A Unified Professional Image for Elucient Dental's Growing Network",
      subtitle: "How one of the fastest-growing dental networks unified their brand identity across multiple practices.",
      metrics: [
        { label: "Brand Alignment", value: "100%", icon: Shield },
        { label: "Onboarding", value: "Instant", icon: Zap },
        { label: "Quality", value: "Studio", icon: Award },
      ],
      image: "1629909613654-28e377c37b09",
    },
    challenge: {
      title: "The Challenge: Photographer Inconsistency",
      content: "As Elucient Dental expanded, maintaining a consistent 'look and feel' across their provider directory became impossible. Different practices used different photographers, leading to clashing backgrounds, lighting, and quality levels.",
      points: [
        "No unified brand identity across practices",
        "High administrative overhead for photoshoot scheduling",
        "New hires waiting weeks for professional photos",
        "Outdated imagery that didn't reflect clinical excellence",
      ],
    },
    solution: {
      title: "The Solution: Standardized Digital Studio",
      content: "BetterPic provided Elucient with a digital studio environment. By setting a fixed brand style, every staff member—from surgeons to receptionists—could generate matching headshots in minutes.",
      points: [
        "Pre-defined backgrounds and lighting styles",
        "Mobile-first upload process for busy clinicians",
        "Automated retouching for a consistent finish",
        "Simple dashboard for practice managers",
      ],
    },
    results: {
      title: "The Results: Clinical Excellence Reflected",
      metrics: [
        { label: "Directory Completion", value: "100%", description: "Every team member now has a professional, matching headshot." },
        { label: "LinkedIn Adoption", value: "95%", description: "Massive uptick in team members updating their professional profiles." },
        { label: "Time to Live", value: "24h", description: "New hires are added to the website before their first shift." },
      ],
      impact: "The transformation of the 'Our Team' page has had a direct impact on patient confidence and employer branding.",
    },
    testimonial: {
      quote: "Other AI tools weren't good enough for professional use. BetterPic delivered studio-quality results that exceeded our expectations and finally gave us the consistency we needed.",
      author: "John Marcinuk",
      role: "CEO",
      avatar: "1472099645785-5658abf4ff4e",
    },
  },
  "wyn-solutions": {
    company: "WYN Technologies",
    industry: "Technology",
    size: "200+ Employees",
    useCase: "Global Remote Alignment",
    hero: {
      title: "Unifying a Global Workforce Across 8 Countries",
      subtitle: "How WYN Technologies created a cohesive 'one team' feel for their distributed global workforce.",
      metrics: [
        { label: "Countries", value: "8", icon: Globe },
        { label: "Travel Saved", value: "$50k+", icon: TrendingUp },
        { label: "Time to Complete", value: "7 Days", icon: Clock },
      ],
      image: "1497366216548-37526070297c",
    },
    challenge: {
      title: "The Challenge: The Distance Gap",
      content: "WYN Technologies has a remote-first culture with talent across 8 countries. Flying everyone to a single location for a photoshoot was logistically impossible and financially irresponsible. Yet, their 'About Us' page looked like a collection of random social media avatars.",
      points: [
        "Zero brand consistency across remote teams",
        "Impossible to coordinate global photoshoots",
        "Prohibitive travel and equipment costs",
        "Employees feeling disconnected from the central brand",
      ],
    },
    solution: {
      title: "The Solution: A Borderless Headshot Campaign",
      content: "WYN launched a company-wide 'BetterPic Week.' Every employee, regardless of their location, used the platform to generate headshots that matched the company's tech-forward, modern aesthetic.",
      points: [
        "Global rollout in 24 hours",
        "Consistent lighting and 'modern office' backgrounds",
        "Zero logistics or travel required",
        "Empowered employees to pick their best AI options",
      ],
    },
    results: {
      title: "The Results: One Team, One Look",
      metrics: [
        { label: "Team Reach", value: "200+", description: "Every single employee participated across all time zones." },
        { label: "Cost Efficiency", value: "98%", description: "Saved nearly the entire budget compared to travel-based shoots." },
        { label: "Brand Cohesion", value: "Absolute", description: "The internal Slack and external website now look perfectly unified." },
      ],
      impact: "The campaign boosted internal morale and external credibility, making the company look as professional as the software they build.",
    },
    testimonial: {
      quote: "Flying everyone to one location was impossible. BetterPic gave us the consistency of an in-person shoot without anyone leaving their home. It's the perfect solution for global teams.",
      author: "Rachel Torres",
      role: "VP of People",
      avatar: "1573497019940-1c28c88b4f3e",
    },
  },
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/betterpic_logo-1768994589325.jpeg?width=8000&height=8000&resize=contain"
              alt="BetterPic"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = caseStudiesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                Case Study: {data.company}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {data.hero.subtitle}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {data.hero.metrics.map((metric: any, i: number) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                    <metric.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg">
                Get a Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative">
                <Image
                  src={`https://images.unsplash.com/photo-${data.hero.image}?w=1200&h=900&fit=crop`}
                  alt={data.company}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-border flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Brand Verified</p>
                  <p className="text-sm text-muted-foreground">100% Alignment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-12 border-y border-border bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-border">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Industry</p>
                <p className="font-semibold text-foreground">{data.industry}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-border">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Company Size</p>
                <p className="font-semibold text-foreground">{data.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-border">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Primary Use Case</p>
                <p className="font-semibold text-foreground">{data.useCase}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">{data.challenge.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {data.challenge.content}
              </p>
              <ul className="space-y-4">
                {data.challenge.points.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">{data.solution.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {data.solution.content}
              </p>
              <ul className="space-y-4">
                {data.solution.points.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white rounded-[3rem] mx-4 sm:mx-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{data.results.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Measurable impact across the entire organization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {data.results.metrics.map((metric: any, i: number) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
                <p className="text-5xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-xl font-semibold mb-3">{metric.label}</p>
                <p className="text-slate-400 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl">
            <p className="text-xl text-center italic text-slate-200">
              {data.results.impact}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary/40 mx-auto mb-8" />
          <blockquote className="text-2xl sm:text-3xl font-medium text-foreground leading-tight mb-10">
            &ldquo;{data.testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <Image
              src={`https://images.unsplash.com/photo-${data.testimonial.avatar}?w=128&h=128&fit=crop&crop=face`}
              alt={data.testimonial.author}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <p className="font-bold text-lg text-foreground">{data.testimonial.author}</p>
            <p className="text-muted-foreground">{data.testimonial.role}, {data.company}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-violet-600 rounded-[3rem] p-12 lg:p-20 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Achieve This Scale for Your Team
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Ready to unify your brand identity with professional AI headshots? Get a custom quote for your organization today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-lg font-semibold">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border text-center text-sm text-muted-foreground">
        <p>&copy; 2026 BetterPic. All rights reserved.</p>
      </footer>
    </div>
  );
}
