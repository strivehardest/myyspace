// pages/blog/index.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";

export default function BlogIndex() {
  const [featured, ...rest] = blogs;

  return (
    <>
      <GoogleAnalytics />
      <Head>
        <title>Blog | MySpace Furniture – Roseville, CA</title>
        <meta
          name="description"
          content="Furniture buying guides, interior design trends, and home styling tips from MySpace Furniture in Roseville, CA."
        />
      </Head>
      <Header />

      <main className="min-h-screen bg-[#FAF7F4]">
        {/* Hero */}
        <section className="bg-[#1C1712] py-20 px-6 text-center">
          <p className="text-[#C9A96E] uppercase tracking-[0.25em] text-xs mb-4 font-medium">
            Our Journal
          </p>
          <h1 className="text-white font-serif text-4xl md:text-5xl font-light">
            Furniture &amp; Home Interiors
          </h1>
          <p className="mt-4 text-[#A89880] text-sm max-w-lg mx-auto leading-relaxed">
            Expert guides, trend reports, and styling inspiration to help you
            create a home you love.
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Featured Post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-16 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-80 md:h-[460px] w-full">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="inline-block bg-[#C9A96E] text-[#1C1712] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  {featured.category}
                </span>
                <h2 className="text-white font-serif text-2xl md:text-4xl font-light max-w-2xl leading-tight mb-3">
                  {featured.title}
                </h2>
                <p className="text-white/70 text-sm hidden md:block max-w-xl leading-relaxed">
                  {featured.excerpt}
                </p>
                <p className="text-white/50 text-xs mt-4">
                  {featured.date} &nbsp;·&nbsp; {featured.readTime}
                </p>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {rest.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[#C9A96E] text-xs font-semibold uppercase tracking-widest mb-3">
                    {blog.category}
                  </span>
                  <h2 className="font-serif text-[#1C1712] text-xl font-light leading-snug mb-3 group-hover:text-[#8B6914] transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-[#6B5A4A] text-sm leading-relaxed flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#EDE8E2]">
                    <span className="text-[#9C8575] text-xs">{blog.date}</span>
                    <span className="text-[#9C8575] text-xs">{blog.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppChat />
      <ScrollToTop />
    </>
  );
}