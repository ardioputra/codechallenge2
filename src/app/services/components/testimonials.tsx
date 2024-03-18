import { testimonials } from "../service";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="text-center">
      <h2 className="mb-12 text-4xl mt-12 font-bold">TESTIMONIALS</h2>
      <p className="pl-6 pr-6 mb-12 text-xl text-center">
        {" "}
        But don't just take our word for it. Hear what our satisfied clients
        have to say about working with OIDRA Solution:{" "}
      </p>

      <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
        {testimonials.map((testimonial) => (
          <div className="mb-12 md:mb-0" key={testimonial.name}>
            <div className="mb-6 flex justify-center">
              <Image
                src={testimonial.url}
                width={100}
                height={100}
                alt="fototesti"
                className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                loading="eager"
              />
            </div>
            <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
              {testimonial.position} from {testimonial.office}
            </h6>
            <p className="mb-4 text-gray-500">
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
  );
}
