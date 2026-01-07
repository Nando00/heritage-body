"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-12 w-48">
                        <Image
                            src="/trasnparent-heritage-logo.png"
                            alt="Heritage Collision Center"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>
                <nav className="hidden gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <Link href="tel:+1234567890" className="flex items-center gap-2 text-white/80 hover:text-white">
                        <Phone className="size-4" />
                        <span className="text-sm font-semibold">1-800-HERITAGE</span>
                    </Link>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider">
                        Get Estimate
                    </Button>
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-white">
                            <Menu className="size-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-black/95 border-l-white/10 text-white">
                        <div className="flex flex-col space-y-4 py-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-primary uppercase tracking-wide"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase mt-4">
                                Get Estimate
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
