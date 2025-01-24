import Hero from "@/app/components/Hero";
import Testimoni from "@/app/components/Testimoni";
import Banner from "@/app/components/Banner"; // Tambahkan ini

export const metadata = {
    title: "Rumah BUMN - Beranda",
    description: "Halaman utama Rumah BUMN yang menampilkan program dan testimoni.",
};

export default function Home() {
    return (
        <div>
            <Hero />
            <Testimoni />
            <Banner />
        </div>
    );
}
