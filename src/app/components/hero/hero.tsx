"use client";

import { ReactTyped } from "react-typed";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero max-x-6xl mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col gap-y-10">
          <div className="text-xl pt-6 pr-6">
            <h1 className="text-8xl pb-8 font-bold max-[600px]:text-6xl max-[600px]:w-80 max-[385px]:text-5xl max-[385px]:w-56 ">Your Technology Problem's Solution.</h1>
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
              className="max-[600px]:text-sm"
            ></ReactTyped>
            <p className="pt-6 text-justify text-sm text-gray-500 ">
              At OIDRA Solution, we specialize in leveraging cutting-edge
              technologies to drive innovation and solve complex challenges. Our
              mission is to empower businesses with transformative solutions in
              machine learning, web development, IoT architecture, and embedded
              systems. Through our expertise and dedication, we strive to be at
              the forefront of technological advancements, helping our clients
              stay ahead in today's rapidly evolving digital landscape.
            </p>
          </div>
          <div className="flex gap-5 pt-2 max-[385px]:flex-col max-[385px]:text-center">
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
          <Image loading="eager" src="/fotohero.avif" width={2500} height={1000} alt="fotohero" className="max-[473px]:w-[300px]"/>
        </div>
      </div>
    </div>
  );
}
