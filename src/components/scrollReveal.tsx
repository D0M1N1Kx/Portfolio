import { type ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "down" | "none";
  threshold?: number;
};

export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return true;
    }
    return false;
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const initialTransform =
    direction === "up"
      ? "translate-y-8"
      : direction === "down"
      ? "-translate-y-8"
      : "scale-95";

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: "700ms",
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : `opacity-0 ${initialTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
