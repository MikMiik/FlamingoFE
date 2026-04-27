import Image from "next/image";
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

const pageContainer =
  "mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6 3xl:max-w-[1600px]";

const breadcrumbs = [
  "Trang chủ",
  "Phòng & Villa",
  "Căn hộ",
  "IB 1526 - Flamingo Hải Tiến",
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
  {
    icon: ShieldCheck,
    title: "Hủy miễn phí",
    description: "Trước 7 ngày",
  },
  {
    icon: Star,
    title: "Đảm bảo giá tốt",
    description: "Cam kết giá tốt nhất",
  },
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
    <main className="min-h-screen bg-linear-to-b from-[#f7fbff] via-white to-white pb-12">
      <div className={`${pageContainer} pt-7`}>
        <div className="flex flex-wrap items-center gap-3 text-[15px] text-[#7084ad]">
          {breadcrumbs.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              {index > 0 ? <ChevronRight className="size-4 text-[#90a2c7]" /> : null}
              <span className={index === breadcrumbs.length - 1 ? "text-[#516992]" : ""}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h1 className="text-[34px] font-extrabold tracking-tight text-[#15366f] xl:text-[44px]">
              IB 1526 - Flamingo Hải Tiến
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-[#516992]">
              <span className="inline-flex items-center gap-1.5">
                <Star className="size-4 fill-[#f6b31a] text-[#f6b31a]" />
                <span className="font-semibold text-[#15366f]">4.9</span>
                <span>(120 đánh giá)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="size-4 text-[#6e89bb]" />
                Căn hộ 1 phòng ngủ
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#1d63e8]">
                <MapPinned className="size-4" />
                View biển
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[16px] text-[#26406f]">
            <button className="inline-flex items-center gap-2">
              <Heart className="size-5 text-[#26406f]" />
              Yêu thích
            </button>
            <button className="inline-flex items-center gap-2">
              <Share2 className="size-5 text-[#26406f]" />
              Chia sẻ
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_388px]">
          <section className="min-w-0">
            <div className="relative overflow-hidden rounded-[20px] border border-[#e6eefb] bg-white shadow-[0_16px_40px_rgba(25,79,170,0.06)]">
              <div className="relative aspect-[1.52] sm:aspect-[1.72] lg:aspect-[1.88]">
                <Image
                  src={gallery[0]}
                  alt="IB 1526 - Flamingo Hai Tien"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1279px) 100vw, (max-width: 1535px) 900px, 980px"
                />
              </div>
              <button className="absolute top-1/2 left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1d63e8] shadow-[0_10px_26px_rgba(20,73,167,0.14)]">
                <ChevronLeft className="size-5" />
              </button>
              <button className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1d63e8] shadow-[0_10px_26px_rgba(20,73,167,0.14)]">
                <ChevronRight className="size-5" />
              </button>
              <button className="absolute right-4 bottom-4 inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 text-[15px] font-semibold text-[#1d63e8] shadow-[0_10px_24px_rgba(20,73,167,0.12)]">
                <CalendarDays className="size-4" />
                Xem tất cả ảnh (12)
              </button>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative aspect-[1.42] overflow-hidden rounded-[16px] border border-[#e6eefb] bg-white shadow-[0_10px_28px_rgba(25,79,170,0.05)]"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 639px) 33vw, (max-width: 1279px) 16vw, 120px"
                  />
                  {index === 5 ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#15366f]/48 text-[24px] font-bold text-white">
                      +7 ảnh
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-6 border-b border-[#e6eefb]">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;

                  return (
                  <button
                    key={tab.label}
                    className={`relative inline-flex items-center justify-center gap-2 pb-4 text-[16px] font-medium ${
                      index === 0 ? "text-[#1d63e8]" : "text-[#395481]"
                    }`}
                  >
                    <Icon className="size-4" />
                    {tab.label}
                    {index === 0 ? (
                      <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#1d63e8]" />
                    ) : null}
                  </button>
                  );
                })}
              </div>
            </div>

            <section className="pt-5">
              <h2 className="text-[28px] font-bold tracking-tight text-[#15366f] xl:text-[30px]">
                Mô tả phòng
              </h2>
              <p className="mt-3 max-w-[860px] text-[16px] leading-7 text-[#4f678f]">
                Căn hộ IB 1526 sở hữu view biển trực diện tuyệt đẹp, thiết kế hiện đại,
                ban công rộng rãi mang đến không gian nghỉ dưỡng thoải mái và sang trọng.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {detailFacts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-[#dce7fb] bg-white px-3.5 py-2 text-[14px] font-medium text-[#35507d]"
                    >
                      <Icon className="size-4 text-[#1d63e8]" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </section>

            <section className="pt-7">
              <h2 className="text-[28px] font-bold tracking-tight text-[#15366f] xl:text-[30px]">
                Tiện ích nổi bật
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {amenities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2.5 rounded-full border border-[#dce7fb] bg-white px-3.5 py-2 text-[14px] font-medium text-[#35507d]"
                    >
                      <Icon className="size-4 text-[#1d63e8]" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="pt-7">
              <h2 className="text-[28px] font-bold tracking-tight text-[#15366f] xl:text-[30px]">
                Chính sách lưu trú
              </h2>
              <div className="mt-5 rounded-[18px] border border-[#e6eefb] bg-white p-5 shadow-[0_12px_30px_rgba(25,79,170,0.05)]">
                <div className="space-y-3.5">
                  {policyItems.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#4f678f]">
                      <CircleCheckBig className="mt-1 size-4 shrink-0 text-[#1d63e8]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="pt-7">
              <h2 className="text-[28px] font-bold tracking-tight text-[#15366f] xl:text-[30px]">
                Vị trí
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[18px] border border-[#e6eefb] bg-white p-5 shadow-[0_12px_30px_rgba(25,79,170,0.05)]">
                  <p className="text-[17px] font-semibold text-[#15366f]">
                    Khu nghỉ dưỡng Flamingo Hải Tiến, Hoằng Hóa, Thanh Hóa
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-[#4f678f]">
                    Căn hộ nằm gần bãi biển riêng, hồ bơi trung tâm, nhà hàng và khu vui chơi.
                    Từ đây có thể dễ dàng di chuyển tới chợ hải sản, quảng trường biển và các
                    điểm check-in nổi bật của Hải Tiến.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#f4f7fd] px-3 py-1.5 text-[14px] font-medium text-[#35507d]">
                      <MapPinned className="size-4 text-[#1d63e8]" />
                      2 phút ra biển
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#f4f7fd] px-3 py-1.5 text-[14px] font-medium text-[#35507d]">
                      <CarFront className="size-4 text-[#1d63e8]" />
                      Bãi đỗ xe gần sảnh
                    </span>
                  </div>
                </div>
                <div className="rounded-[18px] border border-[#e6eefb] bg-[linear-gradient(135deg,#eef5ff_0%,#f8fbff_100%)] p-5 shadow-[0_12px_30px_rgba(25,79,170,0.05)]">
                  <div className="flex h-full min-h-[220px] flex-col justify-between rounded-[16px] border border-dashed border-[#c9dafb] bg-white/70 p-5">
                    <div>
                      <p className="text-[18px] font-semibold text-[#15366f]">Bản đồ khu vực</p>
                      <p className="mt-2 text-[15px] leading-7 text-[#5d749b]">
                        Từ căn hộ, bạn có thể đi bộ tới bãi biển, hồ bơi và khu tiện ích trong nội
                        khu Flamingo Hải Tiến.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[15px] font-medium text-[#1d63e8]">
                      <MapPinned className="size-4" />
                      Xem chỉ đường trên Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-7">
              <h2 className="text-[28px] font-bold tracking-tight text-[#15366f] xl:text-[30px]">
                Đánh giá từ khách hàng
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
                <div className="rounded-[18px] border border-[#e6eefb] bg-white p-5 text-center shadow-[0_12px_30px_rgba(25,79,170,0.05)]">
                  <p className="text-[42px] font-extrabold leading-none text-[#15366f]">4.9</p>
                  <div className="mt-3 flex items-center justify-center gap-1 text-[#f6b31a]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-[15px] text-[#5d749b]">120 đánh giá đã xác minh</p>
                </div>
                <div className="grid gap-4">
                  {reviews.map((review) => (
                    <article
                      key={review.name}
                      className="rounded-[18px] border border-[#e6eefb] bg-white p-5 shadow-[0_12px_30px_rgba(25,79,170,0.05)]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-[17px] font-semibold text-[#15366f]">{review.name}</h3>
                          <p className="text-[14px] text-[#7d90b8]">{review.location}</p>
                        </div>
                        <div className="flex items-center gap-1 text-[#f6b31a]">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} className="size-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="mt-3 text-[15px] leading-7 text-[#4f678f]">{review.comment}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </section>

          <aside className="space-y-4">
            <div className="rounded-[20px] border border-[#e6eefb] bg-white p-5 shadow-[0_16px_40px_rgba(25,79,170,0.06)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[22px] font-extrabold text-[#1d63e8]">
                    1.650.000đ <span className="text-[16px] font-medium text-[#516992]">/ đêm</span>
                  </p>
                  <p className="mt-1 text-[16px] text-[#90a0be] line-through">1.950.000đ</p>
                  <p className="mt-2 text-[15px] font-medium text-[#12a56f]">
                    Giá tốt nhất hôm nay
                  </p>
                </div>
                <span className="inline-flex rounded-xl bg-[#1d63e8] px-4 py-2 text-[18px] font-bold text-white">
                  -15%
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-[#516992]">Ngày nhận phòng</label>
                  <div className="flex h-12 items-center justify-between rounded-xl border border-[#dbe7ff] px-4 text-[16px] text-[#17356f]">
                    <span>15/06/2024</span>
                    <CalendarDays className="size-4 text-[#5f84cc]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-[#516992]">Ngày trả phòng</label>
                  <div className="flex h-12 items-center justify-between rounded-xl border border-[#dbe7ff] px-4 text-[16px] text-[#17356f]">
                    <span>16/06/2024</span>
                    <CalendarDays className="size-4 text-[#5f84cc]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] font-medium text-[#516992]">Số khách</label>
                  <div className="flex h-12 items-center justify-between rounded-xl border border-[#dbe7ff] px-4 text-[16px] text-[#17356f]">
                    <span>2 khách</span>
                    <ChevronRight className="size-4 rotate-90 text-[#5f84cc]" />
                  </div>
                </div>
              </div>

              <button className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-[#1d63e8] text-[17px] font-bold text-white shadow-[0_14px_32px_rgba(29,99,232,0.2)]">
                Đặt phòng ngay
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[15px] text-[#516992]">
                <ShieldCheck className="size-4 text-[#1d63e8]" />
                Xác nhận tức thì
              </div>
            </div>

            <div className="rounded-[20px] border border-[#e6eefb] bg-white p-5 shadow-[0_16px_40px_rgba(25,79,170,0.06)]">
              <p className="text-[18px] font-semibold text-[#516992]">Bạn cần hỗ trợ?</p>
              <div className="mt-3 inline-flex items-center gap-3 text-[18px] font-bold text-[#15366f]">
                <Phone className="size-5 text-[#1d63e8]" />
                0968 85 85 85
              </div>
              <button className="mt-4 flex h-11 w-full items-center justify-center rounded-xl border border-[#b8cffd] bg-white text-[16px] font-semibold text-[#1d63e8]">
                Chat Zalo
              </button>
            </div>

            <div className="rounded-[20px] border border-[#e6eefb] bg-white p-5 shadow-[0_16px_40px_rgba(25,79,170,0.06)]">
              <div className="space-y-4">
                {guaranteeItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="flex size-9 items-center justify-center rounded-full bg-[#f3f7fe] text-[#1d63e8]">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-[16px] font-semibold text-[#15366f]">{item.title}</p>
                        <p className="mt-0.5 text-[14px] text-[#7d90b8]">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
