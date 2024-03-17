import Link from "next/link";

export default function Culture() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold pb-10 pt-10">Culture</h1>
      <p className="text-gray-50 text-xl mb-10">
        At OIDRA Solution, our culture is the cornerstone of our success. We
        foster a collaborative and inclusive environment where creativity
        flourishes, ideas are valued, and diversity is celebrated. Our core
        values of integrity, innovation, and excellence guide everything we do,
        from client interactions to internal collaborations. We believe in
        fostering a culture of continuous learning and growth, empowering our
        team members to reach their full potential and deliver unparalleled
        solutions to our clients.
      </p>
      <Link href="/services" className="text-2xl hover:text-purple-300">
        Discover the OIDRA Solution difference - where passion meets innovation.
      </Link>
    </div>
  );
}
