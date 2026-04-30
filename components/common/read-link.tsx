// components/common/read-link.tsx

import { ArrowRight } from "lucide-react";

export function ReadLink() {
  return (
    <span className="flex items-center gap-2 text-[16px] font-medium text-[#00895F]">
      Read <ArrowRight size={18} />
    </span>
  );
}