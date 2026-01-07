import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg.png"
                    alt="Premium Auto Body Shop Garage with Red Sports Car"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="container mx-auto relative flex h-full items-center justify-center px-4 md:px-6 text-center">
                <div className="max-w-4xl space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Welcome to Heritage Collision Center <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Your Trusted Partner</span> <br />
                            For Collision Repair
                        </h1>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row justify-center pt-8">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase text-lg px-10 py-6 h-auto tracking-wider shadow-lg hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300">
                            Book Today
                        </Button>
                    </div>
                </div>
            </div>


        </section>
    )
}
