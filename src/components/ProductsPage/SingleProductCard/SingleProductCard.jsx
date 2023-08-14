import { useNavigate } from "react-router-dom";
import "./single-product-card.css";

export default function SingleProductCard(props) {
  const navigate = useNavigate();

  const navigateProductPage = () => {
    navigate(`/product/${props.id}`);
  };
  return (
    <>
      <div className="single-product-card">
        <img
          src="https://images.unsplash.com/photo-1558098329-a11cff621064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3VpdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt={props.name}
          onClick={navigateProductPage}
        />
        <div onClick={navigateProductPage} className="name-click">
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>

        <button>Buy Now</button>
        <br />
        <button>Add to Cart</button>
      </div>
    </>
  );
}
