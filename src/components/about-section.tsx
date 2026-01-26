import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white text-black overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Collage */}
                    <div className="relative h-[600px] w-full hidden lg:block">
                        {/* Main Vertical Image */}
                        <div className="absolute top-0 left-0 w-3/4 h-[85%] border-4 border-white shadow-2xl z-10">
                            <Image
                                src="/about-collage.png"
                                alt="Technician Polishing Car"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Secondary Image (Behind/Offset) */}
                        <div className="absolute bottom-0 right-0 w-2/3 h-[50%] border-4 border-white shadow-xl z-0 bg-zinc-200">
                            <Image
                                src="/service-paint.png"
                                alt="Paint Booth"
                                fill
                                className="object-cover opacity-80"
                            />
                        </div>
                    </div>

                    {/* Mobile Image Fallback */}
                    <div className="relative aspect-video w-full lg:hidden mb-8">
                        <Image
                            src="/about-collage.png"
                            alt="Technician Polishing Car"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                                Why Choose Heritage Collision Center?
                            </h4>
                            <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl leading-tight">
                                Expert Collision Repair <br />
                                & Insurance Assistance <br />
                                In Houston
                            </h2>
                        </div>

                        <p className="text-zinc-600 text-lg leading-relaxed">
                            At Heritage Collision Center, our certified technicians bring over 30 years of experience, offering top-quality auto body repair, dent removal, and paint jobs. Whether it's a minor fender bender or major damage, we handle every aspect of collision repair and insurance claims, providing fast and reliable service right here in Houston.
                        </p>

                        <ul className="space-y-3 text-zinc-700">
                            {[
                                "Certified Technicians with over 30 Years of Experience",
                                "Fast, Reliable Auto Body Repair Services in Houston",
                                "Free Insurance Claim Assistance at Heritage Collision Center",
                                "Comprehensive Collision Repair, Dent Removal, & Paint Jobs",
                                "5-Star Customer Reviews and Testimonials"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="text-primary font-bold">•</span> {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/contact">
                            <Button size="lg" className="bg-primary hover:bg-black text-white font-bold uppercase tracking-wider rounded-none w-full sm:w-auto">
                                Book With Heritage Collision Center
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
