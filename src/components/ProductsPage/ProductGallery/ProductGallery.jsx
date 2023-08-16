import { useLoaderData, useParams } from "react-router-dom";
import SingleProductCard from "../SingleProductCard/SingleProductCard";
import "./product-gallery.css";

export default function ProductGallery() {
  const products = useLoaderData();
  const { filter, typeFilter } = useParams();
  const filteredProducts = () => {
    if (filter === typeFilter) {
      return products.products;
    } else {
      return products.products.filter((item) => {
        return (
          (filter === "all" ? true : item.brand === filter) &&
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
