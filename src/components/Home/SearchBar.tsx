"use client";

import {
  BedDouble,
  CalendarDays,
  ChevronDown,
  CreditCard,
  Headphones,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const quickFilters = [
  { label: "Nhận phòng", value: "14/05/2024", icon: CalendarDays },
  { label: "Trả phòng", value: "15/05/2024", icon: CalendarDays },
  { label: "Số khách", value: "2 khách", icon: Users },
  { label: "Loại phòng", value: "Tất cả", icon: ChevronDown },
];

const highlights = [
  { title: "Vị trí đắc địa", description: "Bãi biển riêng", icon: MapPin },
  { title: "Tiện ích 5 sao", description: "Đẳng cấp nghỉ dưỡng", icon: Star },
  {
    title: "Đa dạng lựa chọn",
    description: "Phòng, Villa, Mini Hotel",
    icon: BedDouble,
  },
  { title: "Giá tốt nhất", description: "Cam kết giá tốt", icon: CreditCard },
  { title: "Hỗ trợ 24/7", description: "Luôn sẵn sàng", icon: Headphones },
];

export function SearchBar() {
  return (
    <section className="relative z-10 -mt-16 md:-mt-20">
      <Container>
        <div className="rounded-2xl border border-border bg-card p-3 shadow-[0_4px_20px_rgba(31,88,197,0.08)] md:p-4">
          <div className="grid gap-3 xl:grid-cols-[1fr_1fr_1fr_1.05fr_220px] 3xl:grid-cols-[1fr_1fr_1fr_1.1fr_240px]">
            {quickFilters.map((filter) => {
              const Icon = filter.icon;
              return (
                <div
                  key={filter.label}
                  className="flex min-h-[78px] cursor-pointer items-center justify-between rounded-2xl border border-border px-5 transition-colors hover:bg-secondary md:min-h-[84px] lg:px-6"
                >
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {filter.label}
                    </p>
                    <p className="mt-2 text-[17px] font-bold text-foreground md:text-lg">
                      {filter.value}
                    </p>
                  </div>
                  <Icon className="size-5 text-primary/60" />
                </div>
              );
            })}

            <button className="flex min-h-[78px] items-center justify-center rounded-2xl bg-primary px-6 text-[17px] font-bold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90 md:min-h-[84px]">
              Tìm phòng
            </button>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[0_2px_12px_rgba(31,88,197,0.05)] md:px-5">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-3 rounded-2xl px-2 py-2 lg:px-3 ${
                    index !== highlights.length - 1
                      ? "xl:border-r xl:border-border"
                      : ""
                  }`}
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

