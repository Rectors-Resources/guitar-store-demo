import { useNavigate } from "react-router-dom";
import "./brand-cards.css";

export default function BrandCards(props) {
  const navigate = useNavigate()
  return (
    <div className="brand-card">
      <img src={props.img} alt={`Multiple ${props.brand} guitars`} className="brand-img" />
      <p className="img-text" onClick={() => {
            navigate(`/products/${props.brand}/all`)
          }}>{props.brand}</p>
    </div>
  );
}
