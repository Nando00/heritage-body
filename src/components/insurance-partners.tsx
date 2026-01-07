import Image from "next/image"
import { Diamond } from "lucide-react"

export function InsurancePartners() {
  const partners = [
    { name: "Allstate", logo: "/allstate-trans.png" },
    { name: "Farmers", logo: "/farmers.png" },
    { name: "Nationwide", logo: "/nationwide.png" },

    { name: "USAA", logo: "/USAA.png" },
    { name: "Liberty Mutual", logo: "/Liberty-Mutual-Logo.png" },
    { name: "Geico", logo: "/GEICO-Logo.png" },
    { name: "Fred Loya", logo: "/Fred-Loya.png" },
    { name: "Progressive", logo: "/progressive-3-logo.png" }
  ]

  return (
    <section className="py-24 bg-[#1a1a1a] text-white border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
        <div className="space-y-6 mb-16 flex flex-col items-center">
          {/* Diamond Icon */}
          <div className="mb-2 text-white/80">
            <Diamond className="size-8 stroke-[1px]" />
          </div>

          <h3 className="text-3xl font-medium uppercase tracking-[0.2em] sm:text-4xl text-white">
            We Work With All Insurance <br /> Companies
          </h3>

          <p className="max-w-3xl mx-auto text-stone-400 text-sm leading-relaxed antialiased font-light">
            No matter who your provider is, chances are we have worked with them before. If you are unsure about whether or not your insurance is accepted, get in touch with us and our team will be able to assist you.
          </p>
        </div>

        {/* CSS Grid for Logos - Clean Layout (No Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center h-20 w-full relative group transition-all duration-300">
              {partner.logo ? (
                <div className="relative w-full h-full max-w-[140px]">
                  {/* mix-blend-screen hides black (inverted white) backgrounds */}
                  {/* invert grayscale makes colored logos white/light */}
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain invert grayscale mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                /* Text Fallback for missing logos */
                <span className="text-sm font-bold uppercase tracking-widest text-white/30 group-hover:text-white/80 transition-colors">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
