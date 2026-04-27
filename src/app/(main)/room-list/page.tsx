import Image from "next/image";
import {
  BedDouble,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Home,
  MapPinned,
  Mountain,
  RefreshCcw,
  Star,
  Trees,
  Users,
  UtensilsCrossed,
  Waves,
  Wifi,
} from "lucide-react";

const pageContainer =
  "mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6 3xl:max-w-[1600px]";

const breadcrumbs = ["Trang chủ", "Phòng & Villa", "Căn hộ"];

const roomTypes = [
  "Căn hộ 1 phòng ngủ",
  "Căn hộ 2 phòng ngủ",
  "Căn hộ 3 phòng ngủ",
  "Căn hộ Duplex",
  "Studio",
];

const viewOptions = ["View biển", "View hồ bơi", "View sân vườn", "View thành phố"];

const guestOptions = ["1 - 2 người", "3 - 4 người", "5 - 6 người", "Trên 6 người"];

const amenityFilters = ["WiFi miễn phí", "Bể bơi", "Ban công", "Bếp", "Máy giặt"];

const rooms = [
  {
    name: "IB 1526 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    rating: "4.9",
    reviews: "120 đánh giá",
    guests: "2 khách",
    bedrooms: "1 phòng ngủ",
    area: "45m²",
    price: "1.650.000",
    badge: "View biển",
    favorite: false,
    amenities: ["WiFi miễn phí", "Bể bơi", "Ban công", "Bếp", "View biển"],
  },
  {
    name: "IB 1626 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    rating: "4.8",
    reviews: "98 đánh giá",
    guests: "2 khách",
    bedrooms: "1 phòng ngủ",
    area: "45m²",
    price: "1.750.000",
    badge: "View biển",
    favorite: false,
    amenities: ["WiFi miễn phí", "Bể bơi", "Ban công", "Bếp", "View biển"],
  },
  {
    name: "IB 1712 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    rating: "4.7",
    reviews: "80 đánh giá",
    guests: "2 khách",
    bedrooms: "1 phòng ngủ",
    area: "45m²",
    price: "1.810.000",
    badge: "View biển",
    favorite: true,
    amenities: ["WiFi miễn phí", "Bể bơi", "Ban công", "Bếp", "View biển"],
  },
  {
    name: "IB 1806 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    rating: "4.7",
    reviews: "70 đánh giá",
    guests: "2 khách",
    bedrooms: "1 phòng ngủ",
    area: "45m²",
    price: "1.850.000",
    badge: "View biển",
    favorite: true,
    amenities: ["WiFi miễn phí", "Bể bơi", "Ban công", "Bếp", "View biển"],
  },
];

function SelectChip({ label }: { label: string }) {
  return (
    <button className="inline-flex h-11 min-w-[178px] items-center justify-between rounded-xl border border-[#dbe7ff] bg-white px-4 text-[15px] font-medium text-[#17356f] shadow-[0_8px_22px_rgba(25,79,170,0.05)]">
      <span>{label}</span>
      <ChevronDown className="size-4 text-[#5f84cc]" />
    </button>
  );
}

function FilterCheckbox({
  label,
  checked = false,
}: {
  label: string;
  checked?: boolean;
}) {
  return (
    <label className="flex items-center gap-3 text-[15px] text-[#26406f]">
      <span
        className={`flex size-[18px] items-center justify-center rounded-[5px] border ${
          checked
            ? "border-[#1d63e8] bg-[#1d63e8] text-white"
            : "border-[#b9c9e8] bg-white"
        }`}
      >
        {checked ? <span className="size-2 rounded-[2px] bg-white" /> : null}
      </span>
      {label}
    </label>
  );
}

