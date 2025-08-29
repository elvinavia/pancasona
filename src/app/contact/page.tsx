export default function Contact() {
  return (
    <section className="p-5 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Kontak Karang Taruna</h2>

      <div className="flex flex-col gap-4 text-center">
        <div>
          <h3 className="font-semibold">Alamat</h3>
          <p>Jl. Letjen Sutoyo IV, Kel. Lowokwaru, Kec. Lowokwaru</p>
        </div>

        <div>
          <h3 className="font-semibold">Instagram</h3>
          <a
            href="https://www.instagram.com/karang.taruna.rw05?igsh=MXAwdjdkNjk4aTEwYg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            @karang.taruna.rw05
          </a>
        </div>

        <div>
          <h3 className="font-semibold">TikTok</h3>
          <a
            href="https://www.tiktok.com/@lowokwaru05?_t=ZS-8zByo88Vep5&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            @lowokwaru05
          </a>
        </div>
      </div>
    </section>
  );
}
