"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { TechticalLogo } from "@/components/brand/techtical-logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.48, ease }}
    >
      <div className="container-page pt-4">
        <nav
          aria-label="Main navigation"
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300",
            scrolled
              ? "border-black/10 bg-white/88 shadow-[0_18px_50px_-36px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              : "border-transparent bg-white/45 backdrop-blur-md",
          )}
        >
          <Link href="/" aria-label="Techtical Solution home" className="shrink-0">
            <TechticalLogo className="scale-[0.72] origin-left sm:scale-[0.78]" />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-[#5f5f5f] transition hover:bg-black/[0.04] hover:text-[#202020]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              className="hidden h-10 items-center gap-2 rounded-full bg-[#202020] px-5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition hover:bg-[#05bf83] lg:inline-flex"
            >
              Book a call
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#202020] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease }}
              className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)] lg:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex rounded-2xl px-4 py-3 text-base font-semibold text-[#4f4f4f] hover:bg-[#f3f3f2] hover:text-[#202020]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#05bf83] px-4 py-3 text-base font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Book a free strategy call
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
