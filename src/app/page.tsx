import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");

  console.log({ "-------- DEBUG --------": { userAgent } });

  const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );

  console.log({ "-------- DEBUG --------": { todo } });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <pre>{JSON.stringify(userAgent, null, 2)}</pre>
      </main>
    </div>
  );
}
