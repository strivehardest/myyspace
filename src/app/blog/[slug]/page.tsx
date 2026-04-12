// pages/blog/[slug].tsx
// File must be at: src/pages/blog/[slug].tsx  (or pages/blog/[slug].tsx if no src dir)


import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default function BlogPost({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();
  const related = blogs.filter((b) => b.slug !== params.slug).slice(0, 2);

  return (
    <>
      <GoogleAnalytics />
      {/* Metadata API should be used for SEO in App Router */}
      <Header />
      <main className="min-h-screen bg-[#FAF7F4]">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] w-full">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:px-16 md:pb-14 max-w-4xl mx-auto w-full left-0 right-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#C9A96E] text-sm mb-6 transition-colors w-fit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Articles
            </Link>
            <span className="inline-block bg-[#C9A96E] text-[#1C1712] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
              {blog.category}
            </span>
            <h1 className="text-white font-serif text-3xl md:text-5xl font-light leading-tight max-w-3xl">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 mt-5 text-white/60 text-xs">
              <span>{blog.author}</span>
              <span>·</span>
              <span>{blog.date}</span>
              <span>·</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-6 py-14">
          <p className="text-[#4A3C30] text-lg md:text-xl leading-relaxed font-light mb-8 border-l-4 border-[#C9A96E] pl-6">
            {blog.excerpt}
          </p>
          <article
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-headings:text-[#1C1712] prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#EDE8E2] prose-h2:pb-2 prose-p:text-[#1C1712] prose-p:leading-relaxed prose-p:mb-5 prose-a:text-[#8B6914] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          {/* CTA */}
          <div className="mt-14 bg-[#1C1712] rounded-2xl p-8 md:p-10 text-center">
            <p className="text-[#C9A96E] text-xs uppercase tracking-widest mb-3">
              Visit Our Showroom
            </p>
            <h3 className="text-white font-serif text-2xl font-light mb-3">
              Experience Quality in Person
            </h3>
            <p className="text-[#A89880] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              Browse our full furniture collection at our Roseville, CA showroom.
              Our team is ready to help you find exactly what you need.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C9A96E] text-[#1C1712] text-sm font-semibold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[#B8934A] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        {/* Related Articles */}
        {related.length > 0 && (
          <section className="bg-white py-14">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="font-serif text-[#1C1712] text-2xl font-light mb-8">
                More Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex gap-5 bg-[#FAF7F4] rounded-xl overflow-hidden p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-28 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={r.coverImage}
                        alt={r.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[#C9A96E] text-xs font-semibold uppercase tracking-widest mb-1">
                        {r.category}
                      </span>
                      <h3 className="text-[#1C1712] font-serif text-base font-light leading-snug group-hover:text-[#8B6914] transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-[#9C8575] text-xs mt-2">{r.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppChat />
      <ScrollToTop />
    </>
  );
}