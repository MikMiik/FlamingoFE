import Image from "next/image";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/Contact/ContactForm";

const breadcrumbItems = [{ label: "Liên hệ" }];

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Flamingo%20Hai%20Tien%20Thanh%20Hoa&output=embed";

const contactCards = [
  { icon: Phone, title: "Hotline", primary: "0968 85 85 85", secondary: "Hỗ trợ 24/7" },
  { icon: Mail, title: "Email", primary: "flamingohaitien@gmail.com", secondary: "Phản hồi trong 15 phút" },
  { icon: MapPin, title: "Địa chỉ", primary: "Khu du lịch sinh thái biển Hải Tiến", secondary: "Hoằng Hóa, Thanh Hóa" },
  { icon: Clock3, title: "Thời gian làm việc", primary: "08:00 - 22:00", secondary: "Tất cả các ngày trong tuần" },
];

const quickActions = [
  { icon: MessageCircle, title: "Chat Zalo", subtitle: "Nhắn tin qua Zalo", color: "bg-primary" },
  { icon: MessageCircle, title: "Messenger", subtitle: "Chat trên Messenger", color: "bg-blue-500" },
  { icon: Phone, title: "Gọi ngay", subtitle: "0968 85 85 85", color: "bg-emerald-500" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Lien he Flamingo Hai Tien"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background/85 from-0% via-background/62 via-40% to-secondary/15 to-100% dark:from-background/71 dark:via-background/47 dark:to-secondary/21" />
        </div>
        <Container className="relative py-10 sm:py-12 lg:py-14">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="mt-4 text-[34px] font-extrabold tracking-tight text-foreground sm:text-[40px] lg:text-[48px]">
            Liên hệ với chúng tôi
          </h1>
          <p className="mt-4 max-w-[520px] text-base leading-7 text-muted-foreground">
            Flamingo Hải Tiến luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc để
            mang đến cho bạn kỳ nghỉ tuyệt vời nhất.
          </p>
        </Container>
      </section>

      <Container className="pt-6">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_460px]">
          {/* Left: Contact info + Map */}
          <section className="min-w-0">
            <h2 className="inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-foreground">
              <Phone className="size-5 text-primary" />
              Thông tin liên hệ
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-lg border border-border bg-card p-5 shadow-[0_2px_12px_rgba(25,79,170,0.04)]"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-4 text-lg font-bold text-foreground">{item.title}</p>
                    <p className="mt-2 text-[15px] font-semibold text-primary">{item.primary}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.secondary}</p>
                  </article>
                );
              })}
            </div>

            <section className="pt-6">
              <h2 className="inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-foreground">
                <MapPin className="size-5 text-primary" />
                Vị trí của chúng tôi
              </h2>

              <div className="mt-4 overflow-hidden rounded-lg border border-border bg-card shadow-[0_2px_12px_rgba(25,79,170,0.04)]">
                <div className="relative aspect-[1.95]">
                  <iframe
                    src={mapEmbedUrl}
                    title="Google Maps - Flamingo Hải Tiến"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-0 bg-background/10" />
                  <div className="pointer-events-none absolute top-[44%] left-[61%] inline-flex items-center gap-2 rounded-full bg-card px-3 py-2 text-sm font-semibold text-red-500 shadow-[0_4px_14px_rgba(0,0,0,0.10)]">
                    <MapPin className="size-4 fill-current" />
                    Flamingo Hải Tiến
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {quickActions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="flex cursor-pointer items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 shadow-[0_2px_12px_rgba(25,79,170,0.04)] transition hover:shadow-[0_4px_16px_rgba(25,79,170,0.07)]"
                    >
                      <div className={`flex size-12 items-center justify-center rounded-full ${item.color} text-white`}>
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-[17px] font-bold text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </section>

          {/* Right: Contact Form */}
          <aside className="rounded-xl border border-border bg-card p-5 shadow-[0_4px_16px_rgba(25,79,170,0.06)] lg:p-6">
            <h2 className="inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-foreground">
              <Mail className="size-5 text-primary" />
              Gửi tin nhắn cho chúng tôi
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Vui lòng điền đầy đủ thông tin, chúng tôi sẽ liên hệ lại với bạn sớm nhất.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

