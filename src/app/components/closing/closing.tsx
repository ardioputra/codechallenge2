import Link from "next/link";

export default function Closing() {
  return (
    <div className="text-center">
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
        Partner with OIDRA Solution today and embark on a journey of innovation
        and success. Let's shape the future together.
      </p>
    </div>
  );
}
