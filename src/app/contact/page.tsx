
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-zinc-900">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-80" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h5 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">Get In Touch</h5>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        Contact Us
                    </h1>
                    <div className="h-1 w-24 bg-primary mx-auto" />
                </div>
            </section>

            {/* Reuse Contact Section - passing a prop or wrapper to adjust padding if needed, 
                but default py-24 should be fine. */}
            <ContactSection />
        </main>
    )
}
