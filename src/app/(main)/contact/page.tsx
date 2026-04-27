import Image from "next/image";
import {
  Clock3,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ChevronDown,
} from "lucide-react";

const pageContainer =
  "mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6 3xl:max-w-[1600px]";

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80";

const contactCards = [
  {
    icon: Phone,
    title: "Hotline",
    primary: "0968 85 85 85",
    secondary: "Hỗ trợ 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "flamingohaitien@gmail.com",
    secondary: "Phản hồi trong 15 phút",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    primary: "Khu du lịch sinh thái biển Hải Tiến",
    secondary: "Hoằng Hóa, Thanh Hóa",
  },
  {
    icon: Clock3,
    title: "Thời gian làm việc",
    primary: "08:00 - 22:00",
    secondary: "Tất cả các ngày trong tuần",
  },
];

const quickActions = [
  {
    icon: MessageCircle,
    title: "Chat Zalo",
    subtitle: "Nhắn tin qua Zalo",
    color: "bg-[#1d63e8]",
  },
  {
    icon: MessageCircle,
    title: "Messenger",
    subtitle: "Chat trên Messenger",
    color: "bg-[#2781ff]",
  },
  {
    icon: Phone,
    title: "Gọi ngay",
    subtitle: "0968 85 85 85",
    color: "bg-[#35b768]",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#f7fbff] via-white to-white pb-12">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Lien he Flamingo Hai Tien"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[rgba(243,248,255,0.96)] via-[rgba(243,248,255,0.82)] to-[rgba(243,248,255,0.18)]" />
        </div>
        <div className={`${pageContainer} relative py-10 sm:py-12 lg:py-14`}>
          <div className="max-w-[560px]">
            <h1 className="text-[34px] font-extrabold tracking-tight text-[#15366f] sm:text-[40px] lg:text-[48px]">
              Liên hệ với chúng tôi
            </h1>
            <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-[#4f678f]">
              Flamingo Hải Tiến luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc để
              mang đến cho bạn kỳ nghỉ tuyệt vời nhất.
            </p>
          </div>
        </div>
      </section>

      <div className={`${pageContainer} pt-6`}>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_460px]">
          <section className="min-w-0">
            <h2 className="inline-flex items-center gap-3 text-[24px] font-bold tracking-tight text-[#15366f]">
              <Phone className="size-5 text-[#1d63e8]" />
              Thông tin liên hệ
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[18px] border border-[#e6eefb] bg-white p-5 shadow-[0_12px_30px_rgba(25,79,170,0.05)]"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f2f7ff] text-[#1d63e8]">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-4 text-[18px] font-bold text-[#15366f]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-[#1d63e8]">
                      {item.primary}
                    </p>
                    <p className="mt-1 text-[14px] text-[#6e89bb]">
                      {item.secondary}
                    </p>
                  </article>
                );
              })}
            </div>

            <section className="pt-6">
              <h2 className="inline-flex items-center gap-3 text-[24px] font-bold tracking-tight text-[#15366f]">
                <MapPin className="size-5 text-[#1d63e8]" />
                Vị trí của chúng tôi
              </h2>

              <div className="mt-4 overflow-hidden rounded-[18px] border border-[#e6eefb] bg-white shadow-[0_12px_30px_rgba(25,79,170,0.05)]">
                <div className="relative aspect-[1.95]">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1800&q=80"
                    alt="Map Flamingo Hai Tien"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1279px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-white/15" />
                  <div className="absolute top-[44%] left-[61%] inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[14px] font-semibold text-[#f04d3d] shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
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
                      className="flex items-center gap-4 rounded-[18px] border border-[#e6eefb] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(25,79,170,0.05)]"
                    >
                      <div
                        className={`flex size-12 items-center justify-center rounded-full ${item.color} text-white`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-[17px] font-bold text-[#15366f]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[14px] text-[#6e89bb]">
                          {item.subtitle}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </section>

          <aside className="rounded-[20px] border border-[#e6eefb] bg-white p-5 shadow-[0_16px_40px_rgba(25,79,170,0.06)] lg:p-6">
            <h2 className="inline-flex items-center gap-3 text-[24px] font-bold tracking-tight text-[#15366f]">
              <Mail className="size-5 text-[#1d63e8]" />
              Gửi tin nhắn cho chúng tôi
            </h2>
            <p className="mt-3 text-[14px] leading-6 text-[#6e89bb]">
              Vui lòng điền đầy đủ thông tin, chúng tôi sẽ liên hệ lại với bạn
              sớm nhất.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#516992]">
                  Họ và tên *
                </label>
                <div className="flex h-11 items-center rounded-xl border border-[#dbe7ff] px-4 text-[14px] text-[#9aadcb]">
                  Nhập họ và tên
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#516992]">
                  Số điện thoại *
                </label>
                <div className="flex h-11 items-center rounded-xl border border-[#dbe7ff] px-4 text-[14px] text-[#9aadcb]">
                  Nhập số điện thoại
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#516992]">
                  Email *
                </label>
                <div className="flex h-11 items-center rounded-xl border border-[#dbe7ff] px-4 text-[14px] text-[#9aadcb]">
                  Nhập email
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#516992]">
                  Chủ đề *
                </label>
                <div className="flex h-11 items-center justify-between rounded-xl border border-[#dbe7ff] px-4 text-[14px] text-[#7f95bc]">
                  <span>Chọn chủ đề</span>
                  <ChevronDown className="size-4 text-[#7f95bc]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#516992]">
                  Nội dung *
                </label>
                <div className="flex min-h-[118px] rounded-xl border border-[#dbe7ff] px-4 py-3 text-[14px] text-[#9aadcb]">
                  Nhập nội dung tin nhắn của bạn...
                </div>
              </div>
            </div>

            <button className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1d63e8] text-[16px] font-bold text-white shadow-[0_14px_32px_rgba(29,99,232,0.2)]">
              <Send className="size-4" />
              Gửi tin nhắn
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-[14px] text-[#6e89bb]">
              <Lock className="size-4 text-[#7d90b8]" />
              Thông tin của bạn được bảo mật tuyệt đối
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
