import { ArvantoLogoMark } from "@/components/common/ArvantoLogoMark";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#f7fbfd] text-dark dark:bg-[#070b12] dark:text-white"
      role="status"
      aria-label="Loading Arvanto"
    >
      <div className="arvanto-loader-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-skyblue/10 blur-3xl dark:bg-skyblue/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-48 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl dark:bg-primary/10" aria-hidden="true" />

      <div className="relative flex w-full max-w-xl flex-col items-center px-6 text-center">
        <div className="relative mb-9 flex h-32 w-32 items-center justify-center">
          <div className="arvanto-loader-orbit absolute inset-0 rounded-full border border-skyblue/20 dark:border-skyblue/30" aria-hidden="true">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(7,190,138,0.8)]" />
          </div>
          <div className="arvanto-loader-orbit arvanto-loader-orbit-reverse absolute inset-3 rounded-full border border-dashed border-primary/30" aria-hidden="true">
            <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-skyblue shadow-[0_0_14px_rgba(2,132,199,0.8)]" />
          </div>
          <div className="arvanto-loader-glow relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-skyblue to-primary shadow-[0_14px_50px_rgba(2,132,199,0.28)]">
            <ArvantoLogoMark variant="white" size={48} />
          </div>
        </div>

        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-primary">
          Intelligence in motion
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Turning complexity
          <span className="mt-1 block bg-gradient-to-r from-skyblue to-primary bg-clip-text text-transparent">
            into clarity.
          </span>
        </h1>
        <p className="mt-4 text-sm text-dark/55 dark:text-white/50">
          Preparing your Arvanto experience
        </p>

        <div
          className="arvanto-loader-progress mt-9 h-1 w-40 overflow-hidden rounded-full bg-dark/10 dark:bg-white/10"
          aria-hidden="true"
        >
          <span className="block h-full w-2/5 rounded-full bg-gradient-to-r from-skyblue to-primary" />
        </div>
        <span className="sr-only">Loading content</span>
      </div>

      <div className="absolute bottom-7 left-0 right-0 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-dark/35 dark:text-white/30">
        <span className="h-1 w-1 rounded-full bg-primary" />
        Strategy <span className="text-primary/50">·</span> Intelligence{" "}
        <span className="text-primary/50">·</span> Transformation
      </div>
    </div>
  );
}
