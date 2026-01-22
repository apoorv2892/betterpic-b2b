"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Zap,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  Upload,
  Sparkles,
  Download,
  Building2,
  Globe,
  Layers,
  Star,
  Camera,
  Briefcase,
  UserCheck,
  Image as ImageIcon,
  BadgeCheck,
  HeartHandshake,
  Menu,
  X,
  ChevronRight,
  Play,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/betterpic_logo-1768994589325.jpeg?width=8000&height=8000&resize=contain"
              alt="BetterPic"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium">
              Log in
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get a Quote
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-start">
                  Log in
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-24 lg:pt-32 pb-0 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI Corporate Headshots - Built for Scale
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Team Headshots, <span className="text-primary">Portrayed With Purpose</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              Get studio-quality AI headshots for your entire organization. Trusted by Healthcare, Legal & Real Estate teams <CheckCircle2 className="inline w-5 h-5 text-primary" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-lg border-2"
              >
                View Samples
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">4.7</span>
                    <span className="text-muted-foreground"> on </span>
                    <span className="font-semibold text-[#00b67a]">Trustpilot</span>
                  </div>
                </div>
                <div className="h-6 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">SOC 2 Certified</span>
                </div>
                <div className="h-6 w-px bg-border hidden sm:block" />
                <span className="text-sm text-muted-foreground">1,000+ Reviews</span>
              </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              {[
                "1560250097-0b93528c311a",
                "1573496359142-b8d87734a5a2",
                "1472099645785-5658abf4ff4e",
                "1580489944761-15a19d654956",
                "1519345182560-3f2917c472ef",
                "1534528741775-53994a69daeb",
              ].map((id, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden shadow-lg ${
                    i === 1 || i === 4 ? "translate-y-4" : ""
                  }`}
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${id}?w=200&h=250&fit=crop&crop=face`}
                    alt=""
                    width={200}
                    height={250}
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ready in 2 hours</p>
                  <p className="text-sm text-muted-foreground">Not weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceSection() {
  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Certified",
      image: "1633265486064-086b219458ec",
    },
    {
      name: "GDPR",
      description: "Compliant",
      image: "1563013544-824ae1b704d3",
    },
    {
      name: "HIPAA",
      description: "Ready",
      image: "1551288049-bebda4e38f71",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white mb-2">
              Compliant with the highest standards
            </h3>
            <p className="text-slate-400 text-sm">
              Your data is protected by enterprise-grade security
            </p>
          </div>
          <div className="flex items-center gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{cert.name}</p>
                  <p className="text-slate-400 text-xs">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
          >
            Visit Trust Center
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "50,000+", label: "Headshots Delivered" },
    { value: "10,000+", label: "Happy Companies" },
    { value: "2 Hours", label: "Average Turnaround" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-white/80 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogosSection() {
  const logos = [
    { name: "Amazon", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/Amazon-1769067549606.jpg?width=8000&height=8000&resize=contain" },
    { name: "Apple", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/apple-logo-1024x728-1769067549610.png?width=8000&height=8000&resize=contain" },
    { name: "AWS", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/AWS-Logo-Gray-1769067549609.png?width=8000&height=8000&resize=contain" },
    { name: "LinkedIn", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/Linkedin-logo-1769067549612.jpg?width=8000&height=8000&resize=contain" },
    { name: "Accenture", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/Logo_Accenture.svg-1769067549610.png?width=8000&height=8000&resize=contain" },
    { name: "Meta", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/Meta-1769067549611.jpg?width=8000&height=8000&resize=contain" },
    { name: "NVIDIA", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/Untitled-design-5-1769081218957.png?width=8000&height=8000&resize=contain" },
    { name: "TEDx", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/TEdX-1769067549607.jpg?width=8000&height=8000&resize=contain" },
  ];

  return (
    <section className="pb-12 px-4 sm:px-6 lg:px-8 border-b border-border/50 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-lg font-medium text-foreground mb-8">
          Trusted by teams like:
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-16 items-center">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 h-12 w-32 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee gap-16 items-center" aria-hidden="true">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.name}-dup-${i}`}
                  className="flex-shrink-0 h-12 w-32 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState("lawyers");
  
  const categories = [
    { id: "lawyers", label: "Lawyers" },
    { id: "healthcare", label: "Healthcare" },
    { id: "real-estate", label: "Real Estate" },
    { id: "professionals", label: "Professionals" },
    { id: "executives", label: "Executives" },
  ];

  const categoryImages: Record<string, string[]> = {
    "real-estate": [
      "1560250097-0b93528c311a",
      "1573496359142-b8d87734a5a2",
      "1472099645785-5658abf4ff4e",
      "1580489944761-15a19d654956",
      "1519345182560-3f2917c472ef",
      "1534528741775-53994a69daeb",
      "1507003211169-0a1dd7228f2d",
      "1438761681033-6461ffad8d80",
    ],
    "professionals": [
      "1507003211169-0a1dd7228f2d",
      "1494790108377-be9c29b29330",
      "1500648767791-00dcc994a43e",
      "1573497019940-1c28c88b4f3e",
      "1544005313-94ddf0286df2",
      "1506794778202-cad84cf45f1d",
      "1560250097-0b93528c311a",
      "1573496359142-b8d87734a5a2",
    ],
    "healthcare": [
      "1612349317150-e413f6a5b16d",
      "1559839734-2b71ea197ec2",
      "1582750433449-648ed127bb54",
      "1651008376811-b90baee60c1f",
      "1594824476967-48c8b964273f",
      "1576091160399-112ba8d25d1d",
      "1622253692010-333f2da6031d",
      "1537368910025-700350fe46c7",
    ],
    "lawyers": [
      "1556157382-97eda2d62296",
      "1573497019940-1c28c88b4f3e",
      "1519345182560-3f2917c472ef",
      "1472099645785-5658abf4ff4e",
      "1507003211169-0a1dd7228f2d",
      "1500648767791-00dcc994a43e",
      "1560250097-0b93528c311a",
      "1438761681033-6461ffad8d80",
    ],
    "executives": [
      "1519345182560-3f2917c472ef",
      "1534528741775-53994a69daeb",
      "1472099645785-5658abf4ff4e",
      "1507003211169-0a1dd7228f2d",
      "1573496359142-b8d87734a5a2",
      "1556157382-97eda2d62296",
      "1494790108377-be9c29b29330",
      "1580489944761-15a19d654956",
    ],
  };

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            One team. One brand. One seamless headshot solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional. Consistent. Instantly aligned with your company&apos;s identity.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white text-muted-foreground hover:bg-slate-100 border border-border"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
          {categoryImages[activeCategory].map((id, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className="rounded-2xl overflow-hidden aspect-[3/4] relative group shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={`https://images.unsplash.com/photo-${id}?w=600&h=800&fit=crop&crop=face`}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  const transformations = [
    {
      before: "1507003211169-0a1dd7228f2d",
      after: "1560250097-0b93528c311a",
      name: "John Smith",
      role: "Software Engineer",
    },
    {
      before: "1438761681033-6461ffad8d80",
      after: "1573496359142-b8d87734a5a2",
      name: "Sarah Johnson",
      role: "Marketing Director",
    },
    {
      before: "1500648767791-00dcc994a43e",
      after: "1472099645785-5658abf4ff4e",
      name: "Michael Chen",
      role: "Product Manager",
    },
  ];

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See the Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From casual selfies to professional corporate headshots in minutes
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 border border-border shadow-sm">
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Before</p>
                  <div className="rounded-xl overflow-hidden aspect-square relative">
                    <Image
                      src={`https://images.unsplash.com/photo-${item.before}?w=300&h=300&fit=crop&crop=face`}
                      alt="Before"
                      fill
                      className="object-cover grayscale-[30%]"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">After</p>
                  <div className="rounded-xl overflow-hidden aspect-square relative">
                    <Image
                      src={`https://images.unsplash.com/photo-${item.after}?w=300&h=300&fit=crop&crop=face`}
                      alt="After"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
          >
            View More Examples
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function TrustpilotBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
            <Star className="w-3 h-3 text-white fill-white" />
          </div>
        ))}
      </div>
      <div className="text-sm">
        <span className="font-semibold">4.7</span>
        <span className="text-muted-foreground"> / 5 on </span>
        <span className="font-semibold text-[#00b67a]">Trustpilot</span>
      </div>
    </div>
  );
}

function SOC2Badge({ variant = "default" }: { variant?: "default" | "dark" | "compact" }) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
        <Shield className="w-4 h-4 text-primary" />
        <span className="text-xs font-medium">SOC 2</span>
      </div>
    );
  }
  
  if (variant === "dark") {
    return (
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
        <Shield className="w-5 h-5 text-primary" />
        <div>
          <p className="text-white text-sm font-medium">SOC 2 Type II</p>
          <p className="text-white/60 text-xs">Certified</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-border">
      <Shield className="w-5 h-5 text-primary" />
      <div>
        <p className="text-foreground text-sm font-medium">SOC 2 Type II</p>
        <p className="text-muted-foreground text-xs">Certified</p>
      </div>
    </div>
  );
}

function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "BetterHealth Group",
      date: "March 14, 2025",
      readTime: "4 min read",
      image: "1576091160399-112ba8d25d1d",
      challenge: "Inconsistent headshots across 12 states",
      solution: "AI-generated consistent headshots for 450+ healthcare professionals",
      results: [
        "100% brand consistency achieved",
        "Completed in 48 hours vs 3 months",
        "85% cost reduction",
      ],
      quote: "BetterPic solved what we thought was impossible - getting consistent, professional headshots for our entire distributed team.",
      author: "Manali Shah",
      role: "Social Media Manager",
      avatar: "1494790108377-be9c29b29330",
    },
    {
      company: "Elucient Dental",
      date: "March 13, 2025",
      readTime: "4 min read",
      image: "1629909613654-28e377c37b09",
      challenge: "No consistency with different photographers",
      solution: "Unified professional look for leadership and staff",
      results: [
        "LinkedIn profiles updated company-wide",
        "Website team page transformed",
        "New hire onboarding streamlined",
      ],
      quote: "Other AI tools weren't good enough for professional use. BetterPic delivered studio-quality results that exceeded our expectations.",
      author: "John Marcinuk",
      role: "CEO",
      avatar: "1472099645785-5658abf4ff4e",
    },
    {
      company: "WYN Technologies",
      date: "February 28, 2025",
      readTime: "3 min read",
      image: "1497366216548-37526070297c",
      challenge: "Remote team across 8 countries needed unified look",
      solution: "Coordinated AI headshot campaign for global team",
      results: [
        "200+ team members photographed",
        "Zero travel required",
        "Completed in one week",
      ],
      quote: "Flying everyone to one location was impossible. BetterPic gave us the consistency of an in-person shoot without anyone leaving their home.",
      author: "Rachel Torres",
      role: "VP of People",
      avatar: "1573497019940-1c28c88b4f3e",
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Stories Behind Teams Who Chose BetterPic
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <TrustpilotBadge />
          <div className="h-6 w-px bg-border" />
          <SOC2Badge variant="compact" />
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BadgeCheck className="w-4 h-4 text-primary" />
            <span>GDPR Compliant</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${study.image}?w=600&h=375&fit=crop`}
                  alt={study.company}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    Case Study
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span>{study.date}</span>
                  <span>·</span>
                  <span>{study.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  BetterPic x {study.company}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {study.challenge}
                </p>

                <div className="space-y-2 mb-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{result}</span>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground mb-6">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Image
                    src={`https://images.unsplash.com/photo-${study.avatar}?w=40&h=40&fit=crop&crop=face`}
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{study.author}</p>
                    <p className="text-xs text-muted-foreground">{study.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full gap-2 bg-slate-100 hover:bg-slate-200 text-foreground font-medium py-3 rounded-xl transition-colors"
                >
                  Read case study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Join 10,000+ companies who trust BetterPic
              </h3>
              <p className="text-slate-400 mb-6">
                From startups to Fortune 500 companies, teams trust us for professional, consistent headshots.
              </p>
              <div className="flex flex-wrap gap-4">
                <SOC2Badge variant="dark" />
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <BadgeCheck className="w-5 h-5 text-[#00b67a]" />
                  <div>
                    <p className="text-white text-sm font-medium">GDPR Ready</p>
                    <p className="text-white/60 text-xs">Compliant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-[#00b67a] flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                ))}
              </div>
              <p className="text-white text-lg font-semibold">4.7 out of 5 on Trustpilot</p>
              <p className="text-slate-400 text-sm">Based on 1,000+ reviews</p>
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90 rounded-full px-8 mt-4"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Your Photos",
      description:
        "Each team member uploads 10-15 casual photos from their phone. No professional equipment needed.",
    },
    {
      icon: Sparkles,
      number: "02",
      title: "AI Creates Headshots",
      description:
        "Our AI generates multiple professional headshot options for each person in your selected style.",
    },
    {
      icon: Layers,
      number: "03",
      title: "Review & Select",
      description:
        "Team members pick their favorites from the generated options. Make unlimited regenerations.",
    },
    {
      icon: Download,
      number: "04",
      title: "Download & Use",
      description:
        "Get high-resolution headshots ready for LinkedIn, company websites, and internal directories.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get professional headshots for your entire team in four simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const useCases = [
    {
      icon: Building2,
      title: "Company Directories",
      description: "Create a unified, professional look for your entire organization's employee directory.",
      image: "1497366216548-37526070297c",
    },
    {
      icon: Globe,
      title: "LinkedIn & Social Media",
      description: "Equip your team with professional headshots perfect for LinkedIn and professional networks.",
      image: "1497366811353-6870744d04b2",
    },
    {
      icon: Briefcase,
      title: "Marketing Materials",
      description: "Professional photos ready for press releases, marketing collateral, and presentations.",
      image: "1553877522-43269d4ea984",
    },
    {
      icon: UserCheck,
      title: "New Hire Onboarding",
      description: "Get new employees professional headshots from day one, matching the team's style.",
      image: "1522071820081-009f0129c71c",
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Use Cases</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perfect for Every Business Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional headshots that work across all your business applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${useCase.image}?w=800&h=450&fit=crop`}
                  alt={useCase.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <useCase.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{useCase.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:gap-3 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Weeks of Time",
      description:
        "No more scheduling conflicts or coordinating photographers. Get headshots for 100+ people in a single day.",
    },
    {
      icon: Users,
      title: "Perfect for Remote Teams",
      description:
        "Team members can upload photos from anywhere in the world. No need to fly everyone to one location.",
    },
    {
      icon: Zap,
      title: "Consistent Brand Look",
      description:
        "Every headshot matches your brand guidelines with uniform backgrounds, lighting, and style.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "SOC 2 compliant with data encryption. Photos are processed securely and never used for training.",
    },
    {
      icon: Award,
      title: "Professional Quality",
      description:
        "Studio-quality results that rival traditional photography. Perfect lighting and retouching included.",
    },
    {
      icon: TrendingUp,
      title: "Scale Effortlessly",
      description:
        "From 5 to 5,000 employees. Our platform handles teams of any size with consistent quality.",
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Benefits</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Companies Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The modern solution for HR, People Ops, and distributed companies
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [teamSize, setTeamSize] = useState(2);
  
  const pricingTiers = [
    { min: 2, max: 10, pricePerPerson: 49, name: "Starter" },
    { min: 11, max: 25, pricePerPerson: 39, name: "Small Team" },
    { min: 26, max: 50, pricePerPerson: 32, name: "Growing Team" },
    { min: 51, max: 100, pricePerPerson: 27, name: "Medium Team" },
    { min: 101, max: 250, pricePerPerson: 22, name: "Large Team" },
    { min: 251, max: 500, pricePerPerson: 17, name: "Enterprise" },
    { min: 501, max: 1000, pricePerPerson: 13, name: "Enterprise Plus" },
  ];

  const getCurrentTier = () => {
    return pricingTiers.find(tier => teamSize >= tier.min && teamSize <= tier.max) || pricingTiers[pricingTiers.length - 1];
  };

  const currentTier = getCurrentTier();
  const totalPrice = teamSize * currentTier.pricePerPerson;
  const traditionalCost = teamSize * 150;
  const savings = traditionalCost - totalPrice;
  const savingsPercent = Math.round((savings / traditionalCost) * 100);

  const features = [
    { text: "120+ AI headshots per person", included: true },
    { text: "4K ultra-high resolution", included: true },
    { text: "Multiple background options", included: true },
    { text: "Brand color customization", included: true },
    { text: "Team admin dashboard", included: true },
    { text: "Priority support", included: teamSize >= 11 },
    { text: "Custom backgrounds upload", included: teamSize >= 26 },
    { text: "Dedicated account manager", included: teamSize >= 51 },
    { text: "API access", included: teamSize >= 101 },
    { text: "SSO integration", included: teamSize >= 101 },
    { text: "Custom SLA", included: teamSize >= 251 },
  ];

  const sliderStops = [2, 10, 25, 50, 100, 250, 500, 1000];
  
  const getSliderValue = (size: number) => {
    if (size <= sliderStops[0]) return 0;
    for (let i = 1; i < sliderStops.length; i++) {
      if (size <= sliderStops[i]) {
        const prevStop = sliderStops[i - 1];
        const currStop = sliderStops[i];
        const segmentStart = ((i - 1) / (sliderStops.length - 1)) * 100;
        const segmentEnd = (i / (sliderStops.length - 1)) * 100;
        const ratio = (size - prevStop) / (currStop - prevStop);
        return segmentStart + ratio * (segmentEnd - segmentStart);
      }
    }
    return 100;
  };

  const getSizeFromSlider = (value: number) => {
    const segmentCount = sliderStops.length - 1;
    const segmentSize = 100 / segmentCount;
    const segmentIndex = Math.min(Math.floor(value / segmentSize), segmentCount - 1);
    
    const prevStop = sliderStops[segmentIndex];
    const currStop = sliderStops[segmentIndex + 1];
    const segmentStart = segmentIndex * segmentSize;
    const ratio = (value - segmentStart) / segmentSize;
    return Math.max(2, Math.min(1000, Math.round(prevStop + ratio * (currStop - prevStop))));
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Team Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Headshots for Your Entire Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The more team members, the more you save. Slide to see your price.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-foreground">Team Size</span>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold text-primary">{teamSize}</span>
                    <span className="text-muted-foreground">people</span>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={getSliderValue(teamSize)}
                    onChange={(e) => setTeamSize(getSizeFromSlider(Number(e.target.value)))}
                    className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer slider-thumb"
                    style={{
                      background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${getSliderValue(teamSize)}%, #e2e8f0 ${getSliderValue(teamSize)}%, #e2e8f0 100%)`
                    }}
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    {sliderStops.map((stop) => (
                      <button
                        key={stop}
                        onClick={() => setTeamSize(stop)}
                        className={`hover:text-primary transition-colors ${teamSize === stop ? 'text-primary font-semibold' : ''}`}
                      >
                        {stop}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">{currentTier.name}</span>
                      {teamSize >= 51 && (
                        <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">Best Value</span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl font-bold text-foreground">${currentTier.pricePerPerson}</span>
                      <span className="text-muted-foreground">/person</span>
                    </div>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-primary/20">
                      <div>
                        <p className="text-2xl font-bold text-foreground">${totalPrice.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Total for {teamSize} people</p>
                      </div>
                      <div className="h-10 w-px bg-primary/20" />
                      <div>
                        <p className="text-2xl font-bold text-primary">{savingsPercent}% off</p>
                        <p className="text-sm text-muted-foreground">vs traditional photos</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-slate-400">Traditional photography</span>
                      <span className="text-slate-400 line-through">${traditionalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-medium">BetterPic</span>
                      <span className="text-white font-bold">${totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                      <span className="text-primary font-medium">You save</span>
                      <span className="text-primary font-bold text-xl">${savings.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4">What&apos;s included:</h4>
                  <ul className="space-y-3">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-slate-200 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-lg"
                >
                  Get Started - ${totalPrice.toLocaleString()}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 text-lg border-2 px-8"
                >
                  Book a Demo
                </Button>
              </div>
            </div>

            <div className="bg-slate-50 px-8 lg:px-12 py-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>2-hour delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Unlimited regenerations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need more than 1000 team members?</p>
            <Button variant="outline" className="rounded-full px-8 border-2">
              Contact Sales for Enterprise Pricing
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 4px solid hsl(var(--primary));
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          transition: transform 0.15s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        input[type="range"]::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 4px solid hsl(var(--primary));
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}

function GallerySection() {
  const images = [
    "1560250097-0b93528c311a",
    "1573496359142-b8d87734a5a2",
    "1472099645785-5658abf4ff4e",
    "1580489944761-15a19d654956",
    "1519345182560-3f2917c472ef",
    "1534528741775-53994a69daeb",
    "1507003211169-0a1dd7228f2d",
    "1438761681033-6461ffad8d80",
    "1500648767791-00dcc994a43e",
    "1494790108377-be9c29b29330",
    "1544005313-94ddf0286df2",
    "1506794778202-cad84cf45f1d",
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Gallery</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Results, Every Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our gallery of AI-generated corporate headshots
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((id, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden aspect-[3/4] relative group"
            >
              <Image
                src={`https://images.unsplash.com/photo-${id}?w=300&h=400&fit=crop&crop=face`}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-2"
          >
            View Full Gallery
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    {
      name: "Healthcare",
      icon: HeartHandshake,
      image: "1576091160399-112ba8d25d1d",
      description: "Patients trust doctors they can see. Professional headshots for your practice website, health directories, and patient portals help establish credibility before the first appointment.",
      features: [
        "HIPAA-compliant processing",
        "Consistent look across multi-location practices",
        "Perfect for hospital networks and group practices",
        "Match existing clinic branding",
      ],
    },
    {
      name: "Legal Professionals",
      icon: Briefcase,
      image: "1556157382-97eda2d62296",
      description: "First impressions matter in law. Professional headshots for your firm's website, attorney directories, and court profiles convey authority, trust, and expertise.",
      features: [
        "Formal, professional aesthetic",
        "Consistent branding for partner and associate photos",
        "Quick turnaround for new hires",
        "Perfect for law firm websites and legal directories",
      ],
    },
    {
      name: "Real Estate Agents",
      icon: Target,
      image: "1560518883-ce09059eeffa",
      description: "Your face is your brand. Professional headshots for listings, business cards, and social media help you stand out in a competitive market.",
      features: [
        "Multiple style variations for different platforms",
        "Optimized for MLS and property listings",
        "Social media-ready formats",
        "Annual updates included",
      ],
    },
    {
      name: "Corporate Teams",
      icon: Building2,
      image: "1497366216548-37526070297c",
      description: "Scale your team photography without the scheduling nightmare. From startups to Fortune 500 companies, maintain brand consistency across every office and every hire.",
      features: [
        "Onboard new hires in hours, not weeks",
        "Perfect consistency across global offices",
        "Bulk pricing for large teams",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section className="pt-16 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Industries</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted Across Industries
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${industry.image}?w=800&h=450&fit=crop`}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <industry.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We onboarded 150 new hires last quarter. BetterPic made sure everyone had matching, professional headshots from day one. The quality is indistinguishable from traditional photography.",
      author: "Sarah Chen",
      role: "VP of People",
      company: "TechCorp",
      avatar: "1494790108377-be9c29b29330",
    },
    {
      quote:
        "Our remote team spans 12 countries. This was the only way to get consistent headshots without flying everyone to HQ. The turnaround time was incredible.",
      author: "Marcus Johnson",
      role: "HR Director",
      company: "GlobalScale",
      avatar: "1507003211169-0a1dd7228f2d",
    },
    {
      quote:
        "The quality exceeded our expectations. We replaced outdated photos for our entire executive team in one afternoon. Our board was impressed.",
      author: "Emily Rodriguez",
      role: "Brand Manager",
      company: "FinanceFirst",
      avatar: "1573497019940-1c28c88b4f3e",
    },
  ];

  return (
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                ))}
              </div>
              <span className="text-lg font-semibold">4.7 out of 5</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Trusted by 1,000+ Happy Customers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what HR and People Ops leaders say about transforming their team photos
            </p>
          </div>
            <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-[#00b67a] font-medium">Verified on Trustpilot</span>
                </div>
                <p className="text-foreground mb-6 text-lg leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={`https://images.unsplash.com/photo-${testimonial.avatar}?w=48&h=48&fit=crop&crop=face`}
                    alt=""
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-[#00b67a] font-medium hover:underline"
            >
              See all 1,000+ reviews on Trustpilot
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    );
}

function GetQuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    teamSize: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Thank you!</h2>
          <p className="text-slate-400 text-lg">
            We&apos;ve received your request and will get back to you within 24 hours with a tailored quote.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get a Quote
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Tell us about your team and we&apos;ll create a custom quote tailored to your needs. Most quotes delivered within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Fast Turnaround</h4>
                  <p className="text-slate-400 text-sm">Get your headshots delivered in as little as 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Teams of Any Size</h4>
                  <p className="text-slate-400 text-sm">From 5 to 5,000+ team members with volume discounts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Enterprise Security</h4>
                  <p className="text-slate-400 text-sm">SOC 2 compliant with GDPR-ready data handling</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-foreground mb-2">
                    Team Size *
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                  >
                    <option value="">Select team size</option>
                    <option value="2-10">2-10 people</option>
                    <option value="11-25">11-25 people</option>
                    <option value="26-50">26-50 people</option>
                    <option value="51-100">51-100 people</option>
                    <option value="101-250">101-250 people</option>
                    <option value="251-500">251-500 people</option>
                    <option value="500+">500+ people</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                  >
                    <option value="">Select project type</option>
                    <option value="team-headshots">Team Headshots</option>
                    <option value="executive-portraits">Executive Portraits</option>
                    <option value="linkedin-photos">LinkedIn Photos</option>
                    <option value="company-directory">Company Directory</option>
                    <option value="marketing-materials">Marketing Materials</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Any specific requirements, timeline, or questions..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-lg"
              >
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to get headshots for my team?",
      answer:
        "Most teams receive their professional headshots within 2-4 hours of uploading photos. For larger teams (100+ people), we can deliver within 24 hours.",
    },
    {
      question: "What photos do team members need to upload?",
      answer:
        "Each person uploads 10-15 recent photos from their phone. We recommend a mix of angles and lighting conditions. No professional photography required.",
    },
    {
      question: "Can we customize the background and style?",
      answer:
        "Yes! Choose from dozens of professional backgrounds or upload your own brand colors. You can also select different styles from corporate to creative.",
    },
    {
      question: "Is there a minimum team size?",
      answer:
        "Our team plans start at 5 people. For individuals, check out our personal headshot packages. For enterprise (500+ people), contact us for custom pricing.",
    },
    {
      question: "How do you handle data privacy and security?",
      answer:
        "We're SOC 2 compliant and GDPR ready. Photos are encrypted in transit and at rest, automatically deleted after 30 days, and never used to train our AI models.",
    },
    {
      question: "What if someone isn't happy with their headshots?",
      answer:
        "Team members can regenerate unlimited options until they're satisfied. If they're still not happy, we offer full refunds for individual dissatisfied users.",
    },
    {
      question: "Can new hires get matching headshots later?",
      answer:
        "Absolutely! Your team style settings are saved. New hires can generate headshots that perfectly match your existing team's look.",
    },
    {
      question: "Do you offer volume discounts?",
      answer:
        "Yes, we offer significant volume discounts for teams over 50 people. Contact our sales team for a custom quote tailored to your organization's needs.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about AI headshots for teams
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-border px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-violet-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Team&apos;s Image?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of companies who trust us for their professional headshots. 
          Get started in minutes with no commitment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-lg font-semibold"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg"
          >
            Book a Demo
          </Button>
        </div>
        <p className="text-white/70 mt-8 text-sm">
          No credit card required • Free consultation • Volume discounts available
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#pricing" },
      { name: "Gallery", href: "#gallery" },
      { name: "API", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Guides", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Security", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c4385161-7b8b-4b6d-975c-aacd4b046a85/betterpic_logo-1768994589325.jpeg?width=8000&height=8000&resize=contain"
                  alt="BetterPic"
                  width={100}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            <p className="text-muted-foreground text-sm mb-4">
              Professional AI headshots for modern teams. Fast, consistent, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 BetterPic. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center">
                    <Star className="w-2.5 h-2.5 text-white fill-white" />
                  </div>
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.7 on Trustpilot</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                SOC 2 Certified
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BadgeCheck className="w-4 h-4" />
                GDPR Compliant
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LogosSection />
        <ComplianceSection />
        <StatsSection />
        <TeamShowcaseSection />
        <BeforeAfterSection />
        <CaseStudiesSection />
        <IndustriesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <BenefitsSection />
        <PricingSection />
        <GallerySection />
        <TestimonialsSection />
        <GetQuoteSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
