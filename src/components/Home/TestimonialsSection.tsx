"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

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

export function TestimonialsSection() {
  return (
    <section>
      <Container className="mt-8">
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

          <div className="grid gap-4 xl:grid-cols-3 2xl:gap-5">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-lg border border-border bg-card px-5 py-5 shadow-[0_2px_12px_rgba(15,61,145,0.06)]"
              >
                <div className="flex items-start gap-3">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-bold text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="size-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                      &quot;{item.comment}&quot;
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

