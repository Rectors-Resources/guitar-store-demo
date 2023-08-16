import { useLoaderData, useParams } from "react-router-dom";
import SingleProductCard from "../SingleProductCard/SingleProductCard";
import "./product-gallery.css";

export default function ProductGallery() {
  const products = useLoaderData();
  const { brandFilter, typeFilter } = useParams();
  const filteredProducts = () => {
    if (brandFilter === typeFilter) {
      return products.products;
    } else {
      return products.products.filter((item) => {
        return (
          (brandFilter === "all" ? true : item.brand === brandFilter) &&
          (typeFilter === "all" ? true : item.type === typeFilter)
        );
      });
    }
  };
  return (
    <div className="products">
      {filteredProducts().map((item, key) => {
        return (
          <SingleProductCard
            name={item.name}
            price={item.price}
            id={item.id}
            key={key}
          />
        );
      })}
    </div>
  );
}
