"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-black text-white px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <h1 className="font-extrabold text-xl text-yellow-400">KARANG TARUNA</h1>
      <ul className="hidden md:flex gap-6 font-medium">
        <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-yellow-400 transition">About</Link></li>
        <li><Link href="/events" className="hover:text-yellow-400 transition">Events</Link></li>
        <li><Link href="/gallery" className="hover:text-yellow-400 transition">Gallery</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
      </ul>

      <button
        className="md:hidden text-yellow-400 text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-4 py-6 md:hidden">
          <li><Link href="/" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="/events" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Events</Link></li>
          <li><Link href="/gallery" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Gallery</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
