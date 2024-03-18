import Image from "next/image";

export default function History() {
  return (
    <div className="text-center justify-center">
      <h1 className="text-8xl pb-10 font-bold max-[600px]:text-5xl">OUR HISTORY</h1>
      <div className="pb-10 flex justify-center items-center">
      <Image alt="gedung" src="/gedung.avif" width={800} height={800}/>
      </div>
      <p>
        At OIDRA Solution, we embarked on our journey with a vision to
        revolutionize the tech industry. Established in 2022, our company has
        since evolved into a trusted partner for businesses seeking innovative
        IT solutions. From our humble beginnings to our current standing, every
        milestone has been a testament to our commitment to excellence and
        dedication to client satisfaction.
      </p>
    </div>
  );
}
