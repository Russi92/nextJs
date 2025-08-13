import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Welcome home page</h1>

      <Link href="/about">About</Link> <br />
      <Link href="/products">Products</Link> <br />
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>

    </div>
  );
}


// شرحهم في صفحة المقالات articles
// <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
//<Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
