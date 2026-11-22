import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CAPABILITIES } from "@/data/capabilities";
import { PageHero } from "@/components/common/PageHero";

export default function ServicesPage() {
  return (
    <div className="pb-16 bg-white dark:bg-black text-dark dark:text-white">
      <PageHero
        eyebrow="Arvanto Capabilities"
        title="6 Core Practices. End to End Execution."
        description="Discover our core divisions across Strategy & Growth, AI & Technology, Data & Decision Intelligence, Risk & Performance, Operating Transformation, and Tax Advisory & Compliance."
        image="/images/heroBanner.png"
      />

      {/* Practices List */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-4 sm:py-8 space-y-12 sm:space-y-20">
        {CAPABILITIES.map((cap, index) => (
          <div
            key={cap.id}
            id={cap.slug}
            className="service-practice grid md:grid-cols-12 gap-8 sm:gap-10 md:gap-14 items-center scroll-mt-32"
          >
            <div className={`service-copy md:col-span-6 space-y-4 sm:space-y-6 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full text-primary shrink-0">
                  <Icon icon={cap.icon} className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-primary font-bold">
                  {cap.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{cap.title}</h2>
              <p className="text-dark/70 dark:text-white/70 text-sm sm:text-lg leading-relaxed">
                {cap.detailedDescription}
              </p>

              <div className="pt-2 sm:pt-4">
                <h4 className="text-xs sm:text-sm uppercase font-bold text-primary tracking-wider mb-2.5 sm:mb-3">
                  Key Services & Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                  {cap.keyServices.map((service, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <Icon icon="ph:check-circle-bold" className="text-primary w-4 h-4 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <Link
                  href="/contactus"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-dark transition duration-300 text-sm sm:text-base"
                >
                  <span>{cap.inquiryLabel ?? `Inquire About ${cap.title}`}</span>
                  <Icon icon="ph:arrow-right-bold" className="service-cta-arrow w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className={`service-image md:col-span-6 h-[240px] sm:h-[320px] md:h-[400px] relative overflow-hidden ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                className="service-image-content object-cover transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
