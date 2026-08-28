import { useEffect, useRef, useState } from "react";
import { HALLOWEEN } from "@/lib/halloween-assets";
import { cn } from "@/lib/utils";

/** Reads scroll offset once per frame — shared by every parallax layer. */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setY(window.scrollY);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return y;
}

export function ParallaxLayer({
  speed = 0.2,
  className,
  children,
}: {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const y = useScrollY();
  return (
    <div
      className={cn("will-change-transform", className)}
      style={{ transform: `translate3d(0, ${(y * speed).toFixed(2)}px, 0)` }}
    >
      {children}
    </div>
  );
}

const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 5.7 + 4) % 96}%`,
  delay: `${(i % 9) * 1.4}s`,
  duration: `${9 + (i % 5) * 2.5}s`,
  size: 3 + (i % 3),
  drift: `${(i % 2 === 0 ? 1 : -1) * (18 + (i % 4) * 14)}px`,
}));

const BATS = [
  { top: "12%", delay: "0s", duration: "26s", scale: 0.5, opacity: 0.55 },
  { top: "26%", delay: "9s", duration: "34s", scale: 0.34, opacity: 0.4 },
  { top: "44%", delay: "17s", duration: "30s", scale: 0.24, opacity: 0.3 },
];

/**
 * Full-page cinematic backdrop: blackish golden-yellow cloud bands that drift
 * and parallax, floating embers, and bat flocks crossing the sky.
 * Purely decorative — pointer-events are disabled so commerce UI stays usable.
 */
export function HalloweenAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* base vignette + ember horizon */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_75%_at_50%_-10%,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_62%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--blood)_30%,transparent),transparent)]" />

      {/* moon glow */}
      <ParallaxLayer speed={0.12} className="absolute -top-24 right-[8%]">
        <div className="animate-moon-glow h-72 w-72 rounded-full bg-[color-mix(in_oklab,var(--gold)_65%,transparent)] blur-[70px]" />
      </ParallaxLayer>

      {/* golden-black cloud bands */}
      <ParallaxLayer speed={0.08} className="absolute -top-10 left-0 w-full">
        <img
          src={HALLOWEEN.clouds.gold}
          alt=""
          className="animate-drift w-[135%] max-w-none opacity-45 mix-blend-screen"
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.22} className="absolute top-[18vh] left-[-12%] w-full">
        <img
          src={HALLOWEEN.clouds.ember}
          alt=""
          className="animate-drift w-[130%] max-w-none opacity-30 mix-blend-screen [animation-duration:62s]"
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.35} className="absolute top-[52vh] right-[-16%] w-full">
        <img
          src={HALLOWEEN.clouds.dark}
          alt=""
          className="animate-drift ml-auto w-[125%] max-w-none opacity-70 [animation-duration:74s]"
        />
      </ParallaxLayer>

      {/* webs anchored in the corners */}
      <img
        src={HALLOWEEN.webs.a}
        alt=""
        className="absolute top-0 left-0 w-40 opacity-30 sm:w-56"
      />
      <img
        src={HALLOWEEN.webs.b}
        alt=""
        className="absolute top-0 right-0 w-40 opacity-25 sm:w-56"
      />

      {/* bats */}
      {BATS.map((bat, i) => (
        <img
          key={i}
          src={HALLOWEEN.bats}
          alt=""
          style={{
            top: bat.top,
            animationDelay: bat.delay,
            animationDuration: bat.duration,
            transform: `scale(${bat.scale})`,
            opacity: bat.opacity,
          }}
          className="absolute left-0 w-52 [animation-iteration-count:infinite] [animation-name:hh-bat] [animation-timing-function:linear]"
        />
      ))}

      {/* embers */}
      {EMBERS.map((e, i) => (
        <span
          key={i}
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDelay: e.delay,
            animationDuration: e.duration,
            ["--ember-x" as string]: e.drift,
          }}
          className="absolute bottom-[-10px] rounded-full bg-[color-mix(in_oklab,var(--ember-bright)_80%,var(--gold))] shadow-[0_0_10px_2px_color-mix(in_oklab,var(--ember)_60%,transparent)] [animation-iteration-count:infinite] [animation-name:hh-ember] [animation-timing-function:ease-out]"
        />
      ))}

      {/* grain */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(var(--cream)_0.5px,transparent_0.6px)] [background-size:3px_3px]" />
    </div>
  );
}
