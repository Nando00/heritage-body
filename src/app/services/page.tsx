import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { AutoStylingSection } from "@/components/auto-styling-section"
import { ServicesSection } from "@/components/services-section"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-zinc-900">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-80" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h5 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">What We Do</h5>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        Our Services
                    </h1>
                    <div className="h-1 w-24 bg-primary mx-auto" />
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-zinc-950 border-b border-white/5">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        World Class Quality
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-8">
                        Comprehensive Auto Care <br /> For Every Need
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed font-light">
                        At Heritage Paint & Body, we don't just fix cars; we restore peace of mind. Our state-of-the-art facility is equipped to handle everything from minor cosmetic touch-ups to major collision reconstruction. We utilize the latest manufacturer-approved techniques and equipment to ensure your vehicle returns to the road stronger and safer than before.
                    </p>
                </div>
            </section>

            {/* Auto Styling Section - Added first as requested */}
            <AutoStylingSection />

            {/* Services Grid Section - Using shared component for consistency */}
            <ServicesSection />

            {/* Contact Section Reuse */}
            <ContactSection />
        </main>
    )
}