function FilterIconOption({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-3 text-[15px] text-[#26406f]">
      <span className="flex size-[18px] items-center justify-center text-[#6e89bb]">
        <Users className="size-4" />
      </span>
      {label}
    </label>
  );
}

export default function RoomListPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#f7fbff] via-white to-white pb-12">
      <div className={`${pageContainer} pt-7`}>
        <div className="flex flex-wrap items-center gap-3 text-[15px] text-[#7084ad]">
          <Home className="size-4 text-[#6d83ae]" />
          {breadcrumbs.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              {index > 0 ? <ChevronRight className="size-4 text-[#90a2c7]" /> : null}
              <span className={index === breadcrumbs.length - 1 ? "text-[#516992]" : ""}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[312px_minmax(0,1fr)] 2xl:grid-cols-[330px_minmax(0,1fr)]">
          <aside className="rounded-[20px] border border-[#e6eefb] bg-white p-5 shadow-[0_16px_40px_rgba(25,79,170,0.06)] xl:sticky xl:top-5 xl:self-start">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[20px] leading-none font-bold tracking-tight text-[#15366f]">
                BỘ LỌC TÌM KIẾM
              </h2>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-[#5d78aa]">
                Xóa bộ lọc
                <RefreshCcw className="size-4" />
              </button>
            </div>

            <div className="mt-7">
              <p className="text-[17px] font-bold text-[#17356f]">
                Khoảng giá <span className="font-medium text-[#7a8fb8]">(đêm)</span>
              </p>
              <div className="mt-5">
                <div className="relative h-2 rounded-full bg-[#d6e4ff]">
                  <div className="absolute inset-y-0 left-[4%] right-[3%] rounded-full bg-[#1d63e8]" />
                  <span className="absolute top-1/2 left-[4%] size-5 -translate-y-1/2 rounded-full bg-[#1d63e8] shadow-[0_0_0_4px_rgba(29,99,232,0.14)]" />
                  <span className="absolute top-1/2 right-[3%] size-5 -translate-y-1/2 rounded-full bg-[#1d63e8] shadow-[0_0_0_4px_rgba(29,99,232,0.14)]" />
                </div>
                <div className="mt-4 flex items-center justify-between text-[14px] text-[#7186af]">
                  <span>500.000 đ</span>
                  <span>5.000.000 đ+</span>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-7">
              <section>
                <h3 className="text-[17px] font-bold text-[#17356f]">Loại phòng</h3>
                <div className="mt-4 space-y-3">
                  {roomTypes.map((item) => (
                    <FilterCheckbox key={item} label={item} />
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[17px] font-bold text-[#17356f]">Hướng view</h3>
                <div className="mt-4 space-y-3">
                  {viewOptions.map((item, index) => (
                    <FilterCheckbox key={item} label={item} checked={index === 0} />
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[17px] font-bold text-[#17356f]">Số người</h3>
                <div className="mt-4 space-y-3">
                  {guestOptions.map((item) => (
                    <FilterIconOption key={item} label={item} />
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[17px] font-bold text-[#17356f]">Tiện ích nổi bật</h3>
                <div className="mt-4 space-y-3">
                  {amenityFilters.map((item) => (
                    <FilterCheckbox key={item} label={item} />
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-7 space-y-3">
              <button className="flex h-12 w-full items-center justify-center rounded-xl bg-[#1d63e8] text-[16px] font-bold text-white shadow-[0_14px_32px_rgba(29,99,232,0.2)]">
                Áp dụng bộ lọc
              </button>
              <button className="flex h-12 w-full items-center justify-center rounded-xl border border-[#cfe0ff] bg-white text-[16px] font-semibold text-[#1d63e8]">
                Xóa tất cả
              </button>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <h1 className="text-[32px] font-extrabold tracking-tight text-[#15366f] xl:text-[44px] 2xl:text-[46px]">
                  Căn hộ - View biển
                </h1>
                <p className="mt-1.5 text-[16px] text-[#7186af]">
                  Tìm thấy 12 phòng phù hợp
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap xl:justify-end">
                <div className="flex items-center gap-3">
                  <span className="text-[16px] font-medium text-[#516992]">Sắp xếp:</span>
                  <SelectChip label="Giá thấp đến cao" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[16px] font-medium text-[#516992]">Hiển thị:</span>
                  <SelectChip label="12 phòng/trang" />
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3.5 xl:space-y-4">
              {rooms.map((room) => (
                <article
                  key={room.name}
                  className="overflow-hidden rounded-[20px] border border-[#e6eefb] bg-white shadow-[0_16px_40px_rgba(25,79,170,0.06)]"
                >
                  <div className="grid xl:grid-cols-[332px_minmax(0,1fr)_206px] 2xl:grid-cols-[348px_minmax(0,1fr)_220px]">
                    <div className="relative aspect-[1.42] overflow-hidden xl:aspect-auto xl:min-h-[220px]">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1279px) 100vw, (max-width: 1535px) 332px, 348px"
                      />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium text-[#244170] shadow-[0_8px_20px_rgba(22,75,165,0.14)]">
                        <MapPinned className="size-4 text-[#1d63e8]" />
                        {room.badge}
                      </div>
                      {room.favorite ? (
                        <button className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-white text-[#1d63e8] shadow-[0_10px_24px_rgba(22,75,165,0.14)]">
                          <Heart className="size-5 fill-white" />
                        </button>
                      ) : null}
                    </div>

                    <div className="border-t border-[#edf3ff] px-5 py-4 xl:border-t-0 xl:border-l xl:border-[#edf3ff] xl:px-5 xl:py-5">
                      <h2 className="text-[26px] leading-tight font-bold tracking-tight text-[#15366f] xl:text-[23px] 2xl:text-[24px]">
                        {room.name}
                      </h2>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[14px] text-[#516992]">
                        <span className="inline-flex items-center gap-1.5">
                          <Star className="size-4 fill-[#f6b31a] text-[#f6b31a]" />
                          <span className="font-semibold text-[#15366f]">{room.rating}</span>
                          <span>({room.reviews})</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="size-4 text-[#6e89bb]" />
                          {room.guests}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <BedDouble className="size-4 text-[#6e89bb]" />
                          {room.bedrooms}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Home className="size-4 text-[#6e89bb]" />
                          {room.area}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {room.amenities.map((amenity) => {
                          const icon =
                            amenity === "WiFi miễn phí" ? (
                              <Wifi className="size-4 text-[#6e89bb]" />
                            ) : amenity === "Bể bơi" ? (
                              <Waves className="size-4 text-[#6e89bb]" />
                            ) : amenity === "Ban công" ? (
                              <Trees className="size-4 text-[#6e89bb]" />
                            ) : amenity === "Bếp" ? (
                              <UtensilsCrossed className="size-4 text-[#6e89bb]" />
                            ) : (
                              <Mountain className="size-4 text-[#6e89bb]" />
                            );

                          return (
                            <span
                              key={amenity}
                              className="inline-flex items-center gap-1.5 rounded-full bg-[#f4f7fd] px-3 py-1.5 text-[13px] font-medium text-[#405983]"
                            >
                              {icon}
                              {amenity}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between border-t border-[#edf3ff] px-5 py-4 xl:border-t-0 xl:border-l xl:border-[#edf3ff] xl:px-5 xl:py-5">
                      <div className="xl:text-right">
                        <p className="text-[20px] font-extrabold text-[#1d63e8] xl:text-[16px] 2xl:text-[21px]">
                          {room.price} đ{" "}
                          <span className="font-medium text-[#516992]">/ đêm</span>
                        </p>
                        <p className="mt-1.5 text-[14px] text-[#7d90b8]">Đã bao gồm VAT</p>
                      </div>

                      <button className="mt-5 flex h-12 items-center justify-center rounded-xl border border-[#b8cffd] bg-white text-[16px] font-bold text-[#1d63e8] xl:mt-0">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <button className="flex size-11 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[#1d63e8] shadow-[0_8px_20px_rgba(20,73,167,0.05)]">
                <ChevronLeft className="size-5" />
              </button>
              <button className="flex size-11 items-center justify-center rounded-xl bg-[#1d63e8] text-[16px] font-bold text-white shadow-[0_14px_32px_rgba(29,99,232,0.2)]">
                1
              </button>
              <button className="flex size-11 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[16px] font-semibold text-[#26406f]">
                2
              </button>
              <button className="flex size-11 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[16px] font-semibold text-[#26406f]">
                3
              </button>
              <span className="px-2 text-[18px] font-semibold text-[#6e89bb]">...</span>
              <button className="flex size-11 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[16px] font-semibold text-[#26406f]">
                8
              </button>
              <button className="flex size-11 items-center justify-center rounded-xl border border-[#dbe7ff] bg-white text-[#1d63e8] shadow-[0_8px_20px_rgba(20,73,167,0.05)]">
                <ChevronRight className="size-5" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
