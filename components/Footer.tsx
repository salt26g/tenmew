import { client } from "@/lib/microcms";

function Header() {
  return <h1>会社名</h1>;
}

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
  });

  return (
    <main className="hero">
      <Header />

      <p>トップページ</p>

      <h2>お知らせ</h2>

      {data.contents.map((item: any) => (
        <article key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </article>
      ))}
    </main>
  );
}