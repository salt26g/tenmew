import type { Metadata } from "next";
import { client } from "@/lib/microcms";
import Hero from "@/components/Hero";
import About from "@/components/AboutLead";
import Service from "@/components/ServiceLead";
import Contact from "@/components/ContactLead";

export const metadata: Metadata = {
  title:
    "株式会社テンミュー｜人生に寄り添うキャリア・転職支援サービス",

  description:
    "テンミューは、「何それ面白そう。」があふれる社会を目指し、一人ひとりの可能性を行動へつなげるキャリア支援会社です。",

  alternates: {
    canonical: "https://tenmew.jp",
  },

  openGraph: {
    title:
      "株式会社テンミュー｜人生に寄り添うキャリア・転職支援サービス",

    description:
      "テンミューは、「何それ面白そう。」があふれる社会を目指し、一人ひとりの可能性を行動へつなげるキャリア支援会社です。",

    url: "https://tenmew.jp",

    images: [
      {
        url: "/img/basic/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社テンミュー",
      },
    ],
  },
};

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