import Image from "next/image";

export default function Overview() {
  return (
    <div id="companyoverview" className="text-center">
      <h2 className="text-4xl mb-2 font-bold">WHO IS OIDRA SOLUTION?</h2>
      <div className="flex justify-center items-center">
        <Image
          src="/home/fotooverview.avif"
          width={900}
          height={434}
          alt="fotooverview"
          className="m-6"
          loading="eager"
        />
      </div>
      <p className="pl-6 pr-6 pt-10 text-xl text-center text-gray-500">
        At OIDRA Solution, we pride ourselves on our rich history of delivering
        exceptional IT consulting services. With a team of highly skilled
        professionals and a culture of innovation, we have earned a reputation
        for excellence in the industry. Our commitment to quality and customer
        satisfaction drives everything we do, ensuring that our clients receive
        tailored solutions that meet their unique needs.
      </p>
    </div>
  );
}
