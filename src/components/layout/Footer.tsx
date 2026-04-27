import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "./NewsletterForm";

const footerColumns = [
  {
    title: "Về chúng tôi",
    items: ["Giới thiệu", "Cẩm nang du lịch", "Tin tức", "Hình ảnh", "Video"],
  },
  {
    title: "Hỗ trợ",
    items: [
      "Hướng dẫn đặt phòng",
      "Chính sách hủy phòng",
      "Câu hỏi thường gặp",
      "Điều khoản sử dụng",
      "Chính sách bảo mật",
    ],
  },
];

const infoItems = [
  {
    icon: MapPin,
    text: "Khu du lịch sinh thái biển Hải Hiền, Hoằng Hóa, Thanh Hóa",
  },
  { icon: Phone, text: "0968 85 85 85" },
  { icon: Mail, text: "flamingohaitien@gmail.com" },
  { icon: Clock3, text: "08:00 - 22:00 (Tất cả các ngày)" },
];

const socialItems = [
  { label: "f", title: "Facebook" },
  { label: "z", title: "Zalo" },
  { label: "t", title: "TikTok" },
  { label: "i", title: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="pt-8 pb-8 sm:pt-9 sm:pb-8">
        <div className="grid gap-8 py-2 lg:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.9fr_1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-linear-to-b from-secondary to-card text-2xl font-bold text-primary">
                F
              </div>
              <div>
                <p className="text-[26px] leading-none font-black tracking-tight text-foreground">
                  FLAMINGO
                </p>
                <p className="mt-1 text-sm font-semibold tracking-wide text-muted-foreground">
                  HẢI TIẾN BOOKING
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-[260px] text-[15px] leading-7 text-muted-foreground">
              Mang đến cho bạn kỳ nghỉ dưỡng hoàn hảo tại Flamingo Hải Tiến với
              dịch vụ chuyên nghiệp, tiện nghi đẳng cấp và giá tốt nhất.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialItems.map((item) => (
                <span
                  key={item.label}
                  title={item.title}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary text-sm font-bold uppercase text-primary-foreground transition hover:bg-primary/80"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-bold text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-muted-foreground">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer transition-colors hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold text-foreground">Thông tin</h3>
            <ul className="mt-4 space-y-4">
              {infoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-[15px] text-muted-foreground"
                  >
                    <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground">
              Đăng ký nhận ưu đãi
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              Nhận thông tin ưu đãi và khuyến mãi mới nhất từ Flamingo Hải Tiến
            </p>
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </footer>
  );
}
