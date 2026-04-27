import {
  BedDouble,
  MapPin,
  ShieldCheck,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "./SectionTitle";

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

export function ReasonsSection() {
  return (
    <section>
      <Container className="mt-8">
        <SectionTitle title="Vì sao chọn Flamingo Hải Tiến?" />

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 2xl:gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-5 shadow-[0_2px_10px_rgba(15,61,145,0.05)] transition hover:shadow-[0_4px_16px_rgba(15,61,145,0.08)]"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

