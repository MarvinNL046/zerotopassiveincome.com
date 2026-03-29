import { ExternalLink } from "lucide-react";

interface AffiliateCTAProps {
  toolName: string;
  href: string;
  label?: string;
  subtext?: string;
  variant?: "primary" | "gold" | "outline";
}

export default function AffiliateCTA({
  toolName,
  href,
  label,
  subtext,
  variant = "primary",
}: AffiliateCTAProps) {
  const btnClass =
    variant === "gold"
      ? "btn-gold"
      : variant === "outline"
      ? "btn-secondary"
      : "btn-primary";

  return (
    <div className="flex flex-col items-center gap-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={btnClass}
      >
        {label ?? `Try ${toolName} Free`}
        <ExternalLink className="h-4 w-4" />
      </a>
      {subtext && (
        <p className="text-xs text-gray-400">{subtext}</p>
      )}
      <p className="text-xs text-gray-400">
        * We may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}
