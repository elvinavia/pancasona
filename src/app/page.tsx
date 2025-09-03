import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center p-5">
      <Image
        src="/logo.jpg"import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-900 to-black min-h-screen text-white">
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8 py-20">
        <Image
          src="/logo.jpg"
          alt="Logo Karang Taruna"
          width={200}
          height={200}
          className="object-contain mb-6 md:mb-0 md:mr-10"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Karang Taruna <span className="text-yellow-400">PANCASONA</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed">
            Wadah generasi muda RW 05 Lowokwaru untuk mengembangkan diri, 
            tumbuh, dan berkarya bersama. Dengan semangat membara, 
            kami berkomitmen membangun persatuan, harapan, dan kesejahteraan sosial.
          </p>

          <a href="#kegiatan">
            <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
              Lihat Kegiatan
            </button>
          </a>
        </div>
      </section>

      <section id="kegiatan" className="px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Program Kegiatan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Bakti Sosial</h3>
            <p>
              Membantu masyarakat melalui kegiatan gotong royong, 
              santunan, dan aksi sosial lainnya.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Pelatihan</h3>
            <p>
              Membekali generasi muda dengan keterampilan praktis 
              seperti teknologi, kewirausahaan, dan public speaking.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

        alt="Logo Karang Taruna"
        width={150}
        height={150}
        className="mx-auto"
      />

      <h1 className="text-3xl font-bold mt-4">KARANG TARUNA PANCASONA</h1>
      <br />

      <p className="mt-2 text-white-700">
        Karang Taruna RW 05 <strong>PANCASONA</strong> adalah organisasi kepemudaan
        yang dibentuk masyarakat sebagai wadah generasi muda untuk
        mengembangkan diri, tumbuh, dan berkembang atas dasar kesadaran serta
        tanggung jawab sosial, yang berorientasi pada kesejahteraan sosial bagi
        masyarakat.
        <br />
        <br />
        &quot;PANCASONA&quot; di tengah hiruk, para pemuda RW 05 Lowokwaru bangkit dengan
        kompak dan semangat membara serta tak akan pernah padam. Bukan hanya
        pewaris, kami adalah pejuang harapan, dengan hati yang tulus, menjalin
        persatuan dan impian.
      </p>
      <br />
    </section>
  );
}
