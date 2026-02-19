import ProductCard from "../components/ProductCard";
import fortanGold from "../assets/images/product-1.png";

function Products() {
  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center text-4xl section-title text-[#D4AF37] mb-6">
          Produk Kami
        </h2>

        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-16" />

        {/* CENTERED SINGLE PRODUCT */}
        <div className="flex justify-center">
          <ProductCard
            image={fortanGold}
            name="D’Magnus Fortan Gold"
            description="Karakter kuat dengan racikan rempah khas dan sentuhan premium."
            link="/product/fortan-gold"
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
