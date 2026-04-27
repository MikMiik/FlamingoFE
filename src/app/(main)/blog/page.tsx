import Image from "next/image";
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

const pageContainer =
  "mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6 3xl:max-w-[1600px]";

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80";

const latestPosts = [
  {
    title: "Kinh nghiệm du lịch Hải Tiến 2024 từ A-Z cho người mới",
    date: "15/05/2024",
    readTime: "5 phút đọc",
    excerpt:
      "Tất tần tật kinh nghiệm du lịch Hải Tiến từ phương tiện di chuyển, nơi ở, ăn uống đến...",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tag: "Kinh nghiệm du lịch",
  },
  {
    title: "Ăn gì ở Hải Tiến? Top 10 món ngon không thể bỏ lỡ",
    date: "10/05/2024",
    readTime: "4 phút đọc",
    excerpt:
      "Khám phá những món đặc sản Hải Tiến tươi ngon, giá cả hợp lý mà bạn nhất định phải thử...",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    tag: "Ẩm thực",
  },
  {
    title: "Top 10 địa điểm check-in đẹp nhất Hải Tiến 2024",
    date: "08/05/2024",
    readTime: "6 phút đọc",
    excerpt:
      "Những địa điểm sống ảo cực đẹp tại Hải Tiến mà bạn không nên bỏ qua trong chuyến đi...",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    tag: "Địa điểm tham quan",
  },
  {
    title: "Kinh nghiệm đặt phòng Flamingo Hải Tiến giá tốt nhất",
    date: "05/05/2024",
    readTime: "4 phút đọc",
    excerpt:
      "Mẹo đặt phòng Flamingo Hải Tiến với giá ưu đãi, chọn căn đẹp, view biển và nhiều tiện ích...",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    tag: "Lưu trú",
  },
  {
    title: "Nên đi Hải Tiến vào thời điểm nào đẹp nhất?",
    date: "02/05/2024",
    readTime: "3 phút đọc",
    excerpt:
      "Thời điểm lý tưởng để du lịch Hải Tiến, thời tiết, lễ hội và những lưu ý quan trọng...",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tag: "Kinh nghiệm du lịch",
  },
  {
    title: "Chợ hải sản Hải Tiến - Thiên đường hải sản tươi ngon",
    date: "30/04/2024",
    readTime: "5 phút đọc",
    excerpt:
      "Khám phá các chợ hải sản nổi tiếng ở Hải Tiến, mua hải sản tươi ngon với giá hấp dẫn...",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
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
    title: "Top 10 địa điểm check-in đẹp nhất Hải Tiến 2024",
    date: "08/05/2024",
    views: "2.5k lượt xem",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Ăn gì ở Hải Tiến? Top 10 món ngon không thể bỏ lỡ",
    date: "10/05/2024",
    views: "2.1k lượt xem",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Kinh nghiệm đặt phòng Flamingo Hải Tiến giá tốt nhất",
    date: "05/05/2024",
    views: "1.8k lượt xem",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Nên đi Hải Tiến vào thời điểm nào đẹp nhất?",
    date: "02/05/2024",
    views: "1.6k lượt xem",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Chợ hải sản Hải Tiến - Thiên đường hải sản tươi ngon",
    date: "30/04/2024",
    views: "1.2k lượt xem",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#f7fbff] via-white to-white pb-12">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt="Cam nang du lich Hai Tien" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-r from-[rgba(243,248,255,0.95)] via-[rgba(243,248,255,0.76)] to-[rgba(243,248,255,0.15)]" />
        </div>
        <div className={`${pageContainer} relative py-8 sm:py-9 lg:py-10`}>
          <div className="max-w-[650px]">
            <div className="flex flex-wrap items-center gap-3 text-[14px] text-[#6c83ae]">
              <span>Trang chủ</span>
              <ChevronRight className="size-4 text-[#90a2c7]" />
              <span>Cẩm nang du lịch</span>
            </div>
            <h1 className="mt-3 text-[34px] font-extrabold tracking-tight text-[#15366f] sm:text-[40px] lg:text-[44px]">
              Cẩm nang du lịch Hải Tiến
            </h1>
            <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-[#4f678f]">
              Chia sẻ kinh nghiệm du lịch, khám phá những địa điểm hấp dẫn, ẩm thực ngon
              và mẹo hữu ích cho chuyến đi hoàn hảo.
            </p>
          </div>
        </div>
      </section>

      <div className={`${pageContainer} pt-5`}>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_296px] 2xl:grid-cols-[minmax(0,1fr)_310px]">
          <section className="min-w-0">
            <h2 className="text-[24px] font-bold tracking-tight text-[#15366f]">Bài viết mới nhất</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
              {latestPosts.map((post) => (
                <article
                  key={post.title}
                  className="overflow-hidden rounded-[16px] border border-[#e6eefb] bg-white shadow-[0_12px_30px_rgba(25,79,170,0.05)]"
                >
                  <div className="relative aspect-[1.44]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 639px) 100vw, (max-width: 1535px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-[#1d63e8] shadow-[0_6px_16px_rgba(20,73,167,0.1)]">
                      {post.tag}
                    </span>
                  </div>
                  <div className="px-4 py-3.5">
                    <h3 className="line-clamp-2 text-[18px] leading-7 font-bold tracking-tight text-[#15366f]">
                      {post.title}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-[#7d90b8]">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-3.5 text-[#7a97cf]" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="size-3.5 text-[#7a97cf]" />
                        {post.readTime}
                      </span>
                    </div>
                    <p className="mt-2.5 line-clamp-3 text-[13px] leading-6 text-[#5d749b]">
                      {post.excerpt}
                    </p>
                    <button className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1d63e8]">
                      Xem chi tiết
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <button className="flex size-10 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[#1d63e8] shadow-[0_8px_20px_rgba(20,73,167,0.05)]">
                <ChevronLeft className="size-4" />
              </button>
              <button className="flex size-10 items-center justify-center rounded-xl bg-[#1d63e8] text-[15px] font-bold text-white shadow-[0_14px_32px_rgba(29,99,232,0.2)]">
                1
              </button>
              <button className="flex size-10 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[15px] font-semibold text-[#26406f]">
                2
              </button>
              <button className="flex size-10 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[15px] font-semibold text-[#26406f]">
                3
              </button>
              <span className="px-1.5 text-[16px] font-semibold text-[#6e89bb]">...</span>
              <button className="flex size-10 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[15px] font-semibold text-[#26406f]">
                6
              </button>
              <button className="flex size-10 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[#1d63e8] shadow-[0_8px_20px_rgba(20,73,167,0.05)]">
                <ChevronRight className="size-4" />
              </button>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-[16px] border border-[#e6eefb] bg-white p-4 shadow-[0_12px_30px_rgba(25,79,170,0.05)]">
              <div className="flex items-center gap-2">
                <div className="flex h-11 flex-1 items-center gap-2 rounded-xl border border-[#dbe7ff] px-3">
                  <Search className="size-4 text-[#7a97cf]" />
                  <span className="text-[14px] text-[#8ca0c1]">Tìm kiếm bài viết...</span>
                </div>
                <button className="flex size-11 items-center justify-center rounded-xl bg-[#1d63e8] text-white shadow-[0_14px_32px_rgba(29,99,232,0.18)]">
                  <Search className="size-4" />
                </button>
              </div>
            </div>

            <div className="rounded-[16px] border border-[#e6eefb] bg-white p-4 shadow-[0_12px_30px_rgba(25,79,170,0.05)]">
              <h3 className="text-[18px] font-bold tracking-tight text-[#15366f]">Danh mục bài viết</h3>
              <div className="mt-4 space-y-3">
                {categories.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-center justify-between gap-3 text-[14px] text-[#4f678f]">
                      <div className="inline-flex items-center gap-2.5">
                        <Icon className="size-4 text-[#1d63e8]" />
                        {item.label}
                      </div>
                      <span className="font-semibold text-[#1d63e8]">{item.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[16px] border border-[#e6eefb] bg-white p-4 shadow-[0_12px_30px_rgba(25,79,170,0.05)]">
              <h3 className="text-[18px] font-bold tracking-tight text-[#15366f]">Bài viết được xem nhiều</h3>
              <div className="mt-4 space-y-3">
                {popularPosts.map((post, index) => (
                  <article key={post.title} className="flex gap-3">
                    <div className="relative h-[64px] w-[86px] shrink-0 overflow-hidden rounded-[10px] border border-[#e6eefb]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="88px"
                      />
                      <span className="absolute top-2 left-2 flex size-6 items-center justify-center rounded-lg bg-[#1d63e8] text-[12px] font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="line-clamp-2 text-[14px] leading-6 font-semibold text-[#15366f]">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-[12px] text-[#7d90b8]">{post.date}</p>
                      <p className="mt-1 text-[12px] text-[#7d90b8]">{post.views}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
