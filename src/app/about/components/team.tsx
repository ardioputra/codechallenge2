import Image from "next/image";
import { ITeams } from "../types/teams.interface";
import { crucialTeams } from "../types/teams";

async function getData() {
  try {
    const dynamicData = await fetch(
      `https://randomuser.me/api/?results=3&nat=au`,
      {
        next: { revalidate: 10 },
      }
    );
    const response = await dynamicData.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}

export default async function Team() {
  const { results } = await getData();
  return (
    <div className="text-center">
      <h1 className="mb-10 text-4xl font-bold">
        Meet the brilliant minds behind OIDRA Solution:
      </h1>
      <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
        {results.map((res: ITeams, index: number) => {
          return (
            <div className="mb-12 md:mb-0" key={res.login.uuid}>
              <div className="mb-6 flex justify-center">
                <Image
                  src={res.picture.large}
                  width={100}
                  height={100}
                  alt="foto team"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                  loading="eager"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold">
                {res.name.title} {res.name.first} {res.name.last}
              </h5>
              <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                {crucialTeams[index].position}
              </h6>
              <p className="mb-4 text-gray-500">{crucialTeams[index].desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
