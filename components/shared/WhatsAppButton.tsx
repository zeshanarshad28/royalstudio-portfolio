"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton({ className }: { className?: string }) {
  const url = `https://wa.me/92${siteConfig.whatsapp.replace(/^0/, "")}?text=${encodeURIComponent("Hi Royal Studio, I'd like to inquire about wedding photography.")}`;

  return (
    <Button asChild variant="whatsapp" className={className}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} />
        WhatsApp Us
      </Link>
    </Button>
  );
}
