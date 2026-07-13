import type { Metadata } from "next";
import {
  Camera,
  Film,
  Sparkles,
  Shirt,
  Building2,
  Package,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { detailedServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Royal Studio services — wedding photography, cinematic films, bridal editorials, fashion campaigns, corporate events, and product photography in Pakistan.",
};

const iconMap: Record<string, LucideIcon> = {
  camera: Camera,
  film: Film,
  sparkles: Sparkles,
  shirt: Shirt,
  building: Building2,
  package: Package,
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Services"
        description="Comprehensive luxury photography and filmmaking for weddings, brands, and events."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl space-y-24">
          {detailedServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.id} delay={i * 0.05}>
                <div id={service.id} className="scroll-mt-28">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="rounded-xl bg-accent/10 p-3 text-accent">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-display text-3xl text-primary md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="text-text-muted">{service.shortDescription}</p>
                    </div>
                  </div>

                  <p className="mb-8 max-w-3xl text-text-muted leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-[12px] border border-border bg-background p-6">
                      <h4 className="mb-3 font-display text-lg text-primary">Deliverables</h4>
                      <ul className="space-y-2 text-sm text-text-muted">
                        {service.deliverables.map((d) => (
                          <li key={d}>· {d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[12px] border border-border bg-background p-6">
                      <h4 className="mb-3 font-display text-lg text-primary">Process</h4>
                      <ul className="space-y-2 text-sm text-text-muted">
                        {service.process.map((p) => (
                          <li key={p}>· {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[12px] border border-border bg-background p-6">
                      <h4 className="mb-3 font-display text-lg text-primary">Equipment</h4>
                      <ul className="space-y-2 text-sm text-text-muted">
                        {service.equipment.map((e) => (
                          <li key={e}>· {e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {service.faq.length > 0 && (
                    <div className="mt-8 max-w-2xl">
                      <Accordion type="single" collapsible>
                        {service.faq.map((item, j) => (
                          <AccordionItem key={j} value={`${service.id}-${j}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </main>
  );
}
