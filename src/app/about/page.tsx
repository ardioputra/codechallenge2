import History from "./components/history";
import Team from "./components/team";
import Culture from "./components/culture";

export default async function About() {
  return (
    <>
      <div className="mt-20 max-[600px]:mt-18">
        <History />
      </div>
      <div className="mt-40 max-[600px]:mt-10">
        <Team />
      </div>
      <div className="mt-40 max-[600px]:mt-0">
        <Culture />
      </div>
    </>
  );
}
