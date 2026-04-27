import Image from "next/image";
import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Gift,
  Home,
  Lock,
  Mail,
  ShieldCheck,
  Tags,
  Users,
} from "lucide-react";

const pageContainer =
  "mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6 3xl:max-w-[1600px]";

const filters = [
  "Tất cả",
  "Combo nghỉ dưỡng",
  "Ưu đãi trong ngày",
  "Ưu đãi cuối tuần",
  "Ưu đãi dài ngày",
];

const featureItems = [
  {
    icon: Tags,
    title: "Giá tốt nhất",
    description: "Cam kết giá tốt nhất",
  },
  {
    icon: ShieldCheck,
    title: "Đặt dễ dàng",
    description: "Xác nhận nhanh chóng",
  },
  {
    icon: Gift,
    title: "Nhiều ưu đãi",
    description: "Combo hấp dẫn mỗi ngày",
  },
];

const offers = [
  {
    title: "Combo nghỉ dưỡng 2N1Đ",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    badge: "-30%",
    label: "",
    metaA: "2 ngày 1 đêm",
    metaB: "2 khách",
    lineA: "Nghỉ dưỡng tại căn hộ view biển",
    lineB: "+ Ăn sáng buffet",
    oldPrice: "2.860.000đ",
    price: "1.990.000đ",
  },
  {
    title: "Ưu đãi dài ngày - 3N2Đ",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    badge: "-25%",
    label: "",
    metaA: "3 ngày 2 đêm",
    metaB: "2 khách",
    lineA: "Ở càng lâu - Giá càng tốt",
    lineB: "Miễn phí dọn phòng 1 lần/đợt",
    oldPrice: "4.200.000đ",
    price: "3.150.000đ",
  },
  {
    title: "Ưu đãi cuối tuần",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    badge: "-20%",
    label: "",
    metaA: "Thứ 6 - Chủ nhật",
    metaB: "2 khách",
    lineA: "Thư giãn cuối tuần",
    lineB: "Miễn phí bể bơi và gym",
    oldPrice: "2.000.000đ",
    price: "1.600.000đ",
  },
  {
    title: "Ưu đãi trong ngày",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    badge: "-15%",
    label: "",
    metaA: "Áp dụng trong ngày",
    metaB: "2 khách",
    lineA: "Đặt phòng trong ngày",
    lineB: "Giá tốt bất ngờ",
    oldPrice: "1.800.000đ",
    price: "1.530.000đ",
  },
  {
    title: "Villa nghỉ dưỡng 3N2Đ",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    badge: "-35%",
    label: "Best Seller",
    metaA: "3 ngày 2 đêm",
    metaB: "4 khách",
    lineA: "Villa 3 phòng ngủ - Hồ bơi riêng",
    lineB: "Bao gồm ăn sáng",
    oldPrice: "9.900.000đ",
    price: "6.490.000đ",
  },
  {
    title: "Combo gia đình 3N2Đ",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    badge: "-20%",
    label: "",
    metaA: "3 ngày 2 đêm",
    metaB: "4 khách",
    lineA: "Không gian rộng rãi - Tiện ích đầy đủ",
    lineB: "Miễn phí vui chơi trẻ em",
    oldPrice: "6.250.000đ",
    price: "4.990.000đ",
  },
  {
    title: "Combo nhóm bạn 2N1Đ",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    badge: "-25%",
    label: "Flash Sale",
    metaA: "2 ngày 1 đêm",
    metaB: "Nhóm từ 6 khách",
    lineA: "Không gian lý tưởng cho nhóm bạn",
    lineB: "Tiệc BBQ ngoài trời",
    oldPrice: "3.600.000đ",
    price: "2.690.000đ",
  },
  {
    title: "Combo Spa & Wellness",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    badge: "-10%",
    label: "",
    metaA: "2 ngày 1 đêm",
    metaB: "2 khách",
    lineA: "Nghỉ dưỡng kết hợp chăm sóc sức khỏe",
    lineB: "Giảm giá dịch vụ Spa",
    oldPrice: "2.750.000đ",
    price: "2.490.000đ",
  },
];

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#f7fbff] via-white to-white pb-12">
      <div className={`${pageContainer} pt-7`}>
        <div className="flex flex-wrap items-center gap-3 text-[15px] text-[#7084ad]">
          <Home className="size-4 text-[#6d83ae]" />
          <span>Trang chủ</span>
          <ChevronRight className="size-4 text-[#90a2c7]" />
          <span className="text-[#516992]">Ưu đãi</span>
        </div>

        <section className="mt-5 overflow-hidden rounded-[20px] border border-[#e4edf9] bg-white shadow-[0_16px_44px_rgba(29,73,160,0.06)]">
          <div className="grid xl:grid-cols-[1.04fr_0.96fr]">
            <div className="bg-linear-to-r from-[#edf4ff] via-[#f6faff] to-[#edf4ff] px-7 py-8 lg:px-8 lg:py-9">
              <div className="max-w-[610px]">
                <div className="flex items-start gap-3">
                  <span className="mt-3 text-[#1d63e8]">✦</span>
                  <div>
                    <h1 className="text-[34px] leading-none font-extrabold tracking-tight text-[#15366f] lg:text-[44px]">
                      Ưu đãi hấp dẫn
                    </h1>
                    <p className="mt-4 text-[17px] font-medium text-[#26406f] lg:text-[18px]">
                      Tiết kiệm hơn -{" "}
                      <span className="font-bold text-[#1d63e8]">
                        Trải nghiệm hơn
                      </span>
                    </p>
                  </div>
                  <span className="mt-2 text-xl text-[#1d63e8]">✦</span>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  {featureItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1d63e8] shadow-[0_8px_20px_rgba(20,73,167,0.08)]">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <p className="text-[17px] font-bold text-[#15366f]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[14px] text-[#6e89bb]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative min-h-[240px] overflow-hidden xl:min-h-[244px]">
              <Image
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=80"
                alt="Offer hero"
                fill
                className="object-cover"
                sizes="(max-width: 1279px) 100vw, 680px"
              />
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-[18px] border border-[#e5edf9] bg-white p-2.5 shadow-[0_12px_34px_rgba(29,73,160,0.05)]">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-2.5">
              {filters.map((item, index) => (
                <button
                  key={item}
                  className={`rounded-xl px-5 py-3 text-[15px] font-semibold transition ${
                    index === 0
                      ? "bg-[#1d63e8] text-white shadow-[0_10px_24px_rgba(29,99,232,0.18)]"
                      : "bg-[#f5f8fe] text-[#35507d]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="inline-flex h-11 min-w-[180px] items-center justify-between rounded-xl border border-[#dbe7ff] px-4 text-[15px] font-medium text-[#17356f]">
              <span>Sắp xếp: Mới nhất</span>
              <ChevronDown className="size-4 text-[#5f84cc]" />
            </button>
          </div>
        </section>

        <section className="mt-5 grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="overflow-hidden rounded-[18px] border border-[#e4edf9] bg-white shadow-[0_12px_34px_rgba(29,73,160,0.05)]"
            >
              <div className="relative aspect-[1.62] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="rounded-lg bg-[#1d63e8] px-3 py-1 text-[13px] font-bold text-white">
                    {offer.badge}
                  </span>
                  {offer.label ? (
                    <span className="rounded-lg bg-[#39b86b] px-2.5 py-1 text-[12px] font-semibold text-white">
                      {offer.label}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="px-4 pt-4 pb-4">
                <h3 className="text-[18px] leading-7 font-bold tracking-tight text-[#15366f]">
                  {offer.title}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#6e89bb]">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5 text-[#f7a11a]" />
                    {offer.metaA}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5 text-[#f7a11a]" />
                    {offer.metaB}
                  </span>
                </div>

                <p className="mt-3 text-[14px] leading-6 text-[#5d749b]">
                  {offer.lineA}
                </p>
                <p className="text-[14px] leading-6 text-[#5d749b]">
                  {offer.lineB}
                </p>

                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[13px] text-[#92a3bf] line-through">
                      {offer.oldPrice}
                    </p>
                    <p className="mt-1 text-[18px] font-extrabold text-[#1d63e8]">
                      {offer.price}
                    </p>
                  </div>

                  <button className="flex h-10 items-center justify-center rounded-xl border border-[#b8cffd] px-4 text-[14px] font-semibold text-[#1d63e8]">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-6 overflow-hidden rounded-[20px] border border-[#e4edf9] bg-linear-to-r from-[#edf4ff] via-[#f7fbff] to-[#edf4ff] px-6 py-5 shadow-[0_12px_34px_rgba(29,73,160,0.05)]">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1d63e8] shadow-[0_8px_20px_rgba(20,73,167,0.08)]">
                <Gift className="size-6" />
              </div>
              <div>
                <h2 className="text-[22px] font-extrabold tracking-tight text-[#15366f] lg:text-[24px]">
                  Không bỏ lỡ bất kỳ ưu đãi nào!
                </h2>
                <p className="mt-1.5 text-[15px] text-[#5d749b]">
                  Đăng ký nhận thông tin ưu đãi mới nhất từ Flamingo Hải Tiến
                </p>
              </div>
            </div>

            <div className="w-full max-w-[520px]">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex h-11 flex-1 items-center gap-2 rounded-xl border border-[#dbe7ff] bg-white px-4 text-[14px] text-[#9aadcb]">
                  <Mail className="size-4 text-[#7a97cf]" />
                  Nhập email của bạn
                </div>
                <button className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1d63e8] px-5 text-[15px] font-bold text-white shadow-[0_12px_28px_rgba(29,99,232,0.18)]">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
