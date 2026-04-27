import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Search,
  UtensilsCrossed,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { routes } from "@/routes/routes";

const breadcrumbItems = [{ label: "Cẩm nang du lịch" }];

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80";

const latestPosts = [
  {
    slug: "kinh-nghiem-du-lich-hai-tien-2024",
    title: "Kinh nghiệm du lịch Hải Tiến 2024 từ A-Z cho người mới",
    date: "15/05/2024",
    readTime: "5 phút đọc",
    excerpt: "Tất tần tật kinh nghiệm du lịch Hải Tiến từ phương tiện di chuyển, nơi ở, ăn uống đến...",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tag: "Kinh nghiệm du lịch",
  },
  {
    slug: "an-gi-o-hai-tien",
    title: "Ăn gì ở Hải Tiến? Top 10 món ngon không thể bỏ lỡ",
    date: "10/05/2024",
    readTime: "4 phút đọc",
    excerpt: "Khám phá những món đặc sản Hải Tiến tươi ngon, giá cả hợp lý mà bạn nhất định phải thử...",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    tag: "Ẩm thực",
  },
  {
    slug: "dia-diem-check-in-hai-tien",
    title: "Top 10 địa điểm check-in đẹp nhất Hải Tiến 2024",
    date: "08/05/2024",
    readTime: "6 phút đọc",
    excerpt: "Những địa điểm sống ảo cực đẹp tại Hải Tiến mà bạn không nên bỏ qua trong chuyến đi...",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    tag: "Địa điểm tham quan",
  },
  {
    slug: "dat-phong-flamingo-gia-tot",
    title: "Kinh nghiệm đặt phòng Flamingo Hải Tiến giá tốt nhất",
    date: "05/05/2024",
    readTime: "4 phút đọc",
    excerpt: "Mẹo đặt phòng Flamingo Hải Tiến với giá ưu đãi, chọn căn đẹp, view biển và nhiều tiện ích...",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    tag: "Lưu trú",
  },
  {
    slug: "thoi-diem-di-hai-tien",
    title: "Nên đi Hải Tiến vào thời điểm nào đẹp nhất?",
    date: "02/05/2024",
    readTime: "3 phút đọc",
    excerpt: "Thời điểm lý tưởng để du lịch Hải Tiến, thời tiết, lễ hội và những lưu ý quan trọng...",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tag: "Kinh nghiệm du lịch",
  },
  {
    slug: "cho-hai-san-hai-tien",
    title: "Chợ hải sản Hải Tiến - Thiên đường hải sản tươi ngon",
    date: "30/04/2024",
    readTime: "5 phút đọc",
    excerpt: "Khám phá các chợ hải sản nổi tiếng ở Hải Tiến, mua hải sản tươi ngon với giá hấp dẫn...",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    tag: "Ẩm thực",
  },
];

const categories = [
  { label: "Kinh nghiệm du lịch", count: "12", icon: BookOpen },
  { label: "Ẩm thực", count: "08", icon: UtensilsCrossed },
  { label: "Địa điểm tham quan", count: "10", icon: MapPin },
  { label: "Lưu trú", count: "07", icon: BookOpen },
  { label: "Lễ hội & Sự kiện", count: "05", icon: CalendarDays },
  { label: "Mẹo du lịch", count: "06", icon: MapPin },
];

