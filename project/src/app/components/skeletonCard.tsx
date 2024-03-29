import clsx from "clsx";

export function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
  return (
    <article
      className={clsx(
        "flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300",
        {
          "relative overflow-hidden before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite]":
            isLoading,
        }
      )}
    >
      <header className="relative max-h-72 flex-1 bg-zinc-700" />
      <main className="flex justify-between font-bold my-3 bg-zinc-700" />
      <button className="h-3 w-8/12 rounded-md bg-zinc-700" />
    </article>
  );
}
