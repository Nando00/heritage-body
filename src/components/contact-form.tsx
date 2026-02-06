"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        setStatus("submitting")
        setErrorMessage("")

        const formData = new FormData(form)
        const data = {
            name: `${formData.get('first-name')} ${formData.get('last-name')}`,
            email: formData.get('email'),
            phone: formData.get('phone'),
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
            // Reset form
            form.reset()
        } catch (error) {
            console.error('Submission error:', error)
            setStatus("error")
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto lg:mx-0">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-white/70">First Name</label>
                    <Input
                        name="first-name"
                        id="first-name"
                        placeholder="John"
                        required
                        className="bg-zinc-900/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-white/70">Last Name</label>
                    <Input
                        name="last-name"
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
                    name="email"
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
                    name="phone"
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="bg-zinc-900/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-white/70">Service Type</label>
                <select
                    name="service"
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
                    name="message"
                    id="message"
                    placeholder="How can we help you?"
                    required
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
            {status === "error" && (
                <p className="text-red-500 text-center text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
                    {errorMessage}
                </p>
            )}
        </form>
    )
}
