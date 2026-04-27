import Image from "next/image";
import {
  BedDouble,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  CreditCard,
  Headphones,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Trees,
  Users,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

const navItems = [
  "Trang chủ",
  "Phòng & Villa",
  "Ưu đãi",
  "Combo",
  "Cẩm nang",
  "Liên hệ",
];

const quickFilters = [
  { label: "Nhận phòng", value: "14/05/2024", icon: CalendarDays },
  { label: "Trả phòng", value: "15/05/2024", icon: CalendarDays },
  { label: "Số khách", value: "2 khách", icon: Users },
  { label: "Loại phòng", value: "Tất cả", icon: ChevronDown },
];

const highlights = [
  {
    title: "Vị trí đắc địa",
    description: "Bãi biển riêng",
    icon: MapPin,
  },
  {
    title: "Tiện ích 5 sao",
    description: "Đẳng cấp nghỉ dưỡng",
    icon: Star,
  },
  {
    title: "Đa dạng lựa chọn",
    description: "Phòng, Villa, Mini Hotel",
    icon: BedDouble,
  },
  {
    title: "Giá tốt nhất",
    description: "Cam kết giá tốt",
    icon: CreditCard,
  },
  {
    title: "Hỗ trợ 24/7",
    description: "Luôn sẵn sàng",
    icon: Headphones,
  },
];

const categoryTabs = ["Căn hộ", "Villa", "Mini Hotel", "Phòng khách sạn"];

const featuredRooms = [
  {
    name: "IB 1526 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9 (70 đánh giá)",
    price: "1.650.000",
    details: ["2", "2", "1", "45m²"],
  },
  {
    name: "IB 1626 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    rating: "4.8 (96 đánh giá)",
    price: "1.750.000",
    details: ["1", "2", "1", "45m²"],
  },
  {
    name: "Villa BT02 - SPN",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9 (56 đánh giá)",
    price: "7.500.000",
    details: ["8", "5", "6", "300m²"],
  },
  {
    name: "Mini Hotel - Deluxe",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    rating: "4.7 (45 đánh giá)",
    price: "950.000",
    details: ["2", "1", "2", "30m²"],
  },
  {
    name: "IB 1712 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    rating: "4.7 (80 đánh giá)",
    price: "1.810.000",
    details: ["2", "2", "1", "45m²"],
  },
];

const deals = [
  {
    title: "Combo nghỉ dưỡng 2N1Đ",
    discount: "Giảm đến 30%",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Ưu đãi dài ngày",
    discount: "Giảm đến 20%",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Ưu đãi cuối tuần",
    discount: "Giảm đến 25%",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80",
  },
];

const reasons = [
  {
    title: "Dịch vụ 5 sao",
    description: "Tiêu chuẩn quốc tế",
    icon: Star,
  },
  {
    title: "Vị trí tuyệt đẹp",
    description: "Ngay sát bãi biển",
    icon: MapPin,
  },
  {
    title: "Tiện nghi hiện đại",
    description: "Đầy đủ & cao cấp",
    icon: BedDouble,
  },
  {
    title: "Ẩm thực đa dạng",
    description: "Hải sản tươi ngon",
    icon: UtensilsCrossed,
  },
  {
    title: "An toàn & tin cậy",
    description: "Bảo mật thông tin",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    location: "Hà Nội",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    comment:
      "Kỳ nghỉ tuyệt vời tại Flamingo Hải Tiến! Phòng đẹp, view biển cực chill, nhân viên thân thiện và hỗ trợ nhiệt tình.",
  },
  {
    name: "Trần Hoàng Nam",
    location: "TP. Hồ Chí Minh",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    comment:
      "Dịch vụ đẳng cấp 5 sao, tiện ích đầy đủ, đồ ăn ngon. Sẽ quay lại trong thời gian tới!",
  },
  {
    name: "Phạm Thu Hương",
    location: "Hải Phòng",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
    comment:
      "Gia đình mình rất hài lòng với chuyến đi. Các bé rất thích bãi biển và hồ bơi ở đây.",
  },
];

const blogPosts = [
  {
    title: "Kinh nghiệm du lịch Hải Tiến 2024 từ A-Z cho người mới",
    date: "15/05/2024",
    readTime: "5 phút đọc",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Ăn gì ở Hải Tiến? Top 10 món ngon không thể bỏ lỡ",
    date: "10/05/2024",
    readTime: "4 phút đọc",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Top 10 địa điểm check-in đẹp nhất Hải Tiến 2024",
    date: "08/05/2024",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kinh nghiệm đặt phòng Flamingo Hải Tiến giá tốt nhất",
    date: "05/05/2024",
    readTime: "3 phút đọc",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
  },
];

const footerColumns = [
  {
    title: "Về chúng tôi",
    items: ["Giới thiệu", "Cẩm nang du lịch", "Tin tức", "Hình ảnh", "Video"],
  },
  {
    title: "Hỗ trợ",
    items: [
      "Hướng dẫn đặt phòng",
      "Chính sách hủy phòng",
      "Câu hỏi thường gặp",
      "Điều khoản sử dụng",
      "Chính sách bảo mật",
    ],
  },
];

const infoItems = [
  {
    icon: MapPin,
    text: "Khu du lịch sinh thái biển Hải Hiền, Hoằng Hóa, Thanh Hóa",
  },
  { icon: Phone, text: "0968 85 85 85" },
  { icon: Mail, text: "flamingohaitien@gmail.com" },
  { icon: Clock3, text: "08:00 - 22:00 (Tất cả các ngày)" },
];

const socialItems = ["f", "z", "t", "i"];

const pageContainer =
  "mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6 3xl:max-w-[1600px]";

function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-[18px] font-bold tracking-tight text-slate-900 md:text-[20px]">
        {title}
      </h2>
      {action ? (
        <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-[#d7e6ff] bg-white px-4 text-sm font-semibold text-[#1d63e8] shadow-[0_8px_24px_rgba(27,87,210,0.08)]">
          {action}
          <ChevronRight className="size-4" />
        </button>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#f5fbff] via-white to-white text-slate-900">
      <section className="border-b border-[#e8efff] bg-white/95">
        <div
          className={`${pageContainer} flex items-center justify-between gap-8 py-4`}
        >
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl border border-[#dbe7ff] bg-linear-to-b from-[#eff6ff] to-white text-2xl font-bold text-[#1b63e3]">
              F
            </div>
            <div>
              <p className="text-[28px] leading-none font-black tracking-tight text-[#0c3475]">
                FLAMINGO
              </p>
              <p className="mt-1 text-[15px] font-semibold tracking-wide text-slate-600">
                HẢI TIẾN BOOKING
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 xl:flex 2xl:gap-10">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`relative text-[15px] font-semibold ${
                  index === 0 ? "text-[#1d63e8]" : "text-[#0f2958]"
                }`}
              >
                {item}
                {index === 0 ? (
                  <span className="absolute inset-x-0 -bottom-5 mx-auto h-[3px] w-14 rounded-full bg-[#1d63e8]" />
                ) : null}
              </a>
            ))}
          </nav>

          <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#cfe0ff] bg-white px-5 text-sm font-bold text-[#1458d8] shadow-[0_10px_30px_rgba(20,88,216,0.08)]">
            <Phone className="size-4" />
            0968 85 85 85
          </button>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80"
            alt="Flamingo Hai Tien beach"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[rgba(245,250,255,0.98)] from-0% via-[rgba(245,250,255,0.82)] via-40% to-[rgba(225,239,255,0.10)] to-100%" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-white" />

        <div
          className={`${pageContainer} relative min-h-[430px] pt-8 pb-24 md:min-h-[500px] md:pt-10 lg:min-h-[540px] lg:pb-28 2xl:min-h-[580px]`}
        >
          <div className="max-w-[460px] pt-2 md:max-w-[520px] lg:pt-6">
            <p className="text-[18px] font-bold text-[#0f3e89] md:text-[22px]">
              Flamingo Hải Tiến
            </p>
            <h1 className="mt-1 text-[36px] leading-[1.02] font-extrabold tracking-tight text-[#0a3578] md:text-[60px] lg:text-[68px]">
              <span className="block text-[31px] font-normal italic text-[#1965ea] md:text-[62px] md:leading-none md:[font-family:'Brush_Script_MT','Segoe_Script',cursive] lg:text-[72px]">
                Nghỉ dưỡng 5 sao
              </span>
              <span className="mt-2 block">Bên bờ biển xinh đẹp</span>
            </h1>
            <p className="mt-4 max-w-[360px] text-[15px] leading-7 text-slate-700 md:text-base">
              Trải nghiệm kỳ nghỉ tuyệt vời với dịch vụ đẳng cấp và tiện nghi
              hiện đại.
            </p>
          </div>
        </div>
      </section>

      <section className={`${pageContainer} relative z-10 -mt-16 md:-mt-20`}>
        <div className="rounded-[22px] border border-[#e7effc] bg-white p-3 shadow-[0_18px_50px_rgba(31,88,197,0.12)] md:p-4">
          <div className="grid gap-3 xl:grid-cols-[1fr_1fr_1fr_1.05fr_220px] 3xl:grid-cols-[1fr_1fr_1fr_1.1fr_240px]">
            {quickFilters.map((filter) => {
              const Icon = filter.icon;

              return (
                <div
                  key={filter.label}
                  className="flex min-h-[78px] items-center justify-between rounded-2xl border border-[#edf2fb] px-5 md:min-h-[84px] lg:px-6"
                >
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {filter.label}
                    </p>
                    <p className="mt-2 text-[17px] font-bold text-[#123a82] md:text-[18px]">
                      {filter.value}
                    </p>
                  </div>
                  <Icon className="size-5 text-[#5f84cc]" />
                </div>
              );
            })}

            <button className="flex min-h-[78px] items-center justify-center rounded-2xl bg-[#1d63e8] px-6 text-[17px] font-bold text-white shadow-[0_18px_42px_rgba(29,99,232,0.28)] transition hover:bg-[#0f58df] md:min-h-[84px]">
              Tìm phòng
            </button>
          </div>
        </div>

        <div className="mt-3 rounded-[22px] border border-[#e7effc] bg-white px-4 py-3 shadow-[0_16px_45px_rgba(31,88,197,0.08)] md:px-5">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-3 rounded-2xl px-2 py-2 lg:px-3 ${
                    index !== highlights.length - 1
                      ? "xl:border-r xl:border-[#edf2fb]"
                      : ""
                  }`}
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#f0f6ff] text-[#1d63e8]">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-[#123a82]">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${pageContainer} mt-7`}>
        <SectionTitle
          title="Khám phá phòng & villa nổi bật"
          action="Xem tất cả"
        />

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {categoryTabs.map((tab, index) => (
            <button
              key={tab}
              className={`rounded-lg px-4 py-2 text-sm font-bold ${
                index === 0
                  ? "bg-[#1d63e8] text-white shadow-[0_10px_24px_rgba(29,99,232,0.22)]"
                  : "bg-transparent text-[#123a82]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative mt-4">
          <button className="absolute top-1/2 left-[-8px] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#e4ecfb] bg-white text-[#1d63e8] shadow-[0_10px_24px_rgba(21,74,171,0.10)] 2xl:grid">
            <ChevronLeft className="size-5" />
          </button>
          <button className="absolute top-1/2 right-[-8px] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#e4ecfb] bg-white text-[#1d63e8] shadow-[0_10px_24px_rgba(21,74,171,0.10)] 2xl:grid">
            <ChevronRight className="size-5" />
          </button>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 2xl:gap-5">
            {featuredRooms.map((room) => (
              <article
                key={room.name}
                className="overflow-hidden rounded-[18px] border border-[#e8eefb] bg-white shadow-[0_18px_42px_rgba(15,61,145,0.08)]"
              >
                <div className="relative aspect-[1.34] overflow-hidden 2xl:aspect-[1.26]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, (max-width: 1535px) 33vw, 20vw"
                  />
                </div>
                <div className="px-4 py-4 2xl:px-5">
                  <h3 className="text-[17px] font-bold text-slate-900 2xl:text-[18px]">
                    {room.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <BedDouble className="size-4 text-[#7a97cf]" />
                      {room.details[0]}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="size-4 text-[#7a97cf]" />
                      {room.details[1]}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Waves className="size-4 text-[#7a97cf]" />
                      {room.details[2]}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Trees className="size-4 text-[#7a97cf]" />
                      {room.details[3]}
                    </span>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm text-slate-500">
                    <Star className="size-4 fill-[#f9b72f] text-[#f9b72f]" />
                    {room.rating}
                  </p>
                  <p className="mt-2 text-[18px] font-extrabold text-[#1d63e8]">
                    {room.price} đ{" "}
                    <span className="font-semibold text-slate-500">/ đêm</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${pageContainer} mt-7`}>
        <SectionTitle
          title="Ưu đãi hấp dẫn trong tháng"
          action="Xem tất cả ưu đãi"
        />

        <div className="mt-4 grid gap-4 xl:grid-cols-3 2xl:gap-5">
          {deals.map((deal) => (
            <article
              key={deal.title}
              className="relative overflow-hidden rounded-[18px] border border-[#e8eefb] bg-white shadow-[0_18px_42px_rgba(15,61,145,0.08)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1279px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[rgba(255,255,255,0.96)] from-0% via-[rgba(255,255,255,0.84)] via-40% to-[rgba(255,255,255,0.18)] to-100%" />
              </div>
              <div className="relative flex min-h-[148px] flex-col justify-between px-5 py-4 lg:min-h-[158px]">
                <div>
                  <p className="text-[15px] font-bold text-[#123a82]">
                    {deal.title}
                  </p>
                  <p className="mt-1 text-[18px] font-extrabold text-[#1d63e8]">
                    {deal.discount}
                  </p>
                </div>
                <button className="h-10 w-fit rounded-xl border border-[#d7e6ff] bg-white px-4 text-sm font-bold text-[#1d63e8] shadow-[0_8px_22px_rgba(27,87,210,0.10)]">
                  Xem chi tiết
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${pageContainer} mt-8`}>
        <SectionTitle title="Vì sao chọn Flamingo Hải Tiến?" />

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 2xl:gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="flex items-center gap-3 rounded-[18px] border border-[#e8eefb] bg-white px-5 py-5 shadow-[0_16px_38px_rgba(15,61,145,0.06)]"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-[#f0f6ff] text-[#1d63e8]">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#123a82]">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {reason.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`${pageContainer} mt-8`}>
        <SectionTitle
          title="Khách hàng nói gì về chúng tôi"
          action="Xem tất cả đánh giá"
        />

        <div className="relative mt-4">
          <button className="absolute top-1/2 left-[-8px] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#e4ecfb] bg-white text-[#1d63e8] shadow-[0_10px_24px_rgba(21,74,171,0.10)] 2xl:grid">
            <ChevronLeft className="size-5" />
          </button>
          <button className="absolute top-1/2 right-[-8px] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#e4ecfb] bg-white text-[#1d63e8] shadow-[0_10px_24px_rgba(21,74,171,0.10)] 2xl:grid">
            <ChevronRight className="size-5" />
          </button>

          <div className="grid gap-4 xl:grid-cols-3 2xl:gap-5">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-[18px] border border-[#e8eefb] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(15,61,145,0.08)]"
              >
                <div className="flex items-start gap-3">
                  <div className="relative size-12 overflow-hidden rounded-full">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-[16px] font-bold text-[#123a82]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {item.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#f9b72f]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="size-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      &quot;{item.comment}&quot;
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${pageContainer} mt-8`}>
        <SectionTitle title="Cẩm nang du lịch" action="Xem tất cả bài viết" />

        <div className="mt-4 grid gap-4 md:grid-cols-2 2xl:grid-cols-4 2xl:gap-5">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[18px] border border-[#e8eefb] bg-white shadow-[0_18px_42px_rgba(15,61,145,0.08)]"
            >
              <div className="relative aspect-[1.5] 2xl:aspect-[1.42]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 25vw"
                />
              </div>
              <div className="px-4 py-4 2xl:px-5">
                <h3 className="line-clamp-2 text-[17px] font-bold leading-7 text-slate-900">
                  {post.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="size-4 text-[#7a97cf]" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="size-4 text-[#7a97cf]" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="relative mt-10 overflow-hidden border-t border-[#e8eefb] bg-white">
        <div className="absolute inset-x-0 bottom-0 h-[66px] bg-linear-to-r from-[#2f2e9d] via-[#3f35c6] to-[#1d5be9] sm:h-[72px]" />

        <div
          className={`${pageContainer} relative pt-9 pb-[86px] sm:pt-10 sm:pb-[96px]`}
        >
          <div className="grid gap-8 py-2 lg:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.9fr_1.2fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl border border-[#dbe7ff] bg-linear-to-b from-[#eff6ff] to-white text-2xl font-bold text-[#1b63e3]">
                  F
                </div>
                <div>
                  <p className="text-[26px] leading-none font-black tracking-tight text-[#0c3475]">
                    FLAMINGO
                  </p>
                  <p className="mt-1 text-[14px] font-semibold tracking-wide text-slate-600">
                    HẢI TIẾN BOOKING
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-[260px] text-[15px] leading-7 text-slate-600">
                Mang đến cho bạn kỳ nghỉ dưỡng hoàn hảo tại Flamingo Hải Tiến
                với dịch vụ chuyên nghiệp, tiện nghi đẳng cấp và giá tốt nhất.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {socialItems.map((item) => (
                  <span
                    key={item}
                    className="flex size-10 items-center justify-center rounded-full bg-[#0f4fb7] text-sm font-bold uppercase text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[18px] font-bold text-[#123a82]">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3 text-[15px] text-slate-600">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-[18px] font-bold text-[#123a82]">
                Thông tin
              </h3>
              <ul className="mt-4 space-y-4">
                {infoItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li
                      key={item.text}
                      className="flex items-start gap-3 text-[15px] text-slate-600"
                    >
                      <Icon className="mt-0.5 size-4 text-[#1d63e8]" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-[#123a82]">
                Đăng ký nhận ưu đãi
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                Nhận thông tin ưu đãi và khuyến mãi mới nhất từ Flamingo Hải
                Tiến
              </p>
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="mt-5 h-12 w-full rounded-xl border border-[#d9e5fb] bg-white px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#1d63e8]"
              />
              <button className="mt-4 h-12 w-full rounded-xl bg-[#1d63e8] text-[15px] font-bold text-white shadow-[0_18px_42px_rgba(29,99,232,0.24)]">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <div
            className={`${pageContainer} flex min-h-[66px] flex-col items-center justify-between gap-4 py-4 text-sm text-white/90 md:min-h-[72px] md:flex-row md:py-0`}
          >
            <p>© 2024 Flamingo Hải Tiến Booking. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-[#7ac143] px-3 py-1 font-semibold text-white">
                DMCA PROTECTED
              </span>
              <span className="rounded-md bg-white/12 px-3 py-1 font-semibold text-white">
                SSL SECURED
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
