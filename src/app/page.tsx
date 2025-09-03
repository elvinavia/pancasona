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

      <h1 className="text-3xl font-bold mt-4">Selamat Datang</h1>
      <p className="mt-2 text-gray-600">
        Website resmi Karang Taruna Pancasona RW 05 Lowokwaru.
      </p>

    </section>
  );
}
