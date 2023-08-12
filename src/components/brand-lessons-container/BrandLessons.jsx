import "./brand-lessons.css";
import Lessons from "./Lessons/Lessons";
import ShopByBrand from "../ShopByBrand/ShopByBrand";

export default function BrandLessons() {
  return (
    <section className="brands-and-lessons">
      <ShopByBrand></ShopByBrand>
      <Lessons></Lessons>
    </section>
  );
}
