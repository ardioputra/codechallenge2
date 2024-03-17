import History from "./components/history";
import Team from "./components/team";
import Culture from "./components/culture";

export default async function About() {
  return (
    <>
      <div className="mt-20">
        <History />
      </div>
      <div className="mt-40">
        <Team />
      </div>
      <div className="mt-40">
        <Culture />
      </div>
    </>
  );
}
