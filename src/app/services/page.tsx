
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function ServicesPage() {
    const services = [
        {
            title: "Collision Repair",
            description: "Expert restoration to pre-accident condition.",
            image: "/service-autobody.png"
        },
        {
            title: "Paint Services",
            description: "Computerized color matching & refinishing.",
            image: "/service-paint.png"
        },
        {
            title: "Dent Removal",
            description: "Paintless dent repair for minor dings.",
            image: "/service-dent.png"
        },
        {
            title: "Glass Repair",
            description: "Windshield replacement & chip repair.",
            image: "/service-glass.png"
        },
        {
            title: "Insurance Claims",
            description: "Direct billing and claim handling.",
            image: "/service-insurance.png"
        },
        {
            title: "Towing",
            description: "24/7 towing assistance for our customers.",
            image: "/service-towing.png"
        },
        {
            title: "Calibration",
            description: "ADAS sensor & camera calibration.",
            image: "/service-adas.png"
        },
        {
            title: "Safety Systems",
            description: "Seat belt & airbag system certified repair.",
            image: "/service-seatbelt.png"
        }
    ]

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
                        At Paragon, we don't just fix cars; we restore peace of mind. Our state-of-the-art facility is equipped to handle everything from minor cosmetic touch-ups to major collision reconstruction. We utilize the latest manufacturer-approved techniques and equipment to ensure your vehicle returns to the road stronger and safer than before.
                    </p>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative h-[400px] w-full overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-500 hover:border-primary/50"
                            >
                                {/* Image Background */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start transition-all duration-500">
                                    {/* Icon/Number decoration */}
                                    <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0 text-primary">
                                        <ArrowUpRight className="w-8 h-8" />
                                    </div>

                                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section Reuse */}
            <ContactSection />
        </main>
    )
}
