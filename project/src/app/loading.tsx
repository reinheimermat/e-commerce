import { SkeletonCard } from "./components/skeletonCard";

export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        <SkeletonCard isLoading />
      </article>
    </section>
  );
}
