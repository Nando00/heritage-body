import Image from "next/image"

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

  // Duplicate partners for seamless infinite scroll
  const scrollingPartners = [...partners, ...partners, ...partners, ...partners]

  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Trusted Partners</span>
        <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
          We Work With All Major Providers
        </h3>
      </div>

      <div className="relative w-full overflow-hidden mask-gradient">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <div className="flex w-max animate-scroll">
          {scrollingPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center w-[200px] mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <div className="relative h-16 w-32">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain invert mix-blend-screen"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
