import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  Bath,
  BedDouble,
  CircleCheckBig,
  CalendarDays,
  CarFront,
  ChevronLeft,
  ChevronRight,
  FileText,
  Heart,
  Hotel,
  MapPinned,
  MessageSquareText,
  Phone,
  Refrigerator,
  ScrollText,
  Share2,
  ShieldCheck,
  Star,
  Tv,
  Users,
  Utensils,
  WashingMachine,
  Waves,
  Wifi,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { routes } from "@/routes/routes";

const breadcrumbItems = [
  { label: "Phòng", href: routes.rooms },
  { label: "Căn hộ", href: routes.rooms },
  { label: "IB 1526 - Flamingo Hải Tiến" },
];

const gallery = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
];

const detailFacts = [
  { icon: BedDouble, label: "1 phòng ngủ" },
  { icon: Bath, label: "1 phòng tắm" },
  { icon: Users, label: "2 khách" },
  { icon: ScrollText, label: "45m²" },
  { icon: Waves, label: "View biển" },
];

const amenities = [
  { icon: Wifi, label: "WiFi miễn phí" },
  { icon: Armchair, label: "Điều hòa" },
  { icon: Tv, label: "Smart TV" },
  { icon: Refrigerator, label: "Tủ lạnh" },
  { icon: WashingMachine, label: "Máy giặt" },
  { icon: Utensils, label: "Bếp nấu" },
  { icon: ScrollText, label: "Dụng cụ bếp" },
  { icon: Bath, label: "Bàn ăn" },
  { icon: Waves, label: "Ban công" },
  { icon: CarFront, label: "Bãi đỗ xe miễn phí" },
];

const tabs = [
  { icon: FileText, label: "Mô tả" },
  { icon: Hotel, label: "Tiện ích" },
  { icon: CircleCheckBig, label: "Chính sách" },
  { icon: MapPinned, label: "Vị trí" },
  { icon: MessageSquareText, label: "Đánh giá (120)" },
];

const guaranteeItems = [
  {
    icon: CalendarDays,
    title: "Thanh toán linh hoạt",
    description: "Nhiều phương thức",
  },
  { icon: ShieldCheck, title: "Hủy miễn phí", description: "Trước 7 ngày" },
  { icon: Star, title: "Đảm bảo giá tốt", description: "Cam kết giá tốt nhất" },
];

const policyItems = [
  "Nhận phòng từ 14:00, trả phòng trước 12:00.",
  "Miễn phí hủy trước 7 ngày so với ngày nhận phòng.",
  "Không hút thuốc trong phòng, vui lòng sử dụng khu vực quy định.",
  "Phụ thu khi thêm khách ngoài tiêu chuẩn hoặc nhận phòng sớm.",
];

const reviews = [
  {
    name: "Nguyễn Minh Anh",
    location: "Hà Nội",
    comment:
      "Phòng rất mới, view biển thoáng và đúng như hình. Ban công rộng, buổi sáng ngắm bình minh rất đẹp.",
  },
  {
    name: "Trần Hoàng Nam",
    location: "TP. Hồ Chí Minh",
    comment:
      "Check-in nhanh, căn hộ sạch sẽ, giường êm. Gia đình mình đặc biệt thích khu bếp và bàn ăn.",
  },
];

