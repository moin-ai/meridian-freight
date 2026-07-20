import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

/**
 * Live Google Material Symbols icon (loaded via the stylesheet in layout.tsx).
 * Usage: <Icon name="local_shipping" /> · <Icon name="verified" fill />
 */
export function Icon({
  name,
  className,
  fill,
  size,
  weight,
}: {
  name: string;
  className?: string;
  fill?: boolean;
  size?: number;
  weight?: number;
}) {
  const style: CSSProperties = {};
  if (size) style.fontSize = `${size}px`;
  if (weight) style.fontVariationSettings = `'wght' ${weight}`;
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols-outlined", fill && "fill", className)}
      style={style}
    >
      {name}
    </span>
  );
}
