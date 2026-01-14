"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Facebook, Instagram, Twitter, Linkedin, X, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative z-50">
                    <div className="relative h-14 w-56">
                        <Image
                            src="/trasnparent-heritage-logo.png"
                            alt="Heritage Collision Center"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-bold text-white/70 transition-colors hover:text-primary uppercase tracking-[0.2em]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="tel:+1234567890" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                        <Phone className="size-4" />
                        <span className="text-xs font-bold tracking-wider">1-800-HERITAGE</span>
                    </Link>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-xs px-6">
                        Get Estimate
                    </Button>
                </div>

                {/* Mobile Menu Trigger */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 relative z-50">
                            <Menu className="size-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>

                    {/* Full Screen Mobile Menu */}
                    <SheetContent side="right" className="w-full bg-[#0a0a0a] border-none text-white p-0 flex flex-col [&>button]:hidden">

                        {/* Header within Sheet (Logo + Close) */}
                        <div className="flex items-center justify-between p-4 h-20 border-b border-white/5">
                            <div className="relative h-10 w-40 opacity-0"> {/* Spacer matching logo size for alignment if needed, or just padding */} </div>

                            <SheetClose asChild>
                                <Button variant="ghost" size="icon" className="text-white/50 hover:text-white hover:bg-white/10 rounded-full h-12 w-12">
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Close</span>
                                </Button>
                            </SheetClose>
                        </div>

                        {/* Menu Content */}
                        <div className="flex flex-col justify-between flex-1 p-8 md:p-12 overflow-y-auto">

                            {/* Navigation Links */}
                            <div className="flex flex-col space-y-2 mt-8">
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Menu</span>
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-center justify-between text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors py-2 border-b border-white/5 last:border-none"
                                    >
                                        <span>{link.label}</span>
                                        <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                                    </Link>
                                ))}
                            </div>

                            {/* Bottom Info */}
                            <div className="space-y-8 mt-12">
                                <div className="space-y-4">
                                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 text-sm">
                                        Get Free Estimate
                                    </Button>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Link href="tel:+1234567890" className="flex items-center justify-center gap-2 h-12 border border-white/10 hover:bg-white/5 rounded transition-colors text-sm font-bold uppercase tracking-wider">
                                            <Phone className="size-4" />
                                            Call Us
                                        </Link>
                                        <Link href="mailto:info@heritage.com" className="flex items-center justify-center gap-2 h-12 border border-white/10 hover:bg-white/5 rounded transition-colors text-sm font-bold uppercase tracking-wider">
                                            Email
                                        </Link>
                                    </div>
                                </div>

                                {/* Socials */}
                                <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Follow Us</span>
                                    <div className="flex gap-4">
                                        <Link href="#" className="p-2 text-white/50 hover:text-white transition-colors"><Facebook className="size-5" /></Link>
                                        <Link href="#" className="p-2 text-white/50 hover:text-white transition-colors"><Instagram className="size-5" /></Link>
                                        <Link href="#" className="p-2 text-white/50 hover:text-white transition-colors"><Twitter className="size-5" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
