"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import Products from "./services/components/products";
import Testimonials from "./services/components/testimonials";

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
              href="https://github.com/ardioputra"
              target="_blank"
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
      <div className="mt-48">
        <Products />
      </div>
      <div className="mt-48 text-center">
        <Testimonials />
        <div>
          <h1 className="font-bold text-5xl pb-6">
            Ready to Transform Your Business?
          </h1>
          <p className="text-gray-500">
            Discover how OIDRA Solution can help you unlock your full potential.
          </p>
          <div className="flex gap-5 pt-6 justify-center">
            <Link
              href="/about"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Services
            </Link>
          </div>
          <p className="pt-6 text-gray-500">
            Partner with OIDRA Solution today and embark on a journey of
            innovation and success. Let's shape the future together.
          </p>
        </div>
      </div>
    </div>
  );
}
