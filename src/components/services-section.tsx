"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function ServicesSection() {
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
        <section id="services" className="py-32 bg-[#111111] text-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 border-b border-white/10 pb-8 text-center md:text-left">
                    <div className="space-y-4 max-w-2xl w-full md:w-auto">
                        <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-sm">
                            Our Expertise
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                            Other <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"> Premium Services</span>
                        </h3>
                    </div>
                    <p className="text-zinc-400 max-w-md text-sm leading-relaxed hidden md:block text-right">
                        We combine advanced technology with master craftsmanship to deliver results that exceed factory standards.
                    </p>
                </div>

                {/* Modern Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            tabIndex={0} // Makes element focusable on tap/click
                            className="group relative h-[400px] w-full overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-500 hover:border-primary/50 focus:border-primary/50 outline-none"
                        >
                            {/* Image Background */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                // Added group-focus classes for touch interaction
                                className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110 opacity-60 group-hover:opacity-40 group-focus:opacity-40"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start transition-all duration-500">
                                {/* Icon/Number decoration */}
                                <div className="mb-auto opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 text-primary">
                                    <ArrowUpRight className="w-8 h-8" />
                                </div>

                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2 group-focus:-translate-y-2">
                                    <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-primary group-focus:text-primary transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 group-focus:opacity-100 group-focus:max-h-20 transition-all duration-500 overflow-hidden">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full group-focus:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
