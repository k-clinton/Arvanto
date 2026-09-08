import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CAPABILITIES } from "@/data/capabilities";
import { DIVISIONS } from "@/data/divisions";

export default function ServicesPage() {
  return (
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-12 md:p-20 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            Arvanto Capabilities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            5 Core Practices. End-to-End Execution.
          </h1>
          <p className="text-lg md:text-xl text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            Discover our core divisions across Strategy & Growth, AI & Technology, Data & Decision Intelligence, Risk & Performance, and Operating Transformation.
          </p>
        </div>
      </div>

      {/* Practices List */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-8 space-y-20">
        {CAPABILITIES.map((cap, idx) => (
          <div
            key={cap.id}
            id={cap.slug}
            className="grid md:grid-cols-12 gap-10 items-center p-8 md:p-12 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/5 dark:bg-white/5 scroll-mt-32"
          >
            <div className="md:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Icon icon={cap.icon} className="w-8 h-8" />
                </div>
                <span className="text-xs uppercase tracking-widest text-primary font-bold">
                  {cap.category}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{cap.title}</h2>
              <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed">
                {cap.detailedDescription}
              </p>

              <div className="pt-4">
                <h4 className="text-sm uppercase font-bold text-primary tracking-wider mb-3">
                  Key Services & Capabilities:
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {cap.keyServices.map((service, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <Icon icon="ph:check-circle-bold" className="text-primary w-4 h-4 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-dark transition duration-300"
                >
                  <span>Inquire About {cap.title}</span>
                  <Icon icon="ph:arrow-right-bold" className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-6 h-[400px] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
