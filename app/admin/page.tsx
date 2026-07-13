import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  Image as ImageIcon,
  Film,
  FileText,
  DollarSign,
  MessageSquare,
  Users,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

const modules = [
  { icon: LayoutDashboard, title: "Dashboard", desc: "Overview & analytics", href: "/admin" },
  { icon: ImageIcon, title: "Galleries", desc: "Upload & manage portfolio", href: "/admin/galleries" },
  { icon: Film, title: "Films", desc: "Manage wedding films", href: "/admin/films" },
  { icon: FileText, title: "Blog", desc: "Create & edit posts", href: "/admin/blog" },
  { icon: DollarSign, title: "Pricing", desc: "Manage packages", href: "/admin/pricing" },
  { icon: MessageSquare, title: "Leads", desc: "Contact form submissions", href: "/admin/leads" },
  { icon: Users, title: "Testimonials", desc: "Manage client reviews", href: "/admin/testimonials" },
  { icon: Settings, title: "SEO", desc: "Meta & structured data", href: "/admin/seo" },
];

const stats = [
  { label: "Total Leads", value: "—" },
  { label: "Portfolio Items", value: "18" },
  { label: "Blog Posts", value: "4" },
  { label: "Wedding Films", value: "4" },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="mb-10">
          <h1 className="font-display text-4xl text-primary">Admin Dashboard</h1>
          <p className="mt-2 text-text-muted">
            Royal Studio content management. Connect Supabase or Payload CMS to enable
            full functionality.
          </p>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <p className="text-sm text-text-muted">{stat.label}</p>
                <p className="font-display text-3xl text-accent">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((mod) => (
            <Link key={mod.title} href={mod.href}>
              <Card className="h-full transition-shadow hover:shadow-premium-lg">
                <CardHeader>
                  <mod.icon className="text-accent" size={24} />
                  <CardTitle className="text-lg">{mod.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-muted">{mod.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>CMS Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-text-muted">
            <p>
              See <code className="text-accent">supabase/schema.sql</code> for database
              schema. Set environment variables in <code className="text-accent">.env.local</code>:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>NEXT_PUBLIC_SUPABASE_URL</li>
              <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
              <li>SUPABASE_SERVICE_ROLE_KEY</li>
              <li>FORMSPREE_ENDPOINT (optional email forwarding)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
