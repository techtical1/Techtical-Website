import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { SanityServiceItem } from "@/lib/sanity.home";

type ServiceVisualProps = {
  activeService: SanityServiceItem;
};

export function ServiceVisual({ activeService }: ServiceVisualProps) {
  return (
<div className="relative h-full min-h-[28rem] w-full overflow-hidden rounded-[2rem] bg-[#F7F7F7] lg:min-h-0">      
    <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -24, scale: 0.98 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src={activeService.image}
            alt={activeService.imageAlt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
