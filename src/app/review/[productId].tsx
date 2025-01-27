import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firestore } from '@/../firebase-config';
import { doc, getDoc } from "firebase/firestore";

const ReviewPage = () => {
    const router = useRouter();
    const { productId } = router.query;  // Mendapatkan productId dari URL
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (productId) {
                try {
                    const productRef = doc(firestore, "products", productId as string); // Ambil produk berdasarkan productId
                    const productSnap = await getDoc(productRef);

                    if (productSnap.exists()) {
                        setProduct(productSnap.data());
                    } else {
                        console.log("Produk tidak ditemukan");
                    }
                } catch (error) {
                    console.error("Error fetching product details: ", error);
                }
            }
        };

        fetchProductDetails();
    }, [productId]);  // Panggil ulang jika productId berubah

    if (!product) {
        return <p>Memuat detail produk...</p>;
    }

    return (
        <div>
            <h1>Review Produk {product.namaBrand}</h1>
            <p>{product.descProduct}</p>
            <p>Harga: Rp {product.price}</p>
            <img src={product.fotoProduk || "/placeholder.png"} alt={product.namaBrand} />
            {/* Tambahkan review dan informasi lain yang sesuai */}
        </div>
    );
};

export default ReviewPage;
