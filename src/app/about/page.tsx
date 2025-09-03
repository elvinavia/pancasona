export default function AboutPage() {
  return (
    <section className="space-y-8 p-8 bg-gradient-to-b from-purple-900 to-black rounded-2xl shadow-lg text-white max-w-4xl mx-auto my-10">

      <h2 className="text-4xl font-extrabold text-yellow-400 border-b-4 border-yellow-500 pb-3">
        Tentang Karang Taruna "PANCASONA"
      </h2>

      <p className="leading-relaxed text-gray-200">
        Karang Taruna RW 05 <strong>PANCASONA</strong> adalah organisasi kepemudaan yang dibentuk oleh 
        masyarakat sebagai wadah generasi muda untuk mengembangkan diri, tumbuh, dan berkembang atas dasar 
        kesadaran serta tanggung jawab sosial. Organisasi ini berorientasi pada tercapainya kesejahteraan 
        sosial bagi masyarakat.
      </p>

      <p className="leading-relaxed text-gray-200">
        "PANCASONA" di tengah hiruk-pikuk kehidupan, para pemuda RW 05 Lowokwaru bangkit dengan kompak 
        dan semangat membara yang tak akan pernah padam. Bukan hanya pewaris, kami adalah pejuang harapan, 
        dengan hati yang tulus, menjalin persatuan dan impian. Pesona Pemuda yang tak pernah pudar, karena 
        kami adalah cahaya di tengah zaman.
      </p>

      <div className="bg-white/10 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-yellow-300 mb-2">Visi</h3>
        <p className="text-gray-200">
          Menjadi organisasi pemuda yang solid, kreatif, dan bermanfaat bagi masyarakat sekitar.
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-yellow-300 mb-2">Misi</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Mengadakan kegiatan sosial dan lingkungan.</li>
          <li>Mendorong kreativitas generasi muda.</li>
          <li>Menjadi wadah aspirasi pemuda dan masyarakat.</li>
        </ul>
      </div>
    </section>
  );
}
