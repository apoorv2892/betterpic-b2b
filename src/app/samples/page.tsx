"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SamplesPage() {
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
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/fred_real_estate_n2-1769162091358.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ricardo_real_estate_n4-1769162091427.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hertok_real_estate_n4-1769162091363.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/apoorv_real_estate_n3-1769162091432.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/allison_real_estate_n3-1769162163845.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/carla_real_estate_n4-1769162163847.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/fedor_real_estate_n4-1769162163850.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/miriam_real_estate_n3-1769162163884.jpg?width=8000&height=8000&resize=contain",
    ],
    "professionals": [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/03-1769166629916.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pro4-1769166629915.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pro5-1769166629920.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pro6-1769166629952.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pro7-1769166629955.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pro8-1769166629917.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pro9-1769166629976.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/thibaut_real_estate_n5-1769166629975.jpg?width=8000&height=8000&resize=contain",
    ],
    "healthcare": [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Healthcare-2-1769164976244.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/healthcare_04-1769164976606.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/healthcare_1-1769164976246.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/healtcare-07-1769164976243.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/carla_doctor_n1-1769165081559.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/fedor_doctor_n3-1769165081553.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/johanna_doctor_n4-1769165234576.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/fred_doctor_n2-1769165245662.jpg?width=8000&height=8000&resize=contain",
    ],
    "lawyers": [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/allison_law_n3-1769161562224.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/carla_law_n4-1769161562233.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/fred_law_n3-1769161562346.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ricardo_law_n1-1769161562237.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/apoorv_law_n3-1769161609838.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/fedor_law_n1-1769161609835.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/khoung_law_n1-1769161609839.jpg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/thibaut_law_n3-1769161609836.jpg?width=8000&height=8000&resize=contain",
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
    <div className="min-h-screen bg-background">
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
            
            <Link href="/">
              <Button variant="ghost" className="text-sm font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 lg:pt-32 pb-20">
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sample Gallery
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Browse professional AI-generated headshots across different industries. 
              See how teams trust BetterPic for consistent, high-quality results.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Studio Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">2 Hour Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">100% Brand Consistency</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
              {categoryImages[activeCategory].map((id, i) => {
                const isFullUrl = id.startsWith('http');
                return (
                  <div
                    key={`${activeCategory}-${i}`}
                    className="rounded-2xl overflow-hidden aspect-[3/4] relative group shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <Image
                      src={isFullUrl ? id : `https://images.unsplash.com/photo-${id}?w=600&h=800&fit=crop&crop=face`}
                      alt={`${categories.find(c => c.id === activeCategory)?.label} sample ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Download className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-primary to-violet-600 rounded-3xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of teams who trust BetterPic for professional headshots.
                Get your quote in minutes.
              </p>
              <Link href="/#pricing">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-semibold"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 BetterPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
