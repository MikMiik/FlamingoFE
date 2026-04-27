import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronLeft, Clock3, Share2, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { routes } from "@/routes/routes";

const posts = [
  {
    slug: "kinh-nghiem-du-lich-hai-tien-2024",
    title: "Kinh nghiệm du lịch Hải Tiến 2024 từ A-Z cho người mới",
    category: "Kinh nghiệm du lịch",
    excerpt:
      "Hướng dẫn đầy đủ từ di chuyển, ăn ở, lịch trình cho đến mẹo tiết kiệm chi phí khi đi Hải Tiến.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80",
    author: "Flamingo Editorial",
    date: "15/05/2024",
    readTime: "6 phút đọc",
    content: [
      {
        heading: "1. Thời điểm lý tưởng để đi Hải Tiến",
        paragraphs: [
          "Khoảng tháng 4 đến tháng 8 là mùa đẹp nhất để du lịch Hải Tiến. Thời tiết nắng nhẹ, biển êm và phù hợp cho các hoạt động ngoài trời.",
          "Nếu muốn tránh đông, bạn nên đi vào các ngày trong tuần. Cuối tuần và các dịp lễ thường đông khách, giá phòng có thể cao hơn.",
        ],
      },
      {
        heading: "2. Di chuyển đến Hải Tiến",
        paragraphs: [
          "Từ Hà Nội, bạn có thể đi xe limousine hoặc xe riêng theo tuyến cao tốc, thời gian di chuyển khoảng 3-3.5 giờ.",
          "Khi đến nơi, nên chọn lưu trú gần biển hoặc gần khu tiện ích để thuận tiện ăn uống, vui chơi và ngắm bình minh.",
        ],
      },
      {
        heading: "3. Gợi ý lịch trình 2 ngày 1 đêm",
        paragraphs: [
          "Ngày 1: Check-in, nghỉ ngơi, tắm biển chiều, ăn tối hải sản và dạo biển đêm.",
          "Ngày 2: Dậy sớm ngắm bình minh, ăn sáng, trải nghiệm hồ bơi và trả phòng sau bữa trưa.",
        ],
      },
      {
        heading: "4. Mẹo nhỏ để chuyến đi trọn vẹn",
        paragraphs: [
          "Nên đặt phòng trước 7-14 ngày để có giá tốt và nhiều lựa chọn view đẹp.",
          "Mang theo kem chống nắng, dép đi biển và trang phục thoáng nhẹ. Nếu đi gia đình có trẻ nhỏ, ưu tiên căn hộ có bếp và máy giặt.",
        ],
      },
    ],
  },
  {
    slug: "an-gi-o-hai-tien",
    title: "Ăn gì ở Hải Tiến? Top 10 món ngon không thể bỏ lỡ",
    category: "Ẩm thực",
    excerpt:
      "Danh sách các món đặc sản và quán ăn được yêu thích nhất để chuyến đi thêm trọn vị.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80",
    author: "Flamingo Editorial",
    date: "10/05/2024",
    readTime: "5 phút đọc",
    content: [
      {
        heading: "1. Hải sản tươi sống",
        paragraphs: [
          "Ghẹ hấp, tôm nướng, mực một nắng là những món nhất định phải thử.",
          "Bạn nên chọn nhà hàng có bể hải sản sống để đảm bảo độ tươi ngon.",
        ],
      },
      {
        heading: "2. Các món địa phương",
        paragraphs: [
          "Nem chua Thanh Hóa, chả tôm và bánh cuốn nóng cũng là những món dễ ăn, hợp khẩu vị nhiều người.",
          "Buổi tối có thể kết hợp đi chợ đêm để thưởng thức nhiều món ăn vặt.",
        ],
      },
    ],
  },
  {
    slug: "dia-diem-check-in-hai-tien",
    title: "Top 10 địa điểm check-in đẹp nhất Hải Tiến 2024",
    category: "Địa điểm tham quan",
    excerpt:
      "Những địa điểm sống ảo và ngắm cảnh đẹp nhất bạn nên lưu lại trước chuyến đi.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=80",
    author: "Flamingo Editorial",
    date: "08/05/2024",
    readTime: "7 phút đọc",
    content: [
      {
        heading: "1. Bãi biển trung tâm",
        paragraphs: [
          "Đây là điểm ngắm bình minh đẹp và dễ di chuyển nhất ở Hải Tiến.",
          "Khung giờ 5:15 - 6:00 sáng cho ánh sáng chụp ảnh tốt nhất.",
        ],
      },
      {
        heading: "2. Khu hồ bơi vô cực",
        paragraphs: [
          "Không gian mở, view biển rộng và ánh sáng chiều rất đẹp.",
          "Bạn có thể chọn trang phục màu sáng để nổi bật trên nền trời biển.",
        ],
      },
    ],
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

function findPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại | Flamingo Hải Tiến",
      description: "Không tìm thấy bài viết bạn yêu cầu.",
    };
  }

  return {
    title: `${post.title} | Flamingo Hải Tiến`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background/82 from-0% via-background/58 via-44% to-secondary/12 to-100% dark:from-background/66 dark:via-background/42 dark:to-secondary/18" />
        </div>
        <Container className="relative py-8 sm:py-10 lg:py-11">
          <Breadcrumb
            items={[
              { label: "Cẩm nang du lịch", href: routes.blog },
              { label: post.title },
            ]}
          />

          <span className="mt-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {post.category}
          </span>
          <h1 className="mt-3 max-w-[780px] text-3xl font-extrabold tracking-tight text-foreground sm:text-[38px] lg:text-[44px]">
            {post.title}
          </h1>
          <p className="mt-3 max-w-[700px] text-[15px] leading-7 text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="size-4 text-primary/60" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 text-primary/60" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-4 text-primary/60" />
              {post.readTime}
            </span>
          </div>
        </Container>
      </section>

      <Container className="pt-6">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <article className="rounded-xl border border-border bg-card p-5 shadow-[0_2px_12px_rgba(25,79,170,0.05)] lg:p-7">
            <div className="space-y-8">
              {post.content.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[15px] leading-7 text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
              <Link
                href={routes.blog}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                <ChevronLeft className="size-4" />
                Quay lại danh sách
              </Link>
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90">
                <Share2 className="size-4" />
                Chia sẻ bài viết
              </button>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-4 shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Bài viết liên quan
              </h3>
              <div className="mt-4 space-y-3">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`${routes.blog}/${item.slug}`}
                    className="group block rounded-lg border border-border bg-background p-3 transition hover:bg-secondary"
                  >
                    <p className="line-clamp-2 text-sm font-semibold leading-6 text-foreground group-hover:text-primary">
                      {item.title}
                    </p>
                    <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="size-3.5 text-primary/60" />
                        {item.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="size-3.5 text-primary/60" />
                        {item.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Danh mục
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Kinh nghiệm du lịch", "Ẩm thực", "Lưu trú", "Mẹo du lịch"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
