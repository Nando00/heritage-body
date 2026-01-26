import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-zinc-950 text-white border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative h-10 w-40">
                                <span className="text-lg font-bold tracking-tight text-white uppercase">
                                    Heritage <span className="text-primary">Paint & Body</span>
                                </span>
                            </div>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Houston's premier auto body shop, dedicated to restoring your vehicle to its pre-accident condition with precision and care.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="p-2 bg-zinc-900 hover:bg-primary transition-colors rounded text-white"><Facebook className="size-4" /></Link>
                            <Link href="#" className="p-2 bg-zinc-900 hover:bg-primary transition-colors rounded text-white"><Instagram className="size-4" /></Link>
                            <Link href="#" className="p-2 bg-zinc-900 hover:bg-primary transition-colors rounded text-white"><Twitter className="size-4" /></Link>
                            <Link href="#" className="p-2 bg-zinc-900 hover:bg-primary transition-colors rounded text-white"><Linkedin className="size-4" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2 text-zinc-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold uppercase tracking-wider">Our Services</h4>
                        <ul className="space-y-2 text-zinc-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Collision Repair</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Paint & Refinishing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Dent Removal</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Insurance Claims</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Towing Assistance</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-2 text-zinc-400">
                            <li>5450 Gulfton St, Houston, TX 77081</li>
                            <li>(713) 667-4888</li>
                            <li>bodyshop@houstoncardirect.com</li>
                        </ul>
                    </div>

                    {/* Newsletter Removed as requested */}

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black py-6 border-t border-white/5">
                <div className="container mx-auto px-4 text-center text-xs text-zinc-600 uppercase tracking-widest">
                    &copy; 2025 Heritage Paint & Body. All Rights Reserved.
                </div>
            </div>
        </footer >
    )
}
