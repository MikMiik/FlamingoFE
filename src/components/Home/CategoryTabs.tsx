"use client";

import { useState } from "react";

const categoryTabs = ["Căn hộ", "Villa", "Mini Hotel", "Phòng khách sạn"];

interface CategoryTabsProps {
  onTabChange?: (tab: string, index: number) => void;
}

export function CategoryTabs({ onTabChange }: CategoryTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (tab: string, index: number) => {
    setActiveIndex(index);
    onTabChange?.(tab, index);
  };

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      {categoryTabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => handleTabChange(tab, index)}
          className={`rounded-lg px-4 py-2 text-sm font-bold transition-all ${
            index === activeIndex
              ? "bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(29,99,232,0.22)]"
              : "text-foreground hover:bg-secondary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
