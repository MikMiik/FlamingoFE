import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "./SectionTitle";
import { routes } from "@/routes/routes";

const blogPosts = [
  {
    slug: "kinh-nghiem-du-lich-hai-tien-2024",
    title: "Kinh nghiệm du lịch Hải Tiến 2024 từ A-Z cho người mới",
    date: "15/05/2024",
    readTime: "5 phút đọc",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "an-gi-o-hai-tien",
    title: "Ăn gì ở Hải Tiến? Top 10 món ngon không thể bỏ lỡ",
    date: "10/05/2024",
    readTime: "4 phút đọc",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "dia-diem-check-in-hai-tien",
    title: "Top 10 địa điểm check-in đẹp nhất Hải Tiến 2024",
    date: "08/05/2024",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "dat-phong-flamingo-gia-tot",
    title: "Kinh nghiệm đặt phòng Flamingo Hải Tiến giá tốt nhất",
    date: "05/05/2024",
    readTime: "3 phút đọc",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
  },
];

export function BlogSection() {
  return (
    <section>
      <Container className="mt-8">
        <SectionTitle
          title="Cẩm nang du lịch"
          action="Xem tất cả bài viết"
          actionHref={routes.blog}
        />

        <div className="mt-4 grid gap-4 md:grid-cols-2 2xl:grid-cols-4 2xl:gap-5">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={routes.blogDetail(post.slug)}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_2px_12px_rgba(15,61,145,0.06)] transition hover:shadow-[0_4px_16px_rgba(15,61,145,0.10)]"
            >
              <div className="relative aspect-[1.5] overflow-hidden 2xl:aspect-[1.42]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                  sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 25vw"
                />
              </div>
              <div className="px-4 py-4 2xl:px-5">
                <h3 className="line-clamp-2 text-[17px] font-bold leading-7 text-foreground">
                  {post.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="size-4 text-primary/50" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="size-4 text-primary/50" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
