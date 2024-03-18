import Overview from "./components/overview/overview";
import Closing from "./components/closing/closing";
import Hero from "./components/hero/hero";
import Products from "./services/components/products";
import Testimonials from "./services/components/testimonials";

export default function Home() {
  return (
    <div>
      <div className="mt-4 max-[600px]:mt-0">
        <Hero />
      </div>
      <div className="mt-48 max-[600px]:mt-0">
        <Overview />
      </div>
      <div className="mt-[220px] max-[600px]:mt-10">
        <Products />
      </div>
      <div className="mt-[260px] max-[600px]:mt-10">
        <Testimonials />
      </div>
      <div className="mt-[50px]">
        <Closing />
      </div>
    </div>
  );
}
