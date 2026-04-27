import Link from "next/link";
import { CircleCheckBig, ReceiptText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { routes } from "@/routes/routes";
import { bookingRequest } from "@/data/bookingMock";

const breadcrumbItems = [
  { label: "Đặt phòng", href: routes.booking },
  { label: "Hoàn tất" },
];

export default function BookingSuccessPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      <Container className="pt-7">
        <Breadcrumb items={breadcrumbItems} />

        <section className="mx-auto mt-6 max-w-[760px] rounded-xl border border-border bg-card p-6 text-center shadow-[0_2px_12px_rgba(25,79,170,0.05)]">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CircleCheckBig className="size-7" />
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">
            Đã gửi yêu cầu đặt phòng thành công
          </h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Cảm ơn bạn đã tin tưởng Flamingo Hải Tiến. Chúng tôi sẽ liên hệ để xác
            nhận đơn trong khoảng {bookingRequest.estimatedResponse}.
          </p>

          <div className="mt-5 rounded-xl border border-border bg-background p-4 text-left">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">Mã yêu cầu</p>
                <p className="mt-1 text-lg font-bold text-foreground">
                  {bookingRequest.code}
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {bookingRequest.status}
              </span>
            </div>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <p>Thời gian tạo: {bookingRequest.createdAt}</p>
              <p>Kênh xác nhận: {bookingRequest.channel}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={routes.bookingLookup}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
            >
              <ReceiptText className="size-4" />
              Theo dõi đơn đặt phòng
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
