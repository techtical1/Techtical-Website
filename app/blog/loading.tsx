import { Container } from "@/components/ui/container";
import { LatestInsightsSkeleton } from "@/components/common/latest-insights-skeleton";

export default function Loading() {
  return (
    <section className="bg-[#F7F7F2] py-24">
      <Container size="wide">
        <LatestInsightsSkeleton />
      </Container>
    </section>
  );
}