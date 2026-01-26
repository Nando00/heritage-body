
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
                {/* Background - replacing with a dark gradient/pattern until image is available */}
                <div className="absolute inset-0 bg-zinc-900">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-80" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" /> {/* Optional pattern */}
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h5 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">Heritage Paint & Body</h5>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        About Us
                    </h1>
                    <div className="h-1 w-24 bg-primary mx-auto" />
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side */}
                        <div className="relative h-[600px] w-full rounded-sm overflow-hidden border border-white/10 group">
                            <Image
                                src="/about-collage.png"
                                alt="Heritage Team and Shop"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay effect */}
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Content Side */}
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-[2px] w-12 bg-primary" />
                                    <span className="text-primary font-bold tracking-[0.2em] uppercase">Who We Are</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
                                    Bringing Quality <br />
                                    <span className="text-white/50">Paint & Body Service</span> <br />
                                    To Houston
                                </h2>
                            </div>

                            <div className="space-y-6 text-lg text-white/60 leading-relaxed font-light">
                                <p>
                                    With decades of experience under our belt, Heritage Paint & Body was founded to bring a better quality paint and body service to the Houston area. We believe that every vehicle deserves the highest standard of care, and every customer deserves transparency and respect.
                                </p>
                                <p>
                                    Our team has helped repair thousands of vehicles each year, and has been involved with many of the local car organizations within our city. We aren't just a shop; we're car enthusiasts dedicated to restoring your vehicle to its pre-accident glory.
                                </p>
                                <p>
                                    Our mission is to ensure each and every customer gets the best service possible at the right price, without compromising on quality or safety.
                                </p>
                            </div>

                            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
                                <div>
                                    <span className="block text-4xl font-black text-white mb-2">10+</span>
                                    <span className="text-xs uppercase tracking-widest text-white/40">Years Experience</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-black text-white mb-2">1k+</span>
                                    <span className="text-xs uppercase tracking-widest text-white/40">Vehicles Serviced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-zinc-950 border-t border-white/5" id="contact">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Get In Touch</h3>
                            <p className="text-white/60 mb-8">
                                Ready to get your vehicle back in top shape? Send us a message or give us a call for a free estimate.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded bg-white/5 flex items-center justify-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-white/40">Phone</p>
                                        <p className="font-bold">(713) 667-4888</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded bg-white/5 flex items-center justify-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-white/40">Email</p>
                                        <p className="font-bold">bodyshop@houstoncardirect.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded bg-white/5 flex items-center justify-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-white/40">Location</p>
                                        <p className="font-bold">5450 Gulfton St, Houston, TX 77081</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900/30 p-8 rounded border border-white/5">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
