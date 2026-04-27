export const heroEase = [0.22, 1, 0.36, 1] as const;

export function heroFade(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.64, delay, ease: heroEase },
  } as const;
}
