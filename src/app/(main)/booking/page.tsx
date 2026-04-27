import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ChevronRight, FilePenLine, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { routes } from "@/routes/routes";
import { bookingRoom } from "@/data/bookingMock";

const breadcrumbItems = [
  { label: "Phòng", href: routes.rooms },
  { label: "Đặt phòng" },
];

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      <Container className="pt-7">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="rounded-xl border border-border bg-card p-5 shadow-[0_2px_12px_rgba(25,79,170,0.05)] lg:p-6">
            <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Bước 1/2 · Thông tin đặt phòng
            </p>
            <h1 className="mt-3 text-[30px] font-extrabold tracking-tight text-foreground">
              Hoàn tất yêu cầu đặt phòng
            </h1>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Vui lòng kiểm tra thông tin lưu trú và điền thông tin liên hệ để gửi
              yêu cầu đặt phòng.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Ngày nhận phòng
                </span>
                <button className="flex h-11 w-full items-center justify-between rounded-xl border border-border px-4 text-sm text-foreground transition hover:border-primary">
                  <span>{bookingRoom.checkIn}</span>
                  <CalendarDays className="size-4 text-primary/60" />
                </button>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Ngày trả phòng
                </span>
                <button className="flex h-11 w-full items-center justify-between rounded-xl border border-border px-4 text-sm text-foreground transition hover:border-primary">
                  <span>{bookingRoom.checkOut}</span>
                  <CalendarDays className="size-4 text-primary/60" />
                </button>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Số khách
                </span>
                <button className="flex h-11 w-full items-center justify-between rounded-xl border border-border px-4 text-sm text-foreground transition hover:border-primary">
                  <span>{bookingRoom.guests}</span>
                  <Users className="size-4 text-primary/60" />
                </button>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Yêu cầu thêm
                </span>
                <button className="flex h-11 w-full items-center justify-between rounded-xl border border-border px-4 text-sm text-foreground transition hover:border-primary">
                  <span className="text-muted-foreground">Thêm ghi chú</span>
                  <FilePenLine className="size-4 text-primary/60" />
                </button>
              </label>
            </div>

            <div className="mt-6 space-y-4 rounded-xl border border-border bg-background p-4">
              <h2 className="text-lg font-bold text-foreground">Thông tin liên hệ</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  placeholder="Họ và tên"
                  className="h-11 rounded-xl border border-border bg-card px-4 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                />
                <input
                  placeholder="Số điện thoại"
                  className="h-11 rounded-xl border border-border bg-card px-4 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                />
                <input
                  placeholder="Email"
                  className="h-11 rounded-xl border border-border bg-card px-4 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary sm:col-span-2"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Yêu cầu thêm (tùy chọn)"
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <Link
                href={routes.roomDetail(bookingRoom.slug)}
                className="inline-flex h-10 items-center rounded-lg border border-border bg-card px-4 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Quay lại phòng
              </Link>
              <Link
                href={routes.bookingReview}
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
              >
                Tiếp tục xác nhận
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </section>

          <aside className="rounded-xl border border-border bg-card p-4 shadow-[0_2px_12px_rgba(25,79,170,0.05)]">
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              Tóm tắt đặt phòng
            </h2>
            <div className="relative mt-4 aspect-[1.55] overflow-hidden rounded-xl border border-border">
              <Image
                src={bookingRoom.image}
                alt={bookingRoom.name}
                fill
                className="object-cover"
                sizes="(max-width: 1279px) 100vw, 360px"
              />
            </div>
            <p className="mt-4 text-[17px] font-bold text-foreground">{bookingRoom.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{bookingRoom.category}</p>

            <div className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Nhận phòng</span>
                <span className="font-medium text-foreground">{bookingRoom.checkIn}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Trả phòng</span>
                <span className="font-medium text-foreground">{bookingRoom.checkOut}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Số đêm</span>
                <span className="font-medium text-foreground">{bookingRoom.nights} đêm</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Số khách</span>
                <span className="font-medium text-foreground">{bookingRoom.guests}</span>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-secondary p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Giá mỗi đêm</span>
                <span className="font-semibold text-foreground">{bookingRoom.pricePerNight}</span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
                <span className="text-sm text-muted-foreground">Tạm tính</span>
                <span className="text-lg font-extrabold text-primary">
                  {bookingRoom.totalPrice}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
