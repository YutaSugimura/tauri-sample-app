import { invoke } from "@tauri-apps/api/tauri";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    invoke("greet", { name: "World" }).then(console.log).catch(console.error);
  }, []);

  return (
    <main>
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </main>
  );
}
