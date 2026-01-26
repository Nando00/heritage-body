import { ShieldCheck, Clock, Award, PenTool } from "lucide-react"

export function WhyChooseUs() {
    const benefits = [
        {
            icon: ShieldCheck,
            title: "Lifetime Warranty",
            description: "We stand behind our workmanship for as long as you own your vehicle. Peace of mind guaranteed."
        },
        {
            icon: Award,
            title: "Certified Technicians",
            description: "Our team is I-CAR Gold Class certified, ensuring your vehicle is repaired to factory standards."
        },
        {
            icon: Clock,
            title: "Fast Turnaround",
            description: "We know you need your car back. Our efficient process minimizes downtime without compromising quality."
        },
        {
            icon: PenTool,
            title: "State-of-the-Art Equipment",
            description: "Using the latest technology for frame straightening and color matching precision."
        }
    ]

    return (
        <section className="py-24 bg-white text-black">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-6">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-bold uppercase tracking-wider">
                            The Heritage Standard
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">
                            Why Heritage <br /> <span className="text-primary">Paint & Body?</span>
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-md">
                            We don't just repair cars; we restore confidence. With over 20 years of experience in Houston, we are the trusted choice for luxury and daily driver collision repair.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col gap-4 p-6 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-primary/50 transition-colors group">
                                <div className="flex items-center justify-center size-12 rounded-full bg-black text-white group-hover:bg-primary transition-colors">
                                    <benefit.icon className="size-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold uppercase">{benefit.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
