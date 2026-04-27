import Link from "next/link";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { routes } from "@/routes/routes";
import { bookingRequest } from "@/data/bookingMock";

const breadcrumbItems = [
  { label: "Đặt phòng", href: routes.booking },
  { label: "Tra cứu đơn" },
];

export default function BookingLookupPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      <Container className="pt-7">
        <Breadcrumb items={breadcrumbItems} />

        <section className="mx-auto mt-6 max-w-[700px] rounded-xl border border-border bg-card p-6 shadow-[0_2px_12px_rgba(25,79,170,0.05)]">
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
            Tra cứu đơn đặt phòng
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Nhập mã đơn và số điện thoại để kiểm tra trạng thái đặt phòng.
          </p>

          <div className="mt-5 space-y-4">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-muted-foreground">Mã đơn</span>
              <input
                defaultValue={bookingRequest.code}
                className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-muted-foreground">
                Số điện thoại
              </span>
              <input
                defaultValue="0968 123 456"
                className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={routes.bookingDetail(bookingRequest.code)}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
            >
              <Search className="size-4" />
              Tra cứu đơn
            </Link>
            <Link
              href={routes.home}
              className="inline-flex h-11 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              Về trang chủ
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
