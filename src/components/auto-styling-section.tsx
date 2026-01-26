import { Shield, Palette, Layers, Truck, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AutoStylingSection() {
    return (
        <section className="py-32 bg-[#0a0a0a] text-white overflow-hidden" id="auto-styling">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Header - Matching Services Section Aesthetic */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 border-b border-white/10 pb-8 text-center md:text-left">
                    <div className="space-y-4 max-w-2xl w-full md:w-auto">
                        <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-sm">
                            Customization
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                            Premium <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Auto Styling</span>
                        </h3>
                    </div>
                    <p className="text-zinc-400 max-w-md text-sm leading-relaxed hidden md:block text-right">
                        Elevate your vehicle's presence with our premium styling services. From full wraps to ceramic coating, we transform stock vehicles into personalized masterpieces.
                    </p>
                </div>

                {/* Styling Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
                    <StylingServiceCard
                        icon={<Shield className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />}
                        title="Paint Protection"
                        description="Full vehicle PPF to protect against rock chips, scratches, and road debris. Self-healing technology."
                    />
                    <StylingServiceCard
                        icon={<Palette className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />}
                        title="Vehicle Wraps"
                        description="Full color changes, chrome deletes, and custom graphics using premium 3M and Avery Dennison films."
                    />
                    <StylingServiceCard
                        icon={<Layers className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />}
                        title="Ceramic Coating"
                        description="Long-lasting hydrophobic protection that enhances gloss and makes cleaning effortless."
                    />
                    <StylingServiceCard
                        icon={<Truck className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />}
                        title="Lift Kits"
                        description="Suspension upgrades, leveling kits, and full off-road setups for trucks and Jeeps."
                    />
                </div>

                {/* Blackout Packages */}
                <div className="mb-32">
                    <div className="mb-16 text-center md:text-left">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-4">
                            Signature Blackout Packages
                        </h3>
                        <p className="text-zinc-500 max-w-xl">Curated packages to give your vehicle a stealth, aggressive look.</p>
                    </div>

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

                {/* Additional Extras */}
                <div>
                    {/* Section Header */}
                    <div className="mb-16 text-center md:text-left border-t border-white/10 pt-16">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                            Upgrades & Builds
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Upgrade Your Ride */}
                        <div>
                            <h4 className="text-xl font-bold uppercase tracking-widest text-primary mb-8 ml-1">
                                Individual Upgrades
                            </h4>
                            <ul className="grid sm:grid-cols-2 gap-6">
                                <ListItem
                                    title="Window Tinting"
                                    desc="Legal-grade ceramic, carbon, or limo tint options."
                                />
                                <ListItem
                                    title="Interior Conversion"
                                    desc="Custom stitched leather seats in your style & color."
                                />
                                <ListItem
                                    title="Premium Audio"
                                    desc="Amplifiers, Subwoofers, Apple CarPlay & Android Auto."
                                />
                                <ListItem
                                    title="Paint Correction"
                                    desc="Remove swirl marks, restore gloss & protect paint."
                                />
                            </ul>
                        </div>

                        {/* Full Makeover */}
                        <div className="relative group overflow-hidden bg-zinc-900 border border-white/5 p-8 lg:p-12">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                            <h4 className="text-xl font-bold uppercase tracking-widest text-primary mb-6">
                                Full Custom Builds
                            </h4>

                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                Want to completely change your vehicle's style and presence?
                                Ask about our <span className="text-white font-bold">Complete Transformation Builds</span>.
                            </p>

                            <ul className="grid grid-cols-2 gap-4 mb-10">
                                {[
                                    "Exterior Redesign",
                                    "Interior Upgrades",
                                    "Paint or Wrap",
                                    "Audio + Tech",
                                    "Wheels + Suspension",
                                    "Factory-Grade Finish"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-zinc-300 text-sm font-medium">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-white/5">
                                <Link href="tel:+17136674888">
                                    <Button className="w-full bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-wider h-14 text-sm">
                                        Start Your Build
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function StylingServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="relative h-[300px] bg-zinc-900/50 border border-white/5 p-8 flex flex-col justify-end items-start group hover:bg-zinc-900 transition-all duration-500 overflow-hidden hover:border-primary/50">
            {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="mb-auto">
                <div className="mb-6 p-4 bg-black/50 rounded-lg inline-block border border-white/5">
                    {icon}
                </div>
            </div>

            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm max-w-sm">{description}</p>
        </div>
    )
}

function PricingCard({ title, price, features, highlight, description }: { title: string, price: string, features: string[], highlight?: boolean, description?: string }) {
    return (
        <div className={`p-8 rounded-xl border flex flex-col h-full transition-all duration-300 ${highlight ? 'bg-zinc-900 border-primary shadow-2xl shadow-primary/10 scale-105' : 'bg-zinc-900 border-white/10 hover:border-white/20'}`}>
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
        </div>
    )
}

function ListItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="group flex gap-4 items-start p-4 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/5">
            <div className="bg-black p-2 rounded border border-white/10 group-hover:border-primary/50 transition-colors">
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-zinc-500 text-sm">{desc}</p>
            </div>
        </div>
    )
}
