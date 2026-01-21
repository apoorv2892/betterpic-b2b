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
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">BetterPic</span>
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
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Powered Corporate Headshots
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Professional Corporate Headshots for Your Team
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              Get studio-quality AI headshots for your entire organization. Perfect for company directories, LinkedIn profiles, and professional branding.
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
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden"
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        [
                          "1494790108377-be9c29b29330",
                          "1507003211169-0a1dd7228f2d",
                          "1573497019940-1c28c88b4f3e",
                          "1500648767791-00dcc994a43e",
                          "1438761681033-6461ffad8d80",
                        ][i - 1]
                      }?w=80&h=80&fit=crop&crop=face`}
                      alt=""
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">Trusted by 10,000+ companies</span>
              </div>
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
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Apple",
    "Netflix",
    "Salesforce",
    "Adobe",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border/50 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by leading companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-xl font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState("real-estate");
  
  const categories = [
    { id: "real-estate", label: "Real Estate" },
    { id: "professionals", label: "Professionals" },
    { id: "doctors", label: "Doctors" },
    { id: "lawyers", label: "Lawyers" },
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
    "doctors": [
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
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-12">
          {categoryImages[activeCategory].map((id, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className="rounded-2xl overflow-hidden aspect-[3/4] relative group shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={`https://images.unsplash.com/photo-${id}?w=200&h=267&fit=crop&crop=face`}
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
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
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

function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "TechCorp",
      industry: "Technology",
      employees: "500+",
      result: "Reduced headshot costs by 80%",
      quote: "BetterPic transformed how we handle employee photos. What used to take weeks now takes hours.",
      author: "Sarah Chen",
      role: "VP of People Operations",
      avatar: "1494790108377-be9c29b29330",
      logo: "T",
      color: "bg-blue-500",
    },
    {
      company: "GlobalFinance",
      industry: "Financial Services",
      employees: "2,000+",
      result: "100% brand consistency achieved",
      quote: "Every employee now has a professional headshot that matches our brand guidelines perfectly.",
      author: "James Wilson",
      role: "Chief Marketing Officer",
      avatar: "1472099645785-5658abf4ff4e",
      logo: "G",
      color: "bg-emerald-500",
    },
    {
      company: "HealthFirst",
      industry: "Healthcare",
      employees: "1,200+",
      result: "Saved 3 months of coordination",
      quote: "With staff across 50 locations, traditional photography was impossible. BetterPic made it seamless.",
      author: "Dr. Emily Rodriguez",
      role: "Director of HR",
      avatar: "1573497019940-1c28c88b4f3e",
      logo: "H",
      color: "bg-rose-500",
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Case Studies</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success Stories from Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how organizations are transforming their team photos with AI
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${study.color} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                  {study.logo}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{study.company}</h3>
                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Employees</span>
                  <span className="font-medium text-foreground">{study.employees}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Result</span>
                  <span className="font-medium text-primary">{study.result}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 italic">
                &ldquo;{study.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Image
                  src={`https://images.unsplash.com/photo-${study.avatar}?w=40&h=40&fit=crop&crop=face`}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground text-sm">{study.author}</p>
                  <p className="text-xs text-muted-foreground">{study.role}</p>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-6 group-hover:gap-3 transition-all"
              >
                Read full case study
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-2"
          >
            View All Case Studies
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
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
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");
  
  const plans = [
    {
      name: "Individual",
      description: "Perfect for trying out AI headshots",
      monthlyPrice: "29",
      annualPrice: "29",
      oneTime: true,
      features: [
        "1 person",
        "40+ AI headshots",
        "4K resolution",
        "10 backgrounds",
        "Delivered in 2 hours",
        "Commercial license",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Team",
      description: "Best value for small teams",
      monthlyPrice: "25",
      annualPrice: "19",
      perPerson: true,
      features: [
        "5-50 team members",
        "120+ AI headshots per person",
        "4K resolution",
        "25 backgrounds",
        "Brand colors & custom backgrounds",
        "Team admin dashboard",
        "Priority support",
        "Bulk download",
      ],
      cta: "Get a Quote",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        "50+ team members",
        "Unlimited AI headshots",
        "4K+ resolution",
        "Unlimited backgrounds",
        "Custom brand guidelines",
        "SSO & API access",
        "Dedicated account manager",
        "SLA guarantee",
        "Invoice billing",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Invest in Your Team&apos;s Professional Image
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Save up to 90% compared to traditional photography. No hidden fees.
          </p>
          <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "annual"
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-primary font-semibold">Save 24%</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular
                  ? "border-primary shadow-xl ring-2 ring-primary/20"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.monthlyPrice !== "Custom" && (
                    <span className="text-lg text-muted-foreground">$</span>
                  )}
                  <span className="text-5xl font-bold text-foreground">
                    {billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice !== "Custom" && (
                    <span className="text-muted-foreground ml-1">
                      {plan.oneTime ? "one-time" : plan.perPerson ? "/person" : "/mo"}
                    </span>
                  )}
                </div>
                {plan.perPerson && billingPeriod === "annual" && (
                  <p className="text-sm text-primary mt-1">Billed annually</p>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full h-12 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Not sure which plan is right for you?
              </h3>
              <p className="text-slate-400 mb-6">
                Our team will help you find the perfect solution for your organization. Get a personalized quote in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 rounded-full px-8">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 rounded-2xl p-6">
                <p className="text-3xl font-bold text-white mb-1">90%</p>
                <p className="text-slate-400 text-sm">Cost savings vs traditional photography</p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6">
                <p className="text-3xl font-bold text-white mb-1">2hrs</p>
                <p className="text-slate-400 text-sm">Average delivery time</p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6">
                <p className="text-3xl font-bold text-white mb-1">100%</p>
                <p className="text-slate-400 text-sm">Satisfaction guarantee</p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6">
                <p className="text-3xl font-bold text-white mb-1">24/7</p>
                <p className="text-slate-400 text-sm">Priority support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    { name: "Technology", icon: Zap, count: "2,500+" },
    { name: "Finance & Banking", icon: Building2, count: "1,200+" },
    { name: "Healthcare", icon: HeartHandshake, count: "800+" },
    { name: "Legal Services", icon: Briefcase, count: "600+" },
    { name: "Real Estate", icon: Target, count: "950+" },
    { name: "Consulting", icon: Users, count: "1,100+" },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Industries</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to Fortune 500 companies, teams across every industry trust us
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{industry.name}</h3>
                <p className="text-sm text-primary font-medium">{industry.count} companies</p>
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
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from HR and People Ops leaders who transformed their team photos
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
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
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-emerald-600">
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
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">BetterPic</span>
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
          <div className="flex items-center gap-6">
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
        <ComplianceSection />
        <StatsSection />
        <LogosSection />
        <TeamShowcaseSection />
        <BeforeAfterSection />
        <CaseStudiesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <BenefitsSection />
        <PricingSection />
        <GallerySection />
        <IndustriesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
