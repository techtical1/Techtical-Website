import Link from "next/link";
import { footerLinks, socialLinks } from "./footer-data";
import { TechticalLogo } from "@/components/brand/techtical-logo";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";

export function FooterSection() {
  return (
    <footer className="bg-[#FAFAF8] px-4 pt-10 sm:px-6">
      <div className="mx-auto overflow-hidden rounded-t-[2rem] bg-[linear-gradient(180deg,#005E3C_0%,#008755_100%)] px-8 py-12 text-white sm:px-12 lg:px-20 lg:py-16">
        <div className="mx-auto w-full max-w-[90rem]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.7fr_0.9fr_0.8fr]">
            <div>
              <TechticalLogo variant="light" type="logo" size="md" priority />

              <h2 className="mt-14 text-[1.5rem] leading-tight font-semibold">
                Start With Clarity
              </h2>

              <p className="mt-5 max-w-[23rem] text-[1rem] leading-7 text-white/70">
                Have a product idea or something not working? let&apos;s figure it out together
              </p>

              <div className="mt-8">
                <StrategyCallButton variant="secondary" href="#contact">
                  Book A Free Call
                </StrategyCallButton>
              </div>
            </div>

            <FooterColumn title="Explore" links={footerLinks.explore} />

            <FooterColumn title="What We Do" links={footerLinks.whatWeDo} />

            <div>
              <h3 className="text-[0.95rem] font-semibold text-white">Connect</h3>

              <a
                href="mailto:hello@techtical.com"
                className="mt-7 block text-[1rem] text-white/70 transition hover:text-white"
              >
                hello@techtical.com
              </a>

              <div className="mt-6 flex flex-wrap gap-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[1rem] font-semibold text-white transition hover:bg-white hover:text-[#007E5B]"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="my-14 border-t border-dashed border-white/25" />

          <div className="flex flex-col gap-5 text-[1rem] text-white sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Techtical Solution. All Rights Reserved</p>

            <div className="flex gap-2">
              <Link href="#" className="transition hover:text-white/70">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="#" className="transition hover:text-white/70">
                Terms Of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-[0.95rem] font-semibold text-white">{title}</h3>

      <ul className="mt-7 space-y-5">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="text-[1rem] text-white/70 transition hover:text-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
