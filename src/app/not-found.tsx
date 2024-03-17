import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-9xl font-bold pb-6">404</h1>
      <h1 className="text-7xl pb-6">Not Found</h1>
      <p className="text-gray-500 pb-6 text-xl">the page you are searching does not exist</p>
    </div>
  );
}
