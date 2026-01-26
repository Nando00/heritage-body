import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function InsuranceSection() {
    return (
        <section className="py-24 bg-white text-black overflow-hidden border-t">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                                Leave The Paperwork To Us
                            </h4>
                            <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl lg:text-6xl leading-[0.9]">
                                Full-Service <br />
                                Insurance assistance <br />
                                & Support in Houston
                            </h2>
                        </div>

                        <p className="text-zinc-600 text-lg leading-relaxed max-w-xl">
                            At Heritage Collision Center, we handle everything from the first call to your insurance provider to negotiating the best payout for you. With over 30 years of industry experience, we take care of the paperwork and ensure you get the maximum coverage for your claim.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start group">
                                <div className="mt-1">
                                    <h5 className="font-bold text-primary text-lg uppercase flex items-center gap-2">
                                        We Handle It All
                                    </h5>
                                    <p className="text-zinc-600 leading-snug mt-1">
                                        From calling your insurance provider to negotiating on your behalf, we make the process seamless.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="mt-1">
                                    <h5 className="font-bold text-primary text-lg uppercase flex items-center gap-2">
                                        Maximized Payout
                                    </h5>
                                    <p className="text-zinc-600 leading-snug mt-1">
                                        Our team works to ensure you receive the full benefits of your policy, so you can rest easy knowing you're getting the maximum payout available.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="mt-1">
                                    <h5 className="font-bold text-primary text-lg uppercase flex items-center gap-2">
                                        Direct Insurance Billing
                                    </h5>
                                    <p className="text-zinc-600 leading-snug mt-1">
                                        No need to worry about payments – we bill your insurance provider directly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link href="/contact">
                            <Button className="bg-white text-black border-2 border-black hover:bg-black hover:text-white font-bold uppercase tracking-wider h-14 px-8 text-sm transition-all duration-300 rounded-none shadow-sm hover:shadow-lg">
                                Get Free Full Insurance Assistance
                            </Button>
                        </Link>
                    </div>

                    {/* RIGHT VISUALS */}
                    <div className="relative w-full order-1 lg:order-2 group">
                        {/* Image Container */}
                        <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full bg-zinc-100 overflow-hidden">
                            <Image
                                src="/insurance-bg.png"
                                alt="Insurance Assistance Specialist"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Red Stats Cards - Stacked below on mobile, Absolute overlap on Desktop */}
                        <div className="relative lg:absolute lg:bottom-12 lg:left-0 w-full flex flex-col sm:flex-row shadow-2xl z-10 -mt-1 lg:mt-0 px-0 gap-0">
                            {/* Card 1 */}
                            <div className="flex-1 bg-[#cc0000] p-6 lg:p-8 text-white text-center sm:border-r border-white/10 relative overflow-hidden shadow-lg lg:shadow-none">
                                <div className="relative z-10">
                                    <div className="text-[10px] lg:text-xs font-bold uppercase tracking-widest opacity-90 mb-2">Claims Processed</div>
                                    <div className="text-4xl lg:text-5xl font-black tracking-tight mb-1">500+</div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-75">Claims Handled</div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex-1 bg-[#D32F2F] p-6 lg:p-8 text-white text-center relative overflow-hidden shadow-lg lg:shadow-none">
                                <div className="relative z-10">
                                    <div className="text-[10px] lg:text-xs font-bold uppercase tracking-widest opacity-90 mb-2">Total Payout Secured</div>
                                    <div className="text-4xl lg:text-5xl font-black tracking-tight mb-1">$2.7M</div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-75">Recovered for Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
