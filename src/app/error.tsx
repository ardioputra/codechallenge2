"use client"

export default function Error() {
  return (
    <div className="text-center">
      <h1 className="text-9xl font-bold pb-6 max-[600px]:text-5xl">ERROR :/</h1>
      <h1 className="text-7xl pb-6 max-[600px]:text-3xl">
        There's something wrong with connection.
      </h1>
      <p className="text-gray-500 pb-6 text-xl">
        please reload or contact the administrator.
      </p>
    </div>
  );
}
