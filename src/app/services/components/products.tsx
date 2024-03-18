import Image from "next/image";
import { products } from "../service";

export default function Products() {
  return (
    <div id="product" className="text-center">
      <h2 className="text-4xl mb-6 font-bold">OUR PRODUCTS</h2>
      <p className="pl-6 pr-6 text-xl text-center text-gray-500">
        Explore our comprehensive suite of services designed to propel your
        business forward:
      </p>
      <div className="mt-6 grid grid-flow-row gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div className="group relative" key={product.title}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                src={product.url}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "200%", height: "100%" }}
                alt="fotoitems"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="/services">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {product.title}
                  </a>
                </h3>
                <h3 className="text-sm text-gray-700">
                  <a href="/services">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {product.price}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
