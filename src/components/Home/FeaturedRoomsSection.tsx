"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Star,
  Trees,
  Users,
  Waves,
} from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "./SectionTitle";
import { CategoryTabs } from "./CategoryTabs";
import { routes } from "@/routes/routes";

const featuredRooms = [
  {
    slug: "ib-1526",
    name: "IB 1526 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9 (70 đánh giá)",
    price: "1.650.000",
    details: ["2", "2", "1", "45m²"],
  },
  {
    slug: "ib-1626",
    name: "IB 1626 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    rating: "4.8 (96 đánh giá)",
    price: "1.750.000",
    details: ["1", "2", "1", "45m²"],
  },
  {
    slug: "villa-bt02",
    name: "Villa BT02 - SPN",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9 (56 đánh giá)",
    price: "7.500.000",
    details: ["8", "5", "6", "300m²"],
  },
  {
    slug: "mini-hotel-deluxe",
    name: "Mini Hotel - Deluxe",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    rating: "4.7 (45 đánh giá)",
    price: "950.000",
    details: ["2", "1", "2", "30m²"],
  },
  {
    slug: "ib-1712",
    name: "IB 1712 - View biển",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    rating: "4.7 (80 đánh giá)",
    price: "1.810.000",
    details: ["2", "2", "1", "45m²"],
  },
];

export function FeaturedRoomsSection() {
  const [, setActiveCategory] = useState("Căn hộ");

  return (
    <section>
      <Container className="mt-7">
        <SectionTitle
          title="Khám phá Phòng nổi bật"
          action="Xem tất cả"
          actionHref={routes.rooms}
        />

        <CategoryTabs onTabChange={(tab) => setActiveCategory(tab)} />

        <div className="relative mt-4">
          <button
            aria-label="Trước"
            className="absolute top-1/2 left-[-8px] z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-primary shadow-[0_2px_8px_rgba(21,74,171,0.08)] transition hover:bg-secondary 2xl:grid"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Tiếp theo"
            className="absolute top-1/2 right-[-8px] z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-primary shadow-[0_2px_8px_rgba(21,74,171,0.08)] transition hover:bg-secondary 2xl:grid"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 2xl:gap-5">
            {featuredRooms.map((room) => (
              <Link
                key={room.slug}
                href={routes.roomDetail(room.slug)}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-[0_2px_12px_rgba(15,61,145,0.06)] transition hover:shadow-[0_4px_16px_rgba(15,61,145,0.10)]"
              >
                <div className="relative aspect-[1.34] overflow-hidden 2xl:aspect-[1.26]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, (max-width: 1535px) 33vw, 20vw"
                  />
                </div>
                <div className="px-4 py-4 2xl:px-5">
                  <h3 className="text-[17px] font-bold text-foreground 2xl:text-lg">
                    {room.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <BedDouble className="size-4 text-primary/50" />
                      {room.details[0]}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="size-4 text-primary/50" />
                      {room.details[1]}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Waves className="size-4 text-primary/50" />
                      {room.details[2]}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Trees className="size-4 text-primary/50" />
                      {room.details[3]}
                    </span>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="size-4 fill-current text-amber-400" />
                    {room.rating}
                  </p>
                  <p className="mt-2 text-lg font-extrabold text-primary">
                    {room.price} đ{" "}
                    <span className="text-base font-semibold text-muted-foreground">
                      / đêm
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
