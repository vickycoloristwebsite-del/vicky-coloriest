"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface ColorComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
}

export default function ColorComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  title,
}: ColorComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full flex flex-col space-y-2">
      {title && (
        <div className="text-xs font-mono uppercase tracking-widest text-[#888] px-1">
          {title}
        </div>
      )}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full aspect-video select-none overflow-hidden rounded bg-[#111] cursor-ew-resize touch-none shadow-2xl"
      >
        {/* Base Layer: Graded / After image */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
          draggable={false}
        />

        {/* Clipped Top Layer: Log/Before image */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Badges / Pill Tags */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none select-none bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[11px] font-medium tracking-wider uppercase text-white/90 shadow-sm">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 z-20 pointer-events-none select-none bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[11px] font-medium tracking-wider uppercase text-white/90 shadow-sm">
          {afterLabel}
        </div>

        {/* Divider Bar & Centered Handle */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none z-30"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical line with glow shadow */}
          <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.9)]" />

          {/* Grip handle button */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black shadow-[0_2px_12px_rgba(0,0,0,0.6)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
            <svg
              className="w-4 h-4 text-neutral-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l-4 3 4 3m8-6l4 3-4 3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
