import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import Logo from "./Logo";

const socials = [
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-padding pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Logo variant="footer" className="mb-6" />
              <p className="text-sm leading-relaxed text-text-muted">
                Luxury wedding photography and cinematic filmmaking across
                Pakistan since {siteConfig.established}.
              </p>
              <div className="mt-6 flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-muted transition-all hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-display text-lg text-primary">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-display text-lg text-primary">Contact</h4>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="block hover:text-accent"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="shrink-0 text-accent" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{siteConfig.address.full}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-display text-lg text-primary">Cities Served</h4>
              <ul className="flex flex-wrap gap-2">
                {siteConfig.citiesServed.slice(0, 8).map((city) => (
                  <li
                    key={city}
                    className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:px-12 md:text-left">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Founded by{" "}
            {siteConfig.founders.join(" & ")}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Wedding Photographer Burewala · Luxury Wedding Photography Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
