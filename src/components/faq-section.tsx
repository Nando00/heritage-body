"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const faqs = [
        {
            question: "Do I need an appointment for an estimate?",
            answer: "No, you can stop by anytime during our business hours for a free estimate. However, scheduling an appointment ensures minimal wait time."
        },
        {
            question: "Do you work with my insurance company?",
            answer: "Yes! We work with ALL major insurance companies including Geico, Allstate, State Farm, USAA, and more. We handle the direct billing and negotiation for you."
        },
        {
            question: "Will the paint match my car's original color?",
            answer: "Absolutely. We use computerized color matching technology and premium paints to ensure a flawless factory-finish match."
        },
        {
            question: "How long will the repairs take?",
            answer: "Repair time depends on the severity of the damage. For minor repairs, it could be 1-3 days. For major collision damage, it may take 1-2 weeks. We will provide a specific timeline with your estimate."
        },
        {
            question: "Do you offer a warranty on repairs?",
            answer: "Yes, we stand behind our work with a lifetime warranty on workmanship and paint for as long as you own the vehicle."
        }
    ]

    return (
        <section className="py-24 bg-zinc-50 border-t border-zinc-200">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Got Questions?</h4>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white border rounded-lg px-6 transition-all duration-300 ${openIndex === index ? 'border-primary/50 shadow-md' : 'border-zinc-200'}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left font-bold text-lg py-6 hover:text-primary transition-colors uppercase tracking-tight flex justify-between items-center"
                            >
                                {faq.question}
                                {openIndex === index ? <Minus className="text-primary" /> : <Plus className="text-zinc-400" />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-zinc-600 text-base leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
