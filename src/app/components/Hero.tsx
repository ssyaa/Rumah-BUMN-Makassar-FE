export default function Hero() {
    return (
        <section className="relative bg-blue-700 text-white py-20">
            <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4">Selamat Datang di</h2>
            <h3 className="text-5xl font-bold mb-6">RUMAH BUMN Makassar</h3>
            <p className="text-lg">
                Rumah BUMN merupakan wadah bagi langkah kolaborasi BUMN dalam membentuk Digital Economy
                Ecosystem melalui pembinaan bagi UKM untuk meningkatkan kapasitas dan kapabilitas UKM itu sendiri.
            </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-700 to-transparent">
            <img
                src="/map-indonesia.png"
                alt="Map"
                className="w-full h-full object-cover opacity-30"
            />
            </div>
        </section>
        );
    }