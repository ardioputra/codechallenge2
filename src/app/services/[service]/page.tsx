import { serviceDetail } from "./types/servicedetail";
import Image from "next/image";

export default function Service({ params }: { params: {service: string}}) {
  const content = serviceDetail.find((x) => x.id == params.service);
  console.log(content);

  return (
    <div>
      <h1>{content?.name}</h1>
      <Image alt="content" src={content?.image} width={500} height={100}/>
      <p>{content?.desc}</p>
    </div>
  );
}
