import { client } from "@/lib/microcms";
import Hero from "@/components/Hero";
import About from "@/components/AboutLead";
import Service from "@/components/ServiceLead";
import Contact from "@/components/ContactLead";

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