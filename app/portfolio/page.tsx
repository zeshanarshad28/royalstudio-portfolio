import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Royal Studio's luxury wedding photography portfolio — Nikah, Mehndi, Barat, Walima, bridal portraits, fashion, and corporate work across Pakistan.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader
        title="Portfolio"
        description="A curated collection of weddings, celebrations, and editorial work from across Pakistan."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ]}
      />
      <PortfolioGrid showHeading={false} showViewAll={false} />
    </main>
  );
}
