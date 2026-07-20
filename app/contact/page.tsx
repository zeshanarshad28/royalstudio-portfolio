import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import InquiryForm from "@/components/forms/InquiryForm";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Royal Studio for luxury wedding photography in Burewala, Pakistan. Call 03084877073 or send a wedding inquiry.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="Check availability for your wedding date. We'd love to hear about your celebration."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="font-display text-3xl text-primary">Get in Touch</h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                Ready to book Royal Studio for your wedding? Fill out the inquiry form
                or reach us directly via phone, WhatsApp, or email.
              </p>

              <ul className="mt-8 space-y-4">
                {siteConfig.phones.map((phone) => (
                  <li key={phone} className="flex items-center gap-3 text-text-muted">
                    <Phone size={18} className="shrink-0 text-accent" />
                    <a href={`tel:${phone}`} className="hover:text-accent">
                      {phone}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3 text-text-muted">
                  <Mail size={18} className="shrink-0 text-accent" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-text-muted">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{siteConfig.address.full}</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppButton />
                {siteConfig.phones.map((phone) => (
                  <Button key={phone} asChild variant="outline">
                    <Link href={`tel:${phone}`}>
                      <Phone size={16} />
                      Call {phone}
                    </Link>
                  </Button>
                ))}
              </div>

              <div className="mt-10 overflow-hidden rounded-[12px] border border-border shadow-premium">
                <iframe
                  src="https://maps.google.com/maps?q=Royal+Studio,+Al+Jannat+Town+Entrance,+Canal+Road,+Burewala,+Pakistan&z=16&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Studio Location"
                />
                <div className="p-4 text-center">
                  <a
                    href={siteConfig.social.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-[12px] border border-border bg-background p-8 shadow-premium">
                <h3 className="mb-6 font-display text-2xl text-primary">
                  Wedding Inquiry Form
                </h3>
                <InquiryForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
