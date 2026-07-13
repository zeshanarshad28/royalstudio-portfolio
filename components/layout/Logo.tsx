import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "nav" | "footer";
  className?: string;
};

const config = {
  nav: { width: 200, height: 56, imgClass: "h-9 w-auto sm:h-10 md:h-11" },
  footer: { width: 220, height: 62, imgClass: "h-11 w-auto md:h-12" },
};

export default function Logo({ variant = "nav", className }: LogoProps) {
  const { width, height, imgClass } = config[variant];

  return (
    <Link
      href="/"
      className={cn(
        "inline-block shrink-0 overflow-hidden rounded-lg shadow-premium transition-transform duration-300 hover:scale-[1.02]",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="Royal Studio — We Capture Your Memories"
        width={width}
        height={height}
        className={imgClass}
        priority={variant === "nav"}
      />
    </Link>
  );
}
