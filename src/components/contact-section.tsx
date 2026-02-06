"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        setStatus("submitting")
        setErrorMessage("")

        const formData = new FormData(form)
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            service: formData.get('service'),
            message: formData.get('message'),
        }

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message')
            }

            setStatus("success")
            form.reset()
        } catch (error) {
            console.error('Submission error:', error)
            setStatus("error")
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong.")
        }
    }

    return (
        <section id="contact" className="py-24 bg-black text-white relative">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-zinc-900/90" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
                                Get In Touch
                            </h4>
                            <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">
                                We're Here To Help
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Have questions about your repair or insurance claim? Visit us, call us, or send a message. We offer free estimates and work with all insurance providers.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-zinc-800 rounded text-primary">
                                    <MapPin className="size-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold uppercase text-lg">Visit Us</h5>
                                    <p className="text-zinc-400">5450 Gulfton St, Houston, TX 77081</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-zinc-800 rounded text-primary">
                                    <Phone className="size-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold uppercase text-lg">Call Us</h5>
                                    <p className="text-zinc-400">(713) 667-4888</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-zinc-800 rounded text-primary">
                                    <Mail className="size-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold uppercase text-lg">Email Us</h5>
                                    <p className="text-zinc-400">bodyshop@houstoncardirect.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-zinc-800 rounded text-primary">
                                    <Clock className="size-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold uppercase text-lg">Hours</h5>
                                    <p className="text-zinc-400">Mon - Fri: 7:30 AM - 6:00 PM</p>
                                    <p className="text-zinc-400">Sat: 8:00 AM - 12:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white text-black p-8 md:p-12 shadow-2xl">
                        <h3 className="text-2xl font-black uppercase mb-6">Send Us A Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase text-zinc-500">Name</label>
                                    <Input name="name" id="name" placeholder="John Doe" className="bg-zinc-50 border-zinc-200" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase text-zinc-500">Phone</label>
                                    <Input name="phone" id="phone" placeholder="(555) 123-4567" className="bg-zinc-50 border-zinc-200" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase text-zinc-500">Email</label>
                                <Input name="email" id="email" type="email" placeholder="john@example.com" className="bg-zinc-50 border-zinc-200" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-xs font-bold uppercase text-zinc-500">Service Type</label>
                                <select
                                    name="service"
                                    id="service"
                                    className="flex h-10 w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Service...</option>
                                    <option value="collision">Collision Repair</option>
                                    <option value="styling">Auto Styling (Wraps/PPF)</option>
                                    <option value="paint">Paint & Body</option>
                                    <option value="dent">Dent Removal</option>
                                    <option value="glass">Glass Repair</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase text-zinc-500">How can we help?</label>
                                <Textarea name="message" id="message" placeholder="Describe your vehicle damage or question..." className="bg-zinc-50 border-zinc-200 min-h-[120px]" required />
                            </div>

                            <Button
                                disabled={status === "submitting"}
                                size="lg"
                                className="w-full bg-primary hover:bg-black text-white font-bold uppercase tracking-wider h-12 rounded-none mt-2"
                            >
                                {status === "submitting" ? "Sending..." : "Submit Message"}
                            </Button>

                            {status === "success" && (
                                <p className="text-green-600 text-center text-sm font-bold animate-in fade-in slide-in-from-bottom-2 mt-4">
                                    Message sent successfully!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-center text-sm font-bold animate-in fade-in slide-in-from-bottom-2 mt-4">
                                    {errorMessage}
                                </p>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
