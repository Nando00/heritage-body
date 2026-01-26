"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
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
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase text-zinc-500">Name</label>
                                    <Input id="name" placeholder="John Doe" className="bg-zinc-50 border-zinc-200" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase text-zinc-500">Phone</label>
                                    <Input id="phone" placeholder="(555) 123-4567" className="bg-zinc-50 border-zinc-200" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase text-zinc-500">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" className="bg-zinc-50 border-zinc-200" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase text-zinc-500">How can we help?</label>
                                <Textarea id="message" placeholder="Describe your vehicle damage or question..." className="bg-zinc-50 border-zinc-200 min-h-[120px]" />
                            </div>

                            <Button size="lg" className="w-full bg-primary hover:bg-black text-white font-bold uppercase tracking-wider h-12 rounded-none mt-2">
                                Submit Message
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
