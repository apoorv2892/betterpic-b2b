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
} from "lucide-react";
import Image from "next/image";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">BetterPic</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Log in
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get team headshots
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Powered Team Headshots
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Professional headshots for your entire team
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              Get studio-quality AI headshots for every team member in minutes, not weeks. Perfect for remote teams, company directories, and LinkedIn profiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg"
              >
                Get team headshots
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-lg border-2"
              >
                Book a demo
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
                <span className="font-semibold text-foreground">10,000+</span>
                <span className="text-muted-foreground"> teams trust us</span>
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

function LogosSection() {
  const logos = [
    "Stripe",
    "Notion",
    "Figma",
    "Linear",
    "Vercel",
    "Shopify",
    "Slack",
    "Discord",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border/50 bg-slate-50/50">
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

function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload photos",
      description:
        "Each team member uploads 10-15 casual photos from their phone. No professional equipment needed.",
    },
    {
      icon: Sparkles,
      number: "02",
      title: "AI creates headshots",
      description:
        "Our AI generates multiple professional headshot options for each person in your selected style.",
    },
    {
      icon: Layers,
      number: "03",
      title: "Review & select",
      description:
        "Team members pick their favorites from the generated options. Make unlimited regenerations.",
    },
    {
      icon: Download,
      number: "04",
      title: "Download & use",
      description:
        "Get high-resolution headshots ready for LinkedIn, company websites, and internal directories.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How it works
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
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Save weeks of time",
      description:
        "No more scheduling conflicts or coordinating photographers. Get headshots for 100+ people in a single day.",
    },
    {
      icon: Users,
      title: "Perfect for remote teams",
      description:
        "Team members can upload photos from anywhere in the world. No need to fly everyone to one location.",
    },
    {
      icon: Zap,
      title: "Consistent brand look",
      description:
        "Every headshot matches your brand guidelines with uniform backgrounds, lighting, and style.",
    },
    {
      icon: Shield,
      title: "Enterprise security",
      description:
        "SOC 2 compliant with data encryption. Photos are processed securely and never used for training.",
    },
    {
      icon: Building2,
      title: "Scale with your team",
      description:
        "Onboard new hires with matching headshots instantly. No need to wait for the next photo day.",
    },
    {
      icon: Globe,
      title: "Works globally",
      description:
        "Support for diverse skin tones and appearances. Professional results for everyone on your team.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why teams choose AI headshots
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

function ExamplesSection() {
  const categories = [
    { name: "Tech Companies", count: "500+" },
    { name: "Finance & Legal", count: "200+" },
    { name: "Healthcare", count: "150+" },
    { name: "Real Estate", count: "300+" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Headshots for every industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by teams across tech, finance, healthcare, and more
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-4 gap-2">
            {[
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
            ].map((id, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${id}?w=150&h=150&fit=crop&crop=face`}
                  alt=""
                  width={150}
                  height={150}
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-white rounded-2xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">
                    {category.name}
                  </span>
                </div>
                <span className="text-primary font-bold">{category.count} teams</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We onboarded 150 new hires last quarter. BetterPic made sure everyone had matching, professional headshots from day one.",
      author: "Sarah Chen",
      role: "VP of People, TechCorp",
      avatar: "1494790108377-be9c29b29330",
    },
    {
      quote:
        "Our remote team spans 12 countries. This was the only way to get consistent headshots without flying everyone to HQ.",
      author: "Marcus Johnson",
      role: "HR Director, GlobalScale",
      avatar: "1507003211169-0a1dd7228f2d",
    },
    {
      quote:
        "The quality exceeded our expectations. We replaced outdated photos for our entire executive team in one afternoon.",
      author: "Emily Rodriguez",
      role: "Brand Manager, FinanceFirst",
      avatar: "1573497019940-1c28c88b4f3e",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by People teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why HR and People Ops leaders choose AI headshots
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
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
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
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently asked questions
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-emerald-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to upgrade your team&apos;s headshots?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of companies who trust AI headshots for their professional image.
          Get started in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-lg font-semibold"
          >
            Get team headshots
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg"
          >
            Book a demo
          </Button>
        </div>
        <p className="text-white/70 mt-8 text-sm">
          No credit card required • Free trial for teams up to 5 people
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">BetterPic</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 BetterPic. All rights reserved.
          </p>
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
        <HowItWorksSection />
        <BenefitsSection />
        <ExamplesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
