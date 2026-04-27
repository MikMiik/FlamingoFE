import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80"
          alt="Flamingo Hải Tiến beach"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/86 from-0% via-background/62 via-40% to-secondary/16 to-100% dark:from-background/72 dark:via-background/48 dark:to-secondary/22" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />

      <Container className="relative min-h-[430px] pt-8 pb-24 md:min-h-[500px] md:pt-10 lg:min-h-[540px] lg:pb-28 2xl:min-h-[580px]">
        <div className="max-w-[460px] pt-2 md:max-w-[520px] lg:pt-6">
          <p className="text-lg font-bold text-primary md:text-[22px]">
            Flamingo Hải Tiến
          </p>
          <h1 className="mt-1 text-4xl leading-[1.02] font-extrabold tracking-tight text-foreground md:text-[60px] lg:text-[68px]">
            <span className="block text-[31px] font-normal italic text-primary md:text-[62px] md:leading-none md:[font-family:'Brush_Script_MT','Segoe_Script',cursive] lg:text-[72px]">
              Khu nghỉ dưỡng
            </span>
            <span className="mt-2 block">Bên bờ biển xinh đẹp</span>
          </h1>
          <p className="mt-4 max-w-[360px] text-[15px] leading-7 text-muted-foreground md:text-base">
            Trải nghiệm kỳ nghỉ tuyệt vời với dịch vụ đẳng cấp và tiện nghi hiện
            đại.
          </p>
        </div>
      </Container>
    </section>
  );
}