const popularPosts = [
  {
    slug: "dia-diem-check-in-hai-tien",
    title: "Top 10 địa điểm check-in đẹp nhất Hải Tiến 2024",
    date: "08/05/2024",
    views: "2.5k lượt xem",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&q=80",
  },
  {
    slug: "an-gi-o-hai-tien",
    title: "Ăn gì ở Hải Tiến? Top 10 món ngon không thể bỏ lỡ",
    date: "10/05/2024",
    views: "2.1k lượt xem",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
  },
  {
    slug: "dat-phong-flamingo-gia-tot",
    title: "Kinh nghiệm đặt phòng Flamingo Hải Tiến giá tốt nhất",
    date: "05/05/2024",
    views: "1.8k lượt xem",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=500&q=80",
  },
  {
    slug: "thoi-diem-di-hai-tien",
    title: "Nên đi Hải Tiến vào thời điểm nào đẹp nhất?",
    date: "02/05/2024",
    views: "1.6k lượt xem",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
  },
  {
    slug: "cho-hai-san-hai-tien",
    title: "Chợ hải sản Hải Tiến - Thiên đường hải sản tươi ngon",
    date: "30/04/2024",
    views: "1.2k lượt xem",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Cẩm nang du lịch Hải Tiến"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background/84 from-0% via-background/60 via-40% to-secondary/14 to-100% dark:from-background/70 dark:via-background/46 dark:to-secondary/20" />
        </div>
        <Container className="relative py-8 sm:py-9 lg:py-10">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="mt-4 text-[34px] font-extrabold tracking-tight text-foreground sm:text-[40px] lg:text-[44px]">
            Cẩm nang du lịch Hải Tiến
          </h1>
          <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-muted-foreground">
            Chia sẻ kinh nghiệm du lịch, khám phá những địa điểm hấp dẫn, ẩm thực ngon
            và mẹo hữu ích cho chuyến đi hoàn hảo.
          </p>
        </Container>
      </section>

      <Container className="pt-5">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_296px] 2xl:grid-cols-[minmax(0,1fr)_310px]">
          {/* Posts */}
          <section className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Bài viết mới nhất</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`${routes.blog}/${post.slug}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_12px_rgba(25,79,170,0.05)] transition hover:shadow-[0_4px_16px_rgba(25,79,170,0.08)]"
                >
                  <div className="relative aspect-[1.44] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 639px) 100vw, (max-width: 1535px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-card px-2.5 py-1 text-xs font-semibold text-primary shadow-[0_2px_8px_rgba(20,73,167,0.08)]">
                      {post.tag}
                    </span>
                  </div>
                  <div className="px-4 py-3.5">
                    <h3 className="line-clamp-2 text-lg font-bold leading-7 tracking-tight text-foreground">
                      {post.title}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-3.5 text-primary/50" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="size-3.5 text-primary/50" />
                        {post.readTime}
                      </span>
                    </div>
                    <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Xem chi tiết
                      <ChevronRight className="size-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <button
                aria-label="Trang trước"
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-[0_2px_8px_rgba(20,73,167,0.04)] transition hover:bg-secondary"
              >
                <ChevronLeft className="size-4" />
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`flex size-10 items-center justify-center rounded-xl text-[15px] font-semibold transition ${
                    n === 1
                      ? "bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)]"
                      : "border border-border bg-card text-foreground hover:bg-secondary"
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="px-1.5 text-base font-semibold text-muted-foreground">...</span>
              <button className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-[15px] font-semibold text-foreground transition hover:bg-secondary">
                6
              </button>
              <button
                aria-label="Trang sau"
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-[0_2px_8px_rgba(20,73,167,0.04)] transition hover:bg-secondary"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-4 shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
              <div className="flex items-center gap-2">
                <div className="flex h-11 flex-1 items-center gap-2 rounded-xl border border-border px-3">
                  <Search className="size-4 text-primary/50" />
                  <span className="text-sm text-muted-foreground">Tìm kiếm bài viết...</span>
                </div>
                <button className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90">
                  <Search className="size-4" />
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
              <h3 className="text-lg font-bold tracking-tight text-foreground">Danh mục bài viết</h3>
              <div className="mt-4 space-y-3">
                {categories.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                      <div className="inline-flex items-center gap-2.5">
                        <Icon className="size-4 text-primary" />
                        {item.label}
                      </div>
                      <span className="font-semibold text-primary">{item.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
              <h3 className="text-lg font-bold tracking-tight text-foreground">Bài viết được xem nhiều</h3>
              <div className="mt-4 space-y-3">
                {popularPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={routes.blogDetail(post.slug)}
                    className="flex gap-3 rounded-lg p-1 transition-colors hover:bg-secondary/70"
                  >
                    <div className="relative h-[64px] w-[86px] shrink-0 overflow-hidden rounded-md border border-border">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="88px"
                      />
                      <span className="absolute top-2 left-2 flex size-6 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="line-clamp-2 text-sm font-semibold leading-6 text-foreground">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">{post.date}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{post.views}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

