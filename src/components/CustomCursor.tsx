import React, { useEffect, useRef } from 'react';

const BASKET_CURSOR_IMG = 'https://kelechieze.wordpress.com/wp-content/uploads/2026/10/grace_basket-removebg-preview.png';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const isVisible = useRef(false);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse / trackpad)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        // Snap immediately on first movement so it doesn't fly in from offscreen
        currentPos.current.x = e.clientX;
        currentPos.current.y = e.clientY;
        if (cursorRef.current) {
          cursorRef.current.style.opacity = '1';
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };

    // 60-120fps direct hardware-accelerated render loop (LERP interpolation)
    const render = () => {
      if (isVisible.current && cursorRef.current) {
        // Smooth linear interpolation factor: fast, responsive and silky smooth
        const ease = 0.35;
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

        // Position slightly offset from cursor point
        const offsetX = 10;
        const offsetY = 10;

        cursorRef.current.style.transform = `translate3d(${currentPos.current.x + offsetX}px, ${currentPos.current.y + offsetY}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 will-change-transform opacity-0 select-none"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'opacity 0.15s ease-out',
      }}
      aria-hidden="true"
    >
      <img
        src={BASKET_CURSOR_IMG}
        alt=""
        className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-xl select-none pointer-events-none"
        draggable={false}
      />
    </div>
  );
};
