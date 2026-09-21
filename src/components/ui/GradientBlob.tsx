import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
}

export default function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-20 pointer-events-none",
        className
      )}
      aria-hidden="true"
    />
  );
}
