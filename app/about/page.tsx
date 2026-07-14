import { client } from "@/lib/microcms";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/ContactLead";

function Header() {
  return <h1>会社名</h1>;
}

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
  });

  return (
    <main>
      <Contact />
    </main>
  );
}