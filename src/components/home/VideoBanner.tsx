import Link from "next/link";

export function VideoBanner() {
  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="relative rounded-t-2xl overflow-hidden">
          <video
            className="w-full absolute top-0 left-0 object-cover -z-10 h-full brightness-50"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Background video showing digital transformation"
          >
            <source
              src="https://videos.pexels.com/video-files/7233782/7233782-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="bg-black/50 lg:py-48 md:py-28 py-16">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-white lg:text-52 md:text-40 text-3xl max-w-3/4 text-center font-medium leading-tight">
                Enter a realm where bold strategy and artificial intelligence unite.
              </h2>
              <Link
                className="bg-white py-4 px-8 rounded-full text-dark hover:bg-primary hover:text-white duration-300 font-semibold transition"
                href="/contactus"
              >
                Discuss Your Challenge
              </Link>
            </div>
          </div>
        </div>

        {/* Marquee Banner */}
        <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
          <div className="flex items-center gap-40 animate-slide">
            <p className="text-white font-semibold uppercase text-sm tracking-widest whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-2.5 after:-right-32">
              STRATEGY & GROWTH — TURNING COMPLEXITY INTO OPPORTUNITY!
            </p>
            <p className="text-white font-semibold uppercase text-sm tracking-widest whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-2.5 after:-right-32">
              COMBINING DATA, AI & QUANTITATIVE INTELLIGENCE FOR SCALABLE VALUE!
            </p>
            <p className="text-white font-semibold uppercase text-sm tracking-widest whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-2.5 after:-right-32">
              GLOBAL BUSINESS TRANSFORMATION CONSULTANCY FOUNDED IN AFRICA!
            </p>
            <p className="text-white font-semibold uppercase text-sm tracking-widest whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-2.5 after:-right-32">
              STRATEGY & GROWTH — TURNING COMPLEXITY INTO OPPORTUNITY!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
