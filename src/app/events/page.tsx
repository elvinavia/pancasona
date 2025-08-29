import Image from "next/image";
import { events } from "@/data/events";

export default function Events() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Kegiatan Karang Taruna</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <div key={i} className="border rounded shadow overflow-hidden">
            <Image
              src={event.image}
              alt={event.name}
              width={300}
              height={150}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p className="text-sm text-blue-600">{event.date}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
