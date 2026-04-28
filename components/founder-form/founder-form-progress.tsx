type FounderFormProgressProps = {
  label: string;
};

export function FounderFormProgress({ label }: FounderFormProgressProps) {
  const [current, total] = label.split("/").map(Number);
  const progress = Math.max(0, Math.min(100, (current / total) * 100));

  return (
    <div className="flex items-center gap-3">
      <div
        className="h-6 w-6 rounded-full"
        style={{
          background: `conic-gradient(#00E18E ${progress}%, rgba(255,255,255,0.18) ${progress}%)`,
        }}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <div className="h-[18px] w-[18px] rounded-full bg-[#141519]" />
        </div>
      </div>

      <span className="text-[15px] text-white/70">{label}</span>
    </div>
  );
}