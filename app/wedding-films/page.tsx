import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { weddingFilms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Wedding Films",
  description:
    "Cinematic wedding films by Royal Studio — luxury filmmaking across Pakistan. Feature-length and highlight films with drone coverage.",
};

export default function WeddingFilmsPage() {
  return (
    <main>
      <PageHeader
        title="Wedding Films"
        description="Cinematic storytelling that preserves the music, vows, and emotions of your celebration."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Wedding Films", url: "/wedding-films" },
        ]}
      />

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {weddingFilms.map((film, i) => (
              <AnimatedSection key={film.id} delay={i * 0.08}>
                <div className="overflow-hidden rounded-[12px] border border-border shadow-premium">
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${film.youtubeId}?rel=0`}
                      title={film.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-primary">{film.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {film.location} · {film.duration}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
