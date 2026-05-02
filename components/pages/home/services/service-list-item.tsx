import type { SanityServiceItem } from "@/lib/sanity.home";

type ServiceListItemProps = {
  service: SanityServiceItem;
  isActive: boolean;
  onClick: () => void;
};

export function ServiceListItem({
  service,
  isActive,
  onClick,
}: ServiceListItemProps) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center justify-between border-t border-[#E5E5E2] py-7 text-left transition"
    >
      <div className="flex min-w-0 gap-5">
        <span
          className={`text-[1.25rem] font-semibold transition sm:text-[1.5rem] ${
            isActive ? "text-[#262626]" : "text-[#9B9B9B]"
          }`}
        >
          ({service.index})
        </span>

        <div>
          <h3
            className={`text-[1.5rem] font-semibold leading-tight transition sm:text-[2rem] ${
              isActive ? "text-[#262626]" : "text-[#9B9B9B]"
            }`}
          >
            {service.title}
          </h3>

          <p
            className={`mt-2 text-[1rem] leading-normal transition sm:text-[1.25rem] ${
              isActive ? "text-[#656566]" : "text-[#B0B0B0]"
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>

      <span
        className={`ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white text-[#00E18E] shadow-sm transition ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        ›
      </span>
    </button>
  );
}
