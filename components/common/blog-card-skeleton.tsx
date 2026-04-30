// components/common/blog-card-skeleton.tsx

export function BlogCardSkeleton() {
  return (
    <div className="animate-pulse rounded-[22px] border border-black/10 bg-white p-4">
      <div className="h-[180px] rounded-[16px] bg-black/10" />
      <div className="mt-4 h-5 w-[80%] rounded-full bg-black/10" />
      <div className="mt-3 h-4 w-full rounded-full bg-black/10" />
      <div className="mt-2 h-4 w-[70%] rounded-full bg-black/10" />
      <div className="mt-5 flex justify-between">
        <div className="h-8 w-32 rounded-full bg-black/10" />
        <div className="h-8 w-20 rounded-full bg-black/10" />
      </div>
    </div>
  );
}