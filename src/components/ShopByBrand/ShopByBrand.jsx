import "./shop-by-brand.css";
import BrandCards from "./BrandCards/BrandCards";
import { brands } from "./brands";

export default function () {
  return (
    <section className="shop-by-brand">
      <h2>Shop by Brand</h2>
      <div className="brand-container">
        {brands.map((brand) => {
          return <BrandCards brand={brand.name} img={brand.img} />;
        })}
      </div>
    </section>
  );
}
