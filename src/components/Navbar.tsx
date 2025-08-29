import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 text-white p-7 flex justify-between items-center">
      <h1 className="font-bold">Karang Taruna</h1>
      <ul className="flex gap-5">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
