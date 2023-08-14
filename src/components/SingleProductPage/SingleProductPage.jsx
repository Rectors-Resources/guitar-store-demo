import "./single-product-page.css";
import { useLoaderData, useParams } from "react-router-dom";

export default function SingleProductPage() {
  const { id } = useParams();
  const products = useLoaderData();
  const productData = products.products.filter((item) => {
    return item.id == id;
  });
  const product = productData[0]

  return (
    <div className="product-container">
    <img src="https://images.unsplash.com/photo-1558098329-a11cff621064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3VpdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
      {
        <div className="item-details">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button>Buy Now</button>
          <br />
          <button>Add to Cart</button>
        </div>
      }
    </div>
  );
}
