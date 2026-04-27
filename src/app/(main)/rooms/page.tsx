import Image from "next/image";
import Link from "next/link";
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
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { routes } from "@/routes/routes";

const breadcrumbItems = [
  { label: "Phòng", href: routes.rooms },
  { label: "Căn hộ" },
];

const roomTypes = [
  "Căn hộ 1 phòng ngủ",
  "Căn hộ 2 phòng ngủ",
  "Căn hộ 3 phòng ngủ",
  "Căn hộ Duplex",
  "Studio",
];

const viewOptions = [
  "View biển",
  "View hồ bơi",
  "View sân vườn",
  "View thành phố",
];

const guestOptions = [
  "1 - 2 người",
  "3 - 4 người",
  "5 - 6 người",
  "Trên 6 người",
];

const amenityFilters = [
  "WiFi miễn phí",
  "Bể bơi",
  "Ban công",
  "Bếp",
  "Máy giặt",
];

const rooms = [
  {
    slug: "ib-1526",
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
    slug: "ib-1626",
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
    slug: "ib-1712",
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
    slug: "ib-1806",
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
    <button className="inline-flex h-11 min-w-[178px] items-center justify-between rounded-xl border border-border bg-card px-4 text-[15px] font-medium text-foreground shadow-[0_2px_8px_rgba(25,79,170,0.04)]">
      <span>{label}</span>
      <ChevronDown className="size-4 text-primary/60" />
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
    <label className="flex cursor-pointer items-center gap-3 text-[15px] text-foreground">
      <span
        className={`flex size-[18px] items-center justify-center rounded-sm border transition-colors ${
          checked
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-card"
        }`}
      >
        {checked ? <span className="size-2 rounded-sm bg-current" /> : null}
      </span>
      {label}
    </label>
  );
}

function FilterIconOption({ label }: { label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-[15px] text-foreground">
      <span className="flex size-[18px] items-center justify-center text-muted-foreground">
        <Users className="size-4" />
      </span>
      {label}
    </label>
  );
}

