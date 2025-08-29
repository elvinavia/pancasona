import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Karang Taruna",
  description: "Website resmi Karang Taruna PANCASONA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-100 text-gray-800">
        <Navbar />
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
