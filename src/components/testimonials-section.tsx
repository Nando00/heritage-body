import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
    const reviews = [
        {
            name: "Michael R.",
            rating: 5,
            text: "Heritage Paint & Body did an amazing job on my Mercedes. The paint match is perfect and the staff handled all the insurance paperwork. Highly recommend!"
        },
        {
            name: "Sarah L.",
            rating: 5,
            text: "Fast, professional, and honest. They fixed my dent in less than a day and it looks brand new. Best body shop in Houston."
        },
        {
            name: "David K.",
            rating: 5,
            text: "I was stressed after my accident, but the team at Heritage made it easy. They arranged my rental and kept me updated. 10/10 service."
        }
    ]

    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">
                        Customer Reviews
                    </h2>
                    <p className="text-zinc-600 text-lg">
                        See why we are Houston's highest-rated collision center.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary rounded-xl overflow-hidden">
                            <CardContent className="pt-8 px-8 pb-8">
                                <div className="flex gap-1 mb-6 text-primary">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="size-5 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="text-zinc-600 italic mb-6 leading-relaxed text-lg relative">
                                    <span className="absolute -top-4 -left-2 text-6xl text-zinc-100 font-serif -z-10">"</span>
                                    {review.text}
                                </blockquote>
                                <div className="font-black uppercase text-zinc-900 tracking-wider text-sm flex items-center gap-2">
                                    <span className="w-8 h-px bg-primary"></span>
                                    {review.name}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
