export default function Contact() {
  return (
    <section className="p-8 bg-gradient-to-b from-purple-900 to-black min-h-screen text-white flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12 border-b-4 border-yellow-500 inline-block">
        Kontak Karang Taruna
      </h2>

      <div className="grid gap-6 w-full max-w-2xl">
        <div className="bg-white/10 p-6 rounded-xl shadow hover:shadow-yellow-400/30 transition">
          <h3 className="font-semibold text-lg text-yellow-300 mb-2">📍 Alamat</h3>
          <p className="text-gray-200">
            Jl. Letjen Sutoyo IV, Kel. Lowokwaru, Kec. Lowokwaru
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow hover:shadow-pink-400/30 transition">
          <h3 className="font-semibold text-lg text-yellow-300 mb-2">📸 Instagram</h3>
          <a
            href="https://www.instagram.com/karang.taruna.rw05?igsh=MXAwdjdkNjk4aTEwYg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 font-medium hover:underline"
          >
            @karang.taruna.rw05
          </a>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow hover:shadow-purple-400/30 transition">
          <h3 className="font-semibold text-lg text-yellow-300 mb-2">🎵 TikTok</h3>
          <a
            href="https://www.tiktok.com/@lowokwaru05?_t=ZS-8zByo88Vep5&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 font-medium hover:underline"
          >
            @lowokwaru05
          </a>
        </div>
      </div>
    </section>
  );
}
