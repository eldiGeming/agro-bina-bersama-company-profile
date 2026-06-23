import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 py-28 bg-[#C7E7FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div>
            <p className="uppercase tracking-[4px] text-red-600 text-sm font-medium">Produk Kami</p>

            <h2 className="text-5xl font-bold text-[#1D3557] mt-3 leading-tight">
              Katalog Produk
              <br />
              Premium
            </h2>
          </div>

          <div className="flex items-end">
            <p className="text-[#1D3557] leading-relaxed text-lg">
              Produk ayam broiler berkualitas tinggi yang diproses secara halal, higienis, dan memenuhi standar mutu untuk kebutuhan rumah tangga, UMKM, restoran, katering, hingga industri pangan.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} title={product.title} subtitle={product.subtitle} image={product.image} badge={product.badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