export default function RoomDetailPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      <Container className="pt-7">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-7 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h1 className="text-[34px] font-extrabold tracking-tight text-foreground xl:text-[44px]">
              IB 1526 - Flamingo Hải Tiến
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Star className="size-4 fill-current text-amber-400" />
                <span className="font-semibold text-foreground">4.9</span>
                <span>(120 đánh giá)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="size-4 text-primary/50" />
                Căn hộ 1 phòng ngủ
              </span>
              <span className="inline-flex items-center gap-1.5 text-primary">
                <MapPinned className="size-4" />
                View biển
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-base text-muted-foreground">
            <button className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Heart className="size-5" />
              Yêu thích
            </button>
            <button className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Share2 className="size-5" />
              Chia sẻ
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_388px]">
          {/* Main content */}
          <section className="min-w-0">
            {/* Gallery */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-[0_4px_16px_rgba(25,79,170,0.06)]">
              <div className="relative aspect-[1.52] sm:aspect-[1.72] lg:aspect-[1.88]">
                <Image
                  src={gallery[0]}
                  alt="IB 1526 - Flamingo Hai Tien"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1279px) 100vw, (max-width: 1535px) 900px, 980px"
                />
              </div>
              <button
                aria-label="Ảnh trước"
                className="absolute top-1/2 left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-card text-primary shadow-[0_2px_8px_rgba(20,73,167,0.10)] transition hover:bg-secondary"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                aria-label="Ảnh sau"
                className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-card text-primary shadow-[0_2px_8px_rgba(20,73,167,0.10)] transition hover:bg-secondary"
              >
                <ChevronRight className="size-5" />
              </button>
              <button className="absolute right-4 bottom-4 inline-flex h-10 items-center gap-2 rounded-xl bg-card px-4 text-[15px] font-semibold text-primary shadow-[0_2px_8px_rgba(20,73,167,0.10)] transition hover:bg-secondary">
                <CalendarDays className="size-4" />
                Xem tất cả ảnh (12)
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative aspect-[1.42] overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_8px_rgba(25,79,170,0.04)] transition hover:shadow-[0_4px_12px_rgba(25,79,170,0.08)]"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 639px) 33vw, (max-width: 1279px) 16vw, 120px"
                  />
                  {index === 5 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 text-2xl font-bold text-white">
                      +7 ảnh
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-6 border-b border-border">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.label}
                      className={`relative inline-flex items-center justify-center gap-2 pb-4 text-base font-medium transition-colors hover:text-primary ${
                        index === 0 ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <Icon className="size-4" />
                      {tab.label}
                      {index === 0 && (
                        <span className="absolute inset-x-0 bottom-0 h-0.75 rounded-full bg-primary" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description */}
            <section className="pt-5">
              <h2 className="text-[28px] font-bold tracking-tight text-foreground xl:text-[30px]">
                Mô tả phòng
              </h2>
              <p className="mt-3 max-w-[860px] text-base leading-7 text-muted-foreground">
                Căn hộ IB 1526 sở hữu view biển trực diện tuyệt đẹp, thiết kế
                hiện đại, ban công rộng rãi mang đến không gian nghỉ dưỡng thoải
                mái và sang trọng.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {detailFacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground"
                    >
                      <Icon className="size-4 text-primary" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </section>

            {/* Amenities */}
            <section className="pt-7">
              <h2 className="text-[28px] font-bold tracking-tight text-foreground xl:text-[30px]">
                Tiện ích nổi bật
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {amenities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground"
                    >
                      <Icon className="size-4 text-primary" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Policy */}
            <section className="pt-7">
              <h2 className="text-[28px] font-bold tracking-tight text-foreground xl:text-[30px]">
                Chính sách lưu trú
              </h2>
              <div className="mt-5 rounded-lg border border-border bg-card p-5 shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
                <div className="space-y-3.5">
                  {policyItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-7 text-muted-foreground"
                    >
                      <CircleCheckBig className="mt-1 size-4 shrink-0 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Location */}
            <section className="pt-7">
              <h2 className="text-[28px] font-bold tracking-tight text-foreground xl:text-[30px]">
                Vị trí
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-lg border border-border bg-card p-5 shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
                  <p className="text-[17px] font-semibold text-foreground">
                    Khu nghỉ dưỡng Flamingo Hải Tiến, Hoằng Hóa, Thanh Hóa
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                    Căn hộ nằm gần bãi biển riêng, hồ bơi trung tâm, nhà hàng và
                    khu vui chơi. Từ đây có thể dễ dàng di chuyển tới chợ hải
                    sản, quảng trường biển và các điểm check-in nổi bật của Hải
                    Tiến.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground">
                      <MapPinned className="size-4 text-primary" />2 phút ra
                      biển
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground">
                      <CarFront className="size-4 text-primary" />
                      Bãi đỗ xe gần sảnh
                    </span>
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-linear-to-br from-secondary/50 to-background p-5 shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
                  <div className="flex h-full min-h-[220px] flex-col justify-between rounded-xl border border-dashed border-border bg-card/70 p-5">
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        Bản đồ khu vực
                      </p>
                      <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
                        Từ căn hộ, bạn có thể đi bộ tới bãi biển, hồ bơi và khu
                        tiện ích trong nội khu Flamingo Hải Tiến.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[15px] font-medium text-primary">
                      <MapPinned className="size-4" />
                      Xem chỉ đường trên Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section className="pt-7">
              <h2 className="text-[28px] font-bold tracking-tight text-foreground xl:text-[30px]">
                Đánh giá từ khách hàng
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
                <div className="rounded-lg border border-border bg-card p-5 text-center shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
                  <p className="text-[42px] font-extrabold leading-none text-foreground">
                    4.9
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-[15px] text-muted-foreground">
                    120 đánh giá đã xác minh
                  </p>
                </div>
                <div className="grid gap-4">
                  {reviews.map((review) => (
                    <article
                      key={review.name}
                      className="rounded-lg border border-border bg-card p-5 shadow-[0_2px_12px_rgba(25,79,170,0.04)]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-[17px] font-semibold text-foreground">
                            {review.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {review.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} className="size-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                        {review.comment}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </section>

          {/* Booking Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5 shadow-[0_4px_16px_rgba(25,79,170,0.07)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[22px] font-extrabold text-primary">
                    1.650.000đ{" "}
                    <span className="text-base font-medium text-muted-foreground">
                      / đêm
                    </span>
                  </p>
                  <p className="mt-1 text-base text-muted-foreground line-through">
                    1.950.000đ
                  </p>
                  <p className="mt-2 text-[15px] font-medium text-emerald-600">
                    Giá tốt nhất hôm nay
                  </p>
                </div>
                <span className="inline-flex rounded-xl bg-primary px-4 py-2 text-lg font-bold text-primary-foreground">
                  -15%
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-muted-foreground">
                    Ngày nhận phòng
                  </label>
                  <div className="flex h-12 items-center justify-between rounded-xl border border-border px-4 text-base text-foreground cursor-pointer hover:border-primary transition-colors">
                    <span>15/06/2024</span>
                    <CalendarDays className="size-4 text-primary/60" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-muted-foreground">
                    Ngày trả phòng
                  </label>
                  <div className="flex h-12 items-center justify-between rounded-xl border border-border px-4 text-base text-foreground cursor-pointer hover:border-primary transition-colors">
                    <span>16/06/2024</span>
                    <CalendarDays className="size-4 text-primary/60" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-muted-foreground">
                    Số khách
                  </label>
                  <div className="flex h-12 items-center justify-between rounded-xl border border-border px-4 text-base text-foreground cursor-pointer hover:border-primary transition-colors">
                    <span>2 khách</span>
                    <ChevronRight className="size-4 rotate-90 text-primary/60" />
                  </div>
                </div>
              </div>

              <Link
                href={routes.booking}
                className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-primary text-[17px] font-bold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
              >
                Đặt phòng ngay
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-[15px] text-muted-foreground">
                <ShieldCheck className="size-4 text-primary" />
                Xác nhận tức thì
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-[0_4px_16px_rgba(25,79,170,0.07)]">
              <p className="text-lg font-semibold text-muted-foreground">
                Bạn cần hỗ trợ?
              </p>
              <div className="mt-3 inline-flex items-center gap-3 text-lg font-bold text-foreground">
                <Phone className="size-5 text-primary" />
                0968 85 85 85
              </div>
              <button className="mt-4 flex h-11 w-full items-center justify-center rounded-xl border border-border bg-card text-base font-semibold text-primary transition hover:bg-secondary">
                Chat Zalo
              </button>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-[0_4px_16px_rgba(25,79,170,0.07)]">
              <div className="space-y-4">
                {guaranteeItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
