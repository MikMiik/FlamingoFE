import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleCheckBig, CircleDashed, PhoneCall, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { routes } from "@/routes/routes";
import { bookingRequest, bookingRoom, bookingTimeline } from "@/data/bookingMock";

type PageProps = {
  params: Promise<{ code: string }>;
};

export default async function BookingDetailPage({ params }: PageProps) {
  const { code } = await params;

  if (code !== bookingRequest.code) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      <Container className="pt-7">
        <Breadcrumb
          items={[
            { label: "Đặt phòng", href: routes.booking },
            { label: "Tra cứu đơn", href: routes.bookingLookup },
            { label: code },
          ]}
        />

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <section className="rounded-xl border border-border bg-card p-5 shadow-[0_2px_12px_rgba(25,79,170,0.05)] lg:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">Mã đơn</p>
                <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
                  {code}
                </h1>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {bookingRequest.status}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {bookingTimeline.map((step, index) => (
                <div key={step.key} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    {step.active ? (
                      <CircleCheckBig className="size-5 text-primary" />
                    ) : (
                      <CircleDashed className="size-5 text-muted-foreground/60" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p
                        className={`text-sm font-semibold ${
                          step.active ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </p>
                      <span className="text-xs text-muted-foreground">{step.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    {index !== bookingTimeline.length - 1 ? (
                      <div className="mt-3 h-4 w-px bg-border" />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-background p-4">
              <h2 className="text-lg font-bold text-foreground">Thông tin đơn</h2>
              <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                <p className="text-muted-foreground">
                  Phòng: <span className="font-medium text-foreground">{bookingRoom.name}</span>
                </p>
                <p className="text-muted-foreground">
                  Nhận phòng:{" "}
                  <span className="font-medium text-foreground">{bookingRoom.checkIn}</span>
                </p>
                <p className="text-muted-foreground">
                  Trả phòng:{" "}
                  <span className="font-medium text-foreground">{bookingRoom.checkOut}</span>
                </p>
                <p className="text-muted-foreground">
                  Tổng tiền:{" "}
                  <span className="font-semibold text-primary">{bookingRoom.totalPrice}</span>
                </p>
              </div>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-4 shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
              <h2 className="text-lg font-bold text-foreground">Hành động nhanh</h2>
              <div className="mt-4 space-y-3">
                <button className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90">
                  <PhoneCall className="size-4" />
                  Gọi hotline xác nhận
                </button>
                <button className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card text-sm font-semibold text-foreground transition hover:bg-secondary">
                  <XCircle className="size-4 text-destructive" />
                  Yêu cầu hủy đơn
                </button>
                <Link
                  href={routes.bookingLookup}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-border bg-card text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  Tra cứu đơn khác
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
