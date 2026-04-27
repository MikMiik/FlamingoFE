import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "./SectionTitle";
import { routes } from "@/routes/routes";

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

export function DealsSection() {
  return (
    <section>
      <Container className="mt-7">
        <SectionTitle
          title="Ưu đãi hấp dẫn trong tháng"
          action="Xem tất cả ưu đãi"
          actionHref={routes.offers}
        />

        <div className="mt-4 grid gap-4 xl:grid-cols-3 2xl:gap-5">
          {deals.map((deal) => (
            <article
              key={deal.title}
              className="relative overflow-hidden rounded-lg border border-border bg-card shadow-[0_2px_12px_rgba(15,61,145,0.06)] transition hover:shadow-[0_4px_16px_rgba(15,61,145,0.10)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1279px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-card/96 from-0% via-card/84 via-40% to-card/18 to-100%" />
              </div>
              <div className="relative flex min-h-[148px] flex-col justify-between px-5 py-4 lg:min-h-[158px]">
                <div>
                  <p className="text-[15px] font-bold text-foreground">
                    {deal.title}
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-primary">
                    {deal.discount}
                  </p>
                </div>
                <Link
                  href={routes.offers}
                  className="h-10 w-fit rounded-xl border border-border bg-card px-4 text-sm font-bold text-primary shadow-sm transition hover:bg-secondary inline-flex items-center"
                >
                  Xem chi tiết
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

