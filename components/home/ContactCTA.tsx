import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <SectionHeading
            label="Get in Touch"
            title="Let's Capture Your Love Story"
            description="Check availability for your wedding date. We serve Burewala, Lahore, Multan, and weddings across Pakistan."
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Send Inquiry</Link>
            </Button>
            <WhatsAppButton />
            <Button asChild variant="outline" size="lg">
              <Link href={`tel:${siteConfig.phones[0]}`}>
                <Phone size={16} />
                Call {siteConfig.phones[0]}
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
