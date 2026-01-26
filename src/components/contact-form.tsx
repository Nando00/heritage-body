"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")

        // Simulate form submission
        setTimeout(() => {
            setStatus("success")
        }, 1500)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto lg:mx-0">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-white/70">First Name</label>
                    <Input
                        id="first-name"
                        placeholder="John"
                        required
                        className="bg-zinc-900/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-white/70">Last Name</label>
                    <Input
                        id="last-name"
                        placeholder="Doe"
                        required
                        className="bg-zinc-900/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-zinc-900/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-white/70">Phone</label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="bg-zinc-900/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-white/70">Service Type</label>
                <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[120px] bg-zinc-900/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider py-6"
                disabled={status === "submitting"}
            >
                {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
                <p className="text-green-500 text-center text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
                    Message sent successfully! We'll be in touch soon.
                </p>
            )}
        </form>
    )
}
