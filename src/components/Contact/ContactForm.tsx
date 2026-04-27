"use client";

import { useState } from "react";
import { ChevronDown, Lock, Send } from "lucide-react";

const topics = [
  "Đặt phòng",
  "Hủy phòng",
  "Ưu đãi & Khuyến mãi",
  "Phản hồi dịch vụ",
  "Khác",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
  });
  const [topicOpen, setTopicOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with contact API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Họ và tên *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Nhập họ và tên"
            className="flex h-11 w-full items-center rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Số điện thoại *
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Nhập số điện thoại"
            className="flex h-11 w-full items-center rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Email *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Nhập email"
            className="flex h-11 w-full items-center rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Chủ đề *
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setTopicOpen((v) => !v)}
              className="flex h-11 w-full items-center justify-between rounded-xl border border-border bg-background px-4 text-sm transition-colors focus:border-primary"
            >
              <span className={form.topic ? "text-foreground" : "text-muted-foreground/60"}>
                {form.topic || "Chọn chủ đề"}
              </span>
              <ChevronDown className="size-4 text-muted-foreground" />
            </button>
            {topicOpen && (
              <div className="absolute top-full left-0 right-0 z-10 mt-1 overflow-hidden rounded-xl border border-border bg-card shadow-[0_4px_16px_rgba(15,61,145,0.08)]">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => { setForm({ ...form, topic: t }); setTopicOpen(false); }}
                    className="flex w-full items-center px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Nội dung *
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Nhập nội dung tin nhắn của bạn..."
            rows={5}
            className="flex w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-base font-bold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
      >
        <Send className="size-4" />
        Gửi tin nhắn
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Lock className="size-4" />
        Thông tin của bạn được bảo mật tuyệt đối
      </div>
    </form>
  );
}
