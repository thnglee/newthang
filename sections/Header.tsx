'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Interests', href: '/#interests' },
];

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
                {/* Unified Header Container - Pointer events auto */}
                <div className="pointer-events-auto flex items-center gap-8 px-4 md:pl-6 md:pr-1 py-1 bg-black/20 backdrop-blur-md border border-white/10 rounded-sm">

                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-tight text-white">
                        newthang
                        <span className="text-gold-accent">.</span>
                    </Link>

                    {/* Desktop Navigation Items */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors",
                                    pathname === item.href && "text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact Button */}
                    <Link
                        href="/#contact"
                        className="hidden md:block px-5 py-2 text-xs font-semibold text-black bg-gold-accent rounded-sm hover:bg-[#D4B58F] transition-colors uppercase tracking-wider"
                    >
                        Contact
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden px-4 py-2 text-sm text-white uppercase tracking-wider font-medium"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        Menu
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-obsidian flex flex-col items-center justify-center">
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        CLOSE
                    </button>

                    <nav className="flex flex-col items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-light text-white hover:text-gold-accent transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-8 px-8 py-3 bg-gold-accent text-black font-semibold uppercase tracking-widest text-sm rounded-sm"
                        >
                            Contact Me
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
