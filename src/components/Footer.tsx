import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-black text-white py-8 mt-12">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-yellow-400 font-extrabold text-xl">Karang Taruna PANCASONA</h2>
          <p className="text-sm mt-2 text-gray-300">
            Wadah generasi muda RW 05 Lowokwaru untuk berkarya, bersatu, dan membangun harapan.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-yellow-400">Alamat</h3>
          <p className="text-sm">Jl. Letjen Sutoyo IV, Lowokwaru</p>
          <p className="text-sm">Malang, Jawa Timur</p>
        </div>

        <div>
          <h3 className="font-semibold text-yellow-400">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <Link href="https://www.instagram.com/karang.taruna.rw05" target="_blank" className="hover:text-pink-500">
              Instagram
            </Link>
            <Link href="https://www.tiktok.com/@lowokwaru05" target="_blank" className="hover:text-pink-500">
              TikTok
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Karang Taruna PANCASONA. All rights reserved.
      </div>
    </footer>
  );
}
