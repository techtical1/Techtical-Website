// components/common/latest-insights-skeleton.tsx

import { BlogCardSkeleton } from "./blog-card-skeleton";

export function LatestInsightsSkeleton() {
  return (
    <div>
      <div className="mx-auto mb-14 h-12 w-72 animate-pulse rounded-full bg-black/10" />

      <div className="grid animate-pulse gap-8 rounded-[28px] border border-black/10 bg-white p-6 md:grid-cols-[420px_1fr]">
        <div className="h-[260px] rounded-[18px] bg-black/10" />
        <div className="flex flex-col justify-center">
          <div className="h-8 w-28 rounded-full bg-black/10" />
          <div className="mt-5 h-8 w-[70%] rounded-full bg-black/10" />
          <div className="mt-4 h-5 w-full rounded-full bg-black/10" />
          <div className="mt-2 h-5 w-[80%] rounded-full bg-black/10" />
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}