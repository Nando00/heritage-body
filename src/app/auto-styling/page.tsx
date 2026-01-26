"use client"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import Link from "next/link"
import { Check, ArrowRight, Shield, Palette, Layers, Truck } from "lucide-react"

export default function AutoStylingPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
                {/* Placeholder for a cool car background - using a dark gradient for now */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-50" />

                <div className="container relative z-20 px-4 text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
                            Auto Styling <span className="text-primary">&</span> Customization
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8 font-light">
                            Where Transformation Meets Precision.
                            PPF, Wraps, Ceramics, and Full Builds.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-lg px-8 h-14">
                            Get A Quote
                        </Button>
                    </Reveal>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-24 container mx-auto px-4">
                <Reveal>
                    <div className="mb-16 text-center">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                            Premium Styling Services
                        </h2>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ServiceCard
                        icon={<Shield className="w-10 h-10 text-primary" />}
                        title="Paint Protection"
                        description="Full vehicle PPF to protect against rock chips, scratches, and road debris. Self-healing technology."
                    />
                    <ServiceCard
                        icon={<Palette className="w-10 h-10 text-primary" />}
                        title="Vehicle Wraps"
                        description="Full color changes, chrome deletes, and custom graphics using premium 3M and Avery Dennison films."
                    />
                    <ServiceCard
                        icon={<Layers className="w-10 h-10 text-primary" />}
                        title="Ceramic Coating"
                        description="Long-lasting hydrophobic protection that enhances gloss and makes cleaning effortless."
                    />
                    <ServiceCard
                        icon={<Truck className="w-10 h-10 text-primary" />}
                        title="Lift Kits"
                        description="Suspension upgrades, leveling kits, and full off-road setups for trucks and Jeeps."
                    />
                </div>
            </section>

            {/* Blackout Packages */}
            <section className="py-24 bg-neutral-900/50 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="mb-16 text-center">
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Packages</span>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                                Blackout Packages
                            </h2>
                            <p className="text-white/50 mt-4">Transform your vehicle with our curated styling packages.</p>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <PricingCard
                            title="Stealth Starter"
                            price="$795"
                            features={[
                                "4 Wheels Blacked Out",
                                "Side Mirrors Blacked Out"
                            ]}
                        />
                        <PricingCard
                            title="Urban Warrior"
                            price="$995"
                            features={[
                                "Wheels Blacked Out",
                                "Side Mirrors Blacked Out",
                                "Brake Calipers Painted"
                            ]}
                            highlight
                        />
                        <PricingCard
                            title="Elite Shadow"
                            price="$1,195"
                            features={[
                                "Wheels + Mirrors + Calipers",
                                "Antenna Blackout",
                                "Rear Spoiler Blackout"
                            ]}
                        />
                        <PricingCard
                            title="Murdered-Out"
                            price="$1,795"
                            description="The Ultimate Blackout Statement"
                            features={[
                                "All Items From Elite Pack",
                                "Front Grille Blackout",
                                "Bumper Lips Blackout"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Additional Upgrades Lists */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Upgrade Your Ride */}
                    <Reveal>
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-8 border-l-4 border-primary pl-4">
                                Upgrade Your Ride
                            </h3>
                            <ul className="space-y-6">
                                <ListItem
                                    title="Window Tinting"
                                    desc="Legal-grade ceramic, carbon, or limo tint options."
                                />
                                <ListItem
                                    title="Leather Interior Conversion"
                                    desc="Custom stitched leather seats in your style & color."
                                />
                                <ListItem
                                    title="Premium Audio Systems"
                                    desc="Amplifiers, Subwoofers, Apple CarPlay & Android Auto."
                                />
                                <ListItem
                                    title="Paint Correction"
                                    desc="Remove swirl marks, restore gloss & protect paint."
                                />
                            </ul>
                        </div>
                    </Reveal>

                    {/* Full Makeover */}
                    <Reveal>
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-8 border-l-4 border-primary pl-4">
                                Full Custom Builds
                            </h3>
                            <div className="bg-neutral-900 p-8 rounded-lg border border-white/5">
                                <p className="text-lg text-white mb-6 font-medium">
                                    Want to completely change your vehicle's style and presence?
                                    Ask about our Complete Transformation Builds.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Exterior Redesign",
                                        "Interior Upgrades",
                                        "Paint or Wrap",
                                        "Audio + Tech",
                                        "Wheels + Suspension",
                                        "Factory-Grade Finish"
                                    ].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-white/70">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                        Ready to Transform Your Ride?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-primary font-bold uppercase tracking-wider text-lg px-10 h-16">
                            Book Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold uppercase tracking-wider text-lg px-10 h-16">
                            View Gallery
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-neutral-900 border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors group">
            <div className="mb-6 bg-black/50 w-20 h-20 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3">{title}</h3>
            <p className="text-white/60 leading-relaxed">{description}</p>
        </div>
    )
}

function PricingCard({ title, price, features, highlight, description }: { title: string, price: string, features: string[], highlight?: boolean, description?: string }) {
    return (
        <div className={`p-8 rounded-xl border flex flex-col h-full ${highlight ? 'bg-neutral-900 border-primary shadow-2xl shadow-primary/10' : 'bg-black border-white/10'}`}>
            <div className="mb-6">
                <h3 className="text-lg font-bold text-white/80 uppercase tracking-widest mb-2">{title}</h3>
                <div className="text-4xl font-black text-white">{price}</div>
                {description && <p className="text-xs text-primary mt-2 font-bold uppercase tracking-wider">{description}</p>}
            </div>
            <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>
            <Button className={`w-full font-bold uppercase tracking-wider ${highlight ? 'bg-primary hover:bg-primary/90' : 'bg-white/10 hover:bg-white/20'}`}>
                Select Package
            </Button>
        </div>
    )
}

function ListItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="bg-neutral-900 p-2 rounded border border-white/10">
                <ArrowRight className="w-5 h-5 text-primary" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide">{title}</h4>
                <p className="text-white/60 text-sm">{desc}</p>
            </div>
        </div>
    )
}
