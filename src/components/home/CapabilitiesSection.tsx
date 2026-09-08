import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CAPABILITIES } from "@/data/capabilities";

export function CapabilitiesSection() {
  const cap1 = CAPABILITIES[0]; // Strategy & Growth (6 cols)
  const cap2 = CAPABILITIES[1]; // AI & Technology (6 cols)
  const cap3 = CAPABILITIES[2]; // Data & Intelligence (3 cols)
  const cap4 = CAPABILITIES[3]; // Risk & Performance (3 cols)

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          {/* Header Text (Col 6) */}
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex items-center gap-2.5">
              <Icon icon="ph:circles-three-plus-bold" className="text-2xl text-primary" />
              Core Capabilities
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Transforming businesses with integrated capabilities.
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              From high-yield corporate strategy and autonomous AI engines to balance-sheet stress testing and operating model transformation.
            </p>
            <Link
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300 transition"
              href="/services"
            >
              View All Capabilities
            </Link>
          </div>

          {/* Card 1: Strategy & Growth (Col 6) */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group h-[386px]">
              <Link href={`/services#${cap1.slug}`}>
                <Image
                  src={cap1.image}
                  alt={cap1.title}
                  width={680}
                  height={386}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <Link
                href={`/services#${cap1.slug}`}
                className="absolute w-full h-full bg-gradient-to-b from-black/20 via-black/40 to-black/90 top-full flex flex-col justify-between p-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                    {cap1.category}
                  </span>
                  <div className="bg-white text-dark rounded-full p-4 hover:bg-primary hover:text-white transition">
                    <Icon icon="ph:arrow-right-bold" className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl font-semibold">{cap1.title}</h3>
                  <p className="text-white/80 text-base leading-6">{cap1.description}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2: AI & Technology (Col 6) */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group h-[386px]">
              <Link href={`/services#${cap2.slug}`}>
                <Image
                  src={cap2.image}
                  alt={cap2.title}
                  width={680}
                  height={386}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <Link
                href={`/services#${cap2.slug}`}
                className="absolute w-full h-full bg-gradient-to-b from-black/20 via-black/40 to-black/90 top-full flex flex-col justify-between p-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                    {cap2.category}
                  </span>
                  <div className="bg-white text-dark rounded-full p-4 hover:bg-primary hover:text-white transition">
                    <Icon icon="ph:arrow-right-bold" className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl font-semibold">{cap2.title}</h3>
                  <p className="text-white/80 text-base leading-6">{cap2.description}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 3: Data & Decision Intelligence (Col 3) */}
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group h-[386px]">
              <Link href={`/services#${cap3.slug}`}>
                <Image
                  src={cap3.image}
                  alt={cap3.title}
                  width={320}
                  height={386}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <Link
                href={`/services#${cap3.slug}`}
                className="absolute w-full h-full bg-gradient-to-b from-black/20 via-black/40 to-black/90 top-full flex flex-col justify-between p-6 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end">
                  <div className="bg-white text-dark rounded-full p-3 hover:bg-primary hover:text-white transition">
                    <Icon icon="ph:arrow-right-bold" className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-semibold">{cap3.title}</h3>
                  <p className="text-white/80 text-sm leading-5">{cap3.description}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 4: Risk & Performance (Col 3) */}
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group h-[386px]">
              <Link href={`/services#${cap4.slug}`}>
                <Image
                  src={cap4.image}
                  alt={cap4.title}
                  width={320}
                  height={386}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <Link
                href={`/services#${cap4.slug}`}
                className="absolute w-full h-full bg-gradient-to-b from-black/20 via-black/40 to-black/90 top-full flex flex-col justify-between p-6 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end">
                  <div className="bg-white text-dark rounded-full p-3 hover:bg-primary hover:text-white transition">
                    <Icon icon="ph:arrow-right-bold" className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-semibold">{cap4.title}</h3>
                  <p className="text-white/80 text-sm leading-5">{cap4.description}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
