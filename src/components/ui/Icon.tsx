import type { SVGProps } from "react";

export type IconName =
  | "arrowUpRight"
  | "download"
  | "mail"
  | "github"
  | "linkedin"
  | "location"
  | "phone"
  | "menu"
  | "close"
  | "code"
  | "layers"
  | "cloud"
  | "integration"
  | "realtime"
  | "leadership"
  | "check"
  | "calendar";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export default function Icon({ name, ...props }: IconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "arrowUpRight":
      return <svg {...commonProps}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>;
    case "download":
      return <svg {...commonProps}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>;
    case "mail":
      return <svg {...commonProps}><rect width="18" height="14" x="3" y="5" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "github":
      return <svg {...commonProps}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></svg>;
    case "linkedin":
      return <svg {...commonProps}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
    case "location":
      return <svg {...commonProps}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "phone":
      return <svg {...commonProps}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92Z" /></svg>;
    case "menu":
      return <svg {...commonProps}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>;
    case "close":
      return <svg {...commonProps}><path d="m18 6-12 12" /><path d="m6 6 12 12" /></svg>;
    case "code":
      return <svg {...commonProps}><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></svg>;
    case "layers":
      return <svg {...commonProps}><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></svg>;
    case "cloud":
      return <svg {...commonProps}><path d="M17.5 19H6a4 4 0 0 1-.5-8 6.5 6.5 0 0 1 12.4-2A5 5 0 0 1 17.5 19Z" /></svg>;
    case "integration":
      return <svg {...commonProps}><circle cx="6" cy="12" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="m8.7 10.7 6.6-3.4" /><path d="m8.7 13.3 6.6 3.4" /></svg>;
    case "realtime":
      return <svg {...commonProps}><path d="M3 12h3l2-6 4 12 2-6h7" /></svg>;
    case "leadership":
      return <svg {...commonProps}><circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /><path d="m18 8 2 2 3-4" /></svg>;
    case "check":
      return <svg {...commonProps}><path d="m5 12 4 4L19 6" /></svg>;
    case "calendar":
      return <svg {...commonProps}><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></svg>;
  }
}
