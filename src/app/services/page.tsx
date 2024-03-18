import Products from "./components/products";
import Testimonials from "./components/testimonials";

export default function Services() {
  return (
    <>
      <div className="mt-36 max-[600px]:mt-16">
        <Products />
      </div>
      <div className="mt-48 max-[600px]:mt-0">
        <Testimonials />
      </div>
    </>
  );
}
