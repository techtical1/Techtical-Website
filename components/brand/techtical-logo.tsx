import { cn } from "@/lib/utils";

export function TechticalMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-9 w-9", className)}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 25.2 26.9 6.3l5.2 5.2-13.7 13.7h21.8L21.3 44.1l-5.2-5.2 13.7-13.7H8Z" fill="#111111" />
      <path d="M22.5 21.6 30.8 13.4 42 24.6H27.6l-5.1-3Z" fill="#05BF83" />
    </svg>
  );
}
