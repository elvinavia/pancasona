import Image from "next/image";
import { events } from "@/data/events";

export default function Events() {
  return (
    <section className="p-8 bg-gradient-to-b from-purple-900 to-black min-h-screen text-white">

      <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12 border-b-4 border-yellow-500 inline-block">
        Kegiatan Karang Taruna
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {events.map((event, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
          >

            <Image
              src={event.image}
              alt={event.name}
              width={300}
              height={150}
              className="object-cover w-full h-60"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold text-yellow-300">{event.name}</h3>
              <p className="text-sm text-gray-300">{event.date}</p>
              <p className="mt-3 text-gray-200">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
