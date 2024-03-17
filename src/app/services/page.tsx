import Products from "./components/products";
import Testimonials from "./components/testimonials";

export default function Services() {
  return (
    <>
      <div className="mt-36">
        <Products />
      </div>
      <div className="mt-48">
        <Testimonials />
      </div>
    </>
  );
}
