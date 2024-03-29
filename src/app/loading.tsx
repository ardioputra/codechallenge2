export default function Loading() {
  return (
    <div className="text-center">
      <h1 className="text-9xl font-bold pb-6 max-[600px]:text-5xl">
        Loading
      </h1>
      <h1 className="text-7xl pb-6 max-[600px]:text-3xl">
        Wait for fetching data
      </h1>
      <p className="text-gray-500 pb-6 text-xl">
        if there is no changes, just reload.
      </p>
    </div>
  );
}
