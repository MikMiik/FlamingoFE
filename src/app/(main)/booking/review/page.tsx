import Link from "next/link";
import { CalendarDays, CheckCheck, ChevronRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { routes } from "@/routes/routes";
import { bookingCustomer, bookingRequest, bookingRoom } from "@/data/bookingMock";

const breadcrumbItems = [
  { label: "Phòng", href: routes.rooms },
  { label: "Đặt phòng", href: routes.booking },
  { label: "Xác nhận yêu cầu" },
];

export default function BookingReviewPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      <Container className="pt-7">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-[0_2px_12px_rgba(25,79,170,0.05)] lg:p-6">
          <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Bước 2/2 · Xác nhận yêu cầu
          </p>
          <h1 className="mt-3 text-[30px] font-extrabold tracking-tight text-foreground">
            Kiểm tra thông tin trước khi gửi
          </h1>

          <div className="mt-6 grid gap-5 xl:grid-cols-3">
            <section className="rounded-xl border border-border bg-background p-4 xl:col-span-2">
              <h2 className="text-lg font-bold text-foreground">Thông tin lưu trú</h2>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Phòng</span>
                  <span className="font-semibold text-foreground">{bookingRoom.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Nhận phòng</span>
                  <span className="font-medium text-foreground">{bookingRoom.checkIn}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Trả phòng</span>
                  <span className="font-medium text-foreground">{bookingRoom.checkOut}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Số khách</span>
                  <span className="font-medium text-foreground">{bookingRoom.guests}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tạm tính</span>
                  <span className="text-lg font-extrabold text-primary">
                    {bookingRoom.totalPrice}
                  </span>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-border bg-background p-4">
              <h2 className="text-lg font-bold text-foreground">Liên hệ</h2>
              <div className="mt-3 space-y-2 text-sm">
                <p className="text-foreground">{bookingCustomer.fullName}</p>
                <p className="text-muted-foreground">{bookingCustomer.phone}</p>
                <p className="text-muted-foreground">{bookingCustomer.email}</p>
                <p className="rounded-lg bg-secondary px-3 py-2 text-muted-foreground">
                  {bookingCustomer.note}
                </p>
              </div>
            </section>
          </div>

          <section className="mt-5 rounded-xl border border-border bg-background p-4">
            <h2 className="text-lg font-bold text-foreground">Phương thức xác nhận</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-primary bg-primary/5 text-sm font-semibold text-primary transition hover:bg-primary/10">
                <PhoneCall className="size-4" />
                Gọi lại xác nhận
              </button>
              <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card text-sm font-semibold text-foreground transition hover:bg-secondary">
                <CheckCheck className="size-4 text-primary" />
                Xác nhận qua Zalo
              </button>
            </div>
          </section>

          <section className="mt-5 rounded-xl border border-border bg-background p-4">
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary" />
              Yêu cầu của bạn sẽ được xác nhận thủ công qua điện thoại/Zalo.
              Trạng thái hiện tại sau khi gửi là{" "}
              <span className="font-semibold text-foreground">
                {bookingRequest.status}
              </span>
              .
            </div>
          </section>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <Link
              href={routes.booking}
              className="inline-flex h-10 items-center rounded-lg border border-border bg-card px-4 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              Quay lại chỉnh sửa
            </Link>
            <Link
              href={routes.bookingSuccess}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
            >
              Gửi yêu cầu đặt phòng
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
