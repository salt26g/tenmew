import { client } from "@/lib/microcms";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/AboutLead";
import Service from "@/components/ServiceLead";
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
      <Hero />
      <About />
      <Service />
      <Contact />
    </main>
  );
}