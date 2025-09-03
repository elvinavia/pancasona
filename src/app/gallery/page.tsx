import Image from "next/image";

const galleryImages = [
  { src: "/foto1.jpg", alt: "Anak Karang Taruna 1", title: "Foto 1" },
  { src: "/foto2.jpg", alt: "Anak Karang Taruna 2", title: "Foto 2" },
  { src: "/foto3.jpg", alt: "Anak Karang Taruna 3", title: "Foto 3" },
  { src: "/foto4.jpg", alt: "Anak Karang Taruna 4", title: "Foto 4" },
  { src: "/foto5.jpg", alt: "Anak Karang Taruna 5", title: "Foto 5" },
  { src: "/foto6.jpg", alt: "Anak Karang Taruna 6", title: "Foto 6" },
  { src: "/foto7.jpg", alt: "Anak Karang Taruna 7", title: "Foto 7" },
  { src: "/foto8.jpg", alt: "Anak Karang Taruna 8", title: "Foto 8" },
  { src: "/foto9.jpg", alt: "Anak Karang Taruna 9", title: "Foto 9" },
  { src: "/foto10.jpg", alt: "Anak Karang Taruna 10", title: "Foto 10" },
  { src: "/fotbar.jpg", alt: "Anak Karang Taruna 11", title: "Fotbar" },
];

export default function Gallery() {
  return (
    <section className="p-8 bg-gradient-to-b from-purple-900 to-black min-h-screen text-white">
      <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12 border-b-4 border-yellow-500 inline-block">
        Gallery Anak Karang Taruna
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-yellow-500/40 transition duration-300"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={250}
              className="object-cover w-full h-56"
            />
            <p className="text-center p-3 font-medium text-gray-200 bg-black/30">
              {img.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
