"use client";

import { useParameterStore } from "@statsig/react-bindings";

export default function Home() {
  const store = useParameterStore("feature-dashboard-create-row-store");
  const cards = store.get("cards", ["default value"]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <pre>{JSON.stringify(cards, null, 2)}</pre>
      </main>
    </div>
  );
}
