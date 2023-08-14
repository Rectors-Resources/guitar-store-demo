import { useLoaderData, useParams } from "react-router-dom";
import SingleProductCard from "../SingleProductCard/SingleProductCard";
import "./product-gallery.css";

export default function ProductGallery() {
  const products = useLoaderData();
  const { filter } = useParams();
  console.log(`${filter}`)
  const filteredProducts = () => {
    if (filter !== "all")
      return products.products.filter((list) => {
        return list.brand === filter;
      });
      else {
        return products.products
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
