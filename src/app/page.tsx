"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { products, testimonials } from "./services/service";

export default function Home() {
  return (
    <div>
      <div id="hero" className="relative flex gap-24 mt-40">
        <div className="flex-1 flex-col gap-6">
          <h1 className="text-8xl">Your Technology Problem's Solution.</h1>
          <div className="text-xl pt-6">
            <ReactTyped
              strings={[
                "Web Development",
                "IoT Architecture",
                "Embedded System",
                "Machine Learning",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            ></ReactTyped>
            <p className="pt-6 text-justify text-sm">
              At OIDRA Solution, we specialize in leveraging cutting-edge
              technologies to drive innovation and solve complex challenges. Our
              mission is to empower businesses with transformative solutions in
              machine learning, web development, IoT architecture, and embedded
              systems. Through our expertise and dedication, we strive to be at
              the forefront of technological advancements, helping our clients
              stay ahead in today's rapidly evolving digital landscape.
            </p>
          </div>
          <div className="flex gap-5 pt-6">
            <Link
              href="/about"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Learn More
            </Link>
            <Link
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              href="/services"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image src="/fotohero.avif" width={500} height={500} alt="fotohero" />
        </div>
      </div>
      <div id="companyoverview" className="mt-48 text-center">
        <h2 className="text-4xl mb-6">Company Overview</h2>
        <div className="flex justify-center items-center">
          <Image
            src="/fotooverview.avif"
            width={900}
            height={434}
            alt="fotooverview"
            className="m-6"
          />
        </div>
        <p className="pl-6 pr-6 text-xl text-center">
          At OIDRA Solution, we pride ourselves on our rich history of
          delivering exceptional IT consulting services. With a team of highly
          skilled professionals and a culture of innovation, we have earned a
          reputation for excellence in the industry. Our commitment to quality
          and customer satisfaction drives everything we do, ensuring that our
          clients receive tailored solutions that meet their unique needs.
        </p>
      </div>
      <div id="product" className="mt-48 text-center">
        <h2 className="text-4xl mb-6">Products and Services</h2>
        <p className="pl-6 pr-6 text-xl text-center">
          Explore our comprehensive suite of services designed to propel your
          business forward:
        </p>
        <div className="mt-6 grid grid-flow-row gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div className="group relative">
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
                  <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-48 text-center">
        <section className="mb-32">
          <h2 className="mb-12 text-4xl mt-12">Testimonials</h2>
          <p className="pl-6 pr-6 mb-12 text-xl text-center">
            {" "}
            But don't just take our word for it. Hear what our satisfied clients
            have to say about working with OIDRA Solution:{" "}
          </p>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            {testimonials.map((testimonial) => (
              <div className="mb-12 md:mb-0">
                <div className="mb-6 flex justify-center">
                  <Image
                    src={testimonial.url}
                    width={100}
                    height={100}
                    alt="fototesti"
                    className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                  />
                </div>
                <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  {testimonial.position} from {testimonial.office}
                </h6>
                <p className="mb-4">
                  {testimonial.testi}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul className="mb-0 flex justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
