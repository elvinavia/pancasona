import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center p-5">
      <Image
        src="/logo.jpg"
        alt="Logo Karang Taruna"
        width={150}
        height={150}
        className="mx-auto"
      />

      <h1 className="text-3xl font-bold mt-4">Karang Taruna PANCASONA</h1>
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
