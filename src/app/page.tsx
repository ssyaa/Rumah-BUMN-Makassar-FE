import Hero from "@/app/components/Hero";
import Banner from "@/app/components/Banner"; // Tambahkan ini
import DisplayProduct from "@/app/components/DisplayProduct";
import Ekatalog from "@/app/components/E-Katalog";
import ReviewProduct from "@/app/components/Review";
import VisitRumahProduksi from "@/app/components/Visit";
import Live from "@/app/components/Tiktok";
import Informasi from "@/app/components/Irpem";
import Jobdesk from "@/app/components/Program";
import Footer from "@/app/components/Footer";
import Design from "@/app/components/Design";

export const metadata = {
    title: "Rumah BUMN - Beranda",
    description: "Halaman utama Rumah BUMN yang menampilkan program dan testimoni.",
};

export default function Home() {
    return (
        <div>
            <Hero />
            <Jobdesk />
            <DisplayProduct />
            <Ekatalog />
            <ReviewProduct />
            <VisitRumahProduksi/>
            <Live />
            <Design />
            <Informasi/>
            <Banner />
            <Footer />
        </div>
    );
}