export default function RoomListPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      <Container className="pt-7">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-5 grid gap-5 xl:grid-cols-[312px_minmax(0,1fr)] 2xl:grid-cols-[330px_minmax(0,1fr)]">
          {/* Filter Sidebar */}
          <aside className="rounded-xl border border-border bg-card p-5 shadow-[0_4px_16px_rgba(25,79,170,0.06)] xl:sticky xl:top-[80px] xl:self-start">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold leading-none tracking-tight text-foreground">
                BỘ LỌC TÌM KIẾM
              </h2>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Xóa bộ lọc
                <RefreshCcw className="size-4" />
              </button>
            </div>

            <div className="mt-7">
              <p className="text-[17px] font-bold text-foreground">
                Khoảng giá{" "}
                <span className="font-medium text-muted-foreground">(đêm)</span>
              </p>
              <div className="mt-5">
                <div className="relative h-2 rounded-full bg-secondary">
                  <div className="absolute inset-y-0 left-[4%] right-[3%] rounded-full bg-primary" />
                  <span className="absolute top-1/2 left-[4%] size-5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_3px_rgba(29,99,232,0.12)]" />
                  <span className="absolute top-1/2 right-[3%] size-5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_3px_rgba(29,99,232,0.12)]" />
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span>500.000 đ</span>
                  <span>5.000.000 đ+</span>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-7">
              <section>
                <h3 className="text-[17px] font-bold text-foreground">
                  Loại phòng
                </h3>
                <div className="mt-4 space-y-3">
                  {roomTypes.map((item) => (
                    <FilterCheckbox key={item} label={item} />
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[17px] font-bold text-foreground">
                  Hướng view
                </h3>
                <div className="mt-4 space-y-3">
                  {viewOptions.map((item, index) => (
                    <FilterCheckbox
                      key={item}
                      label={item}
                      checked={index === 0}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[17px] font-bold text-foreground">
                  Số người
                </h3>
                <div className="mt-4 space-y-3">
                  {guestOptions.map((item) => (
                    <FilterIconOption key={item} label={item} />
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[17px] font-bold text-foreground">
                  Tiện ích nổi bật
                </h3>
                <div className="mt-4 space-y-3">
                  {amenityFilters.map((item) => (
                    <FilterCheckbox key={item} label={item} />
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-7 space-y-3">
              <button className="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-base font-bold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90">
                Áp dụng bộ lọc
              </button>
              <button className="flex h-12 w-full items-center justify-center rounded-xl border border-border bg-card text-base font-semibold text-primary transition hover:bg-secondary">
                Xóa tất cả
              </button>
            </div>
          </aside>

          {/* Room List */}
          <section className="min-w-0">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <h1 className="text-[32px] font-extrabold tracking-tight text-foreground xl:text-[44px] 2xl:text-[46px]">
                  Căn hộ - View biển
                </h1>
                <p className="mt-1.5 text-base text-muted-foreground">
                  Tìm thấy 12 phòng phù hợp
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap xl:justify-end">
                <div className="flex items-center gap-3">
                  <span className="text-base font-medium text-muted-foreground">
                    Sắp xếp:
                  </span>
                  <SelectChip label="Giá thấp đến cao" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base font-medium text-muted-foreground">
                    Hiển thị:
                  </span>
                  <SelectChip label="12 phòng/trang" />
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3.5 xl:space-y-4">
              {rooms.map((room) => (
                <article
                  key={room.slug}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_12px_rgba(25,79,170,0.05)] transition hover:shadow-[0_4px_16px_rgba(25,79,170,0.08)]"
                >
                  <div className="grid xl:grid-cols-[332px_minmax(0,1fr)_206px] 2xl:grid-cols-[348px_minmax(0,1fr)_220px]">
                    <div className="group relative aspect-[1.42] overflow-hidden xl:aspect-auto xl:min-h-[220px]">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width: 1279px) 100vw, (max-width: 1535px) 332px, 348px"
                      />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-[0_2px_8px_rgba(22,75,165,0.10)]">
                        <MapPinned className="size-4 text-primary" />
                        {room.badge}
                      </div>
                      {room.favorite && (
                        <button
                          aria-label="Thêm vào yêu thích"
                          className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-card text-primary shadow-[0_2px_8px_rgba(22,75,165,0.10)] transition hover:bg-secondary"
                        >
                          <Heart className="size-5" />
                        </button>
                      )}
                    </div>

                    <div className="border-t border-border px-5 py-4 xl:border-t-0 xl:border-l xl:py-5">
                      <h2 className="text-[26px] font-bold leading-tight tracking-tight text-foreground xl:text-[23px] 2xl:text-2xl">
                        {room.name}
                      </h2>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Star className="size-4 fill-current text-amber-400" />
                          <span className="font-semibold text-foreground">
                            {room.rating}
                          </span>
                          <span>({room.reviews})</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="size-4 text-primary/50" />
                          {room.guests}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <BedDouble className="size-4 text-primary/50" />
                          {room.bedrooms}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Home className="size-4 text-primary/50" />
                          {room.area}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {room.amenities.map((amenity) => {
                          const icon =
                            amenity === "WiFi miễn phí" ? (
                              <Wifi className="size-4 text-primary/50" />
                            ) : amenity === "Bể bơi" ? (
                              <Waves className="size-4 text-primary/50" />
                            ) : amenity === "Ban công" ? (
                              <Trees className="size-4 text-primary/50" />
                            ) : amenity === "Bếp" ? (
                              <UtensilsCrossed className="size-4 text-primary/50" />
                            ) : (
                              <Mountain className="size-4 text-primary/50" />
                            );
                          return (
                            <span
                              key={amenity}
                              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground"
                            >
                              {icon}
                              {amenity}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between border-t border-border px-5 py-4 xl:border-t-0 xl:py-5">
                      <div className="xl:text-right">
                        <p className="text-xl font-extrabold text-primary xl:text-base 2xl:text-[21px]">
                          {room.price} đ{" "}
                          <span className="text-base font-medium text-muted-foreground">
                            / đêm
                          </span>
                        </p>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                          Đã bao gồm VAT
                        </p>
                      </div>

                      <Link
                        href={routes.roomDetail(room.slug)}
                        className="mt-5 flex h-12 items-center justify-center rounded-xl border border-border bg-card text-base font-bold text-primary transition hover:bg-secondary xl:mt-0"
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <button
                aria-label="Trang trước"
                className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-[0_2px_8px_rgba(20,73,167,0.04)] transition hover:bg-secondary"
              >
                <ChevronLeft className="size-5" />
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`flex size-11 items-center justify-center rounded-xl text-base font-semibold transition ${
                    n === 1
                      ? "bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)]"
                      : "border border-border bg-card text-foreground hover:bg-secondary"
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="px-2 text-lg font-semibold text-muted-foreground">
                ...
              </span>
              <button className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-base font-semibold text-foreground transition hover:bg-secondary">
                8
              </button>
              <button
                aria-label="Trang sau"
                className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-[0_2px_8px_rgba(20,73,167,0.04)] transition hover:bg-secondary"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
