// src/components/ImageSlider.tsx (새 파일 생성)
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  alt: string;
  autoPlayInterval?: number; // 밀리초 단위, 기본값 3000
  showArrows?: boolean;
  showIndicators?: boolean;
}

export default function ImageSlider({
  images,
  alt,
  autoPlayInterval = 3000,
  showIndicators = true,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="relative aspect-[4/3] w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400">이미지 없음</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white/50 dark:bg-gray-900/30 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-blue-500/10" />

      {/* 이미지 슬라이더 */}
      <div className="relative aspect-[4/3]">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`${alt} - ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* 인디케이터 (점) */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[var(--color-accent)] w-6"
                  : "bg-white/50 hover:bg-white/80 w-2"
              }`}
              aria-label={`이미지 ${index + 1}로 이동`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
