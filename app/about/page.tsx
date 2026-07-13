import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { aboutHighlights, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about Royal Studio — luxury wedding photography in Burewala, Pakistan. Founded in ${siteConfig.established} by ${siteConfig.founders.join(" & ")}. 3000+ weddings documented.`,
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="Our Story"
        description="Luxury wedding photography and cinematic filmmaking — preserving emotions, traditions, and unforgettable memories since 2018."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <SectionHeading
                align="left"
                label="Royal Studio"
                title="Crafting Timeless Visual Legacies"
              />
              <div className="space-y-5 text-text-muted leading-relaxed">
                <p>
                  Royal Studio is a luxury wedding photography and cinematic filmmaking
                  company founded in {siteConfig.established} by{" "}
                  {siteConfig.founders.join(" and ")}. Based in Burewala, Pakistan,
                  we specialize in creating timeless visual stories that preserve
                  emotions, traditions, and unforgettable memories.
                </p>
                <p>
                  Our experienced team of 10–15 professionals has documented more than
                  3000 weddings across Pakistan — from intimate Nikah ceremonies to
                  grand multi-day celebrations spanning Mehndi, Barat, and Walima.
                </p>
                <p>
                  We serve couples in Burewala, Vehari, Multan, Sahiwal, Faisalabad,
                  Lahore, Bahawalnagar, Bahawalpur, Islamabad, and destination weddings
                  across the country.
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                    <Check size={16} className="shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] shadow-premium-lg">
                <Image
                  src="https://images.unsplash.com/photo-1493863641943-9b67192fddc6?w=800&q=80"
                  alt="Royal Studio team at work"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-24">
            <SectionHeading
              label="Founders"
              title="Meet the Visionaries"
              description="The creative force behind 3000+ weddings and countless cinematic love stories."
            />
            <div className="grid gap-8 md:grid-cols-2">
              {siteConfig.founders.map((founder) => (
                <div
                  key={founder}
                  className="rounded-[12px] border border-border bg-background p-8 text-center shadow-premium"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 font-display text-2xl text-accent">
                    {founder.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-display text-2xl text-primary">{founder}</h3>
                  <p className="mt-1 text-sm text-accent">Co-Founder</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
