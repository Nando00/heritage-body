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
                                {/* Using Logo instead of text if possible, or just updating text */}
                                <span className="text-lg font-bold tracking-tight text-white uppercase">
                                    Heritage <span className="text-primary">Collision</span>
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

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold uppercase tracking-wider">Newsletter</h4>
                        <p className="text-zinc-500 text-sm">Subscribe for updates and offers.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Your Email" className="bg-zinc-900 border-none text-white text-sm px-4 py-2 w-full focus:ring-1 focus:ring-primary outline-none" />
                            <button className="bg-primary hover:bg-primary/90 px-4 py-2 text-white font-bold uppercase text-xs">Join</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black py-6 border-t border-white/5">
                <div className="container mx-auto px-4 text-center text-xs text-zinc-600 uppercase tracking-widest">
                    &copy; 2025 Heritage Collision Center. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
