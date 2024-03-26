import Link from "next/link";
import { serviceDetail } from "./types/servicedetail";
import Image from "next/image";

export default function Service({ params }: { params: { service: string } }) {
  const content = serviceDetail.find((x) => x.id == params.service);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold pt-10 pb-10">{content?.name}</h1>
        <div className="flex justify-center items-center">
          <Image
            alt="content"
            src={content?.image || ""}
            width={500}
            height={100}
            loading="eager"
          />
        </div>
        <p className="text-xl pt-10 pb-10 ">{content?.desc}</p>
      </div>
      <h1 className="text-center text-3xl font-bold">
        Our {content?.name} Services
      </h1>
      <div className="mt-6 grid grid-flow-row gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-3">
        {content?.solution.map((detail) => (
          <div className="group relative" key={detail.name}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                src={detail.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "200%", height: "100%" }}
                alt="fotoitems"
                loading="eager"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-200">
                  <a href="https://www.linkedin.com/in/ardioputra/">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {detail.name}
                  </a>
                </h3>
                <h3 className="text-sm text-gray-200">
                  <a href="https://www.linkedin.com/in/ardioputra/">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {detail.price}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500 text-justify">
                  {detail.jobdesc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <h1 className="font-bold text-5xl pb-6 pt-10">
          What if there is no product you are desired?
        </h1>
        <p className="text-gray-500">
          Just contact us, tell us about your masterplan projects!
        </p>
        <p className="text-gray-500">
          Let us makes your dream project comes true!
        </p>
        <div className="flex gap-5 pt-6 justify-center">
          <Link
            href="https://www.linkedin.com/in/ardioputra/"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
