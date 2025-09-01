import { Link, Outlet } from "react-router";
import {
  useMotionValueEvent,
  MotionValue,
  motion,
  useScroll,
} from "motion/react";
import type { Variants } from "motion/react";
import { useState, useRef } from "react";

const StickyNav = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y: number) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      whileHover={hidden ? "peeking" : "visible"}
      onFocusCapture={hidden ? () => setHidden(false) : undefined}
      variants={
        {
          visible: { y: "0%" },
          hidden: { y: "-87%" },
          peeking: { y: "0%", cursor: "pointer" },
        } as Variants
      }
      transition={{
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="sticky top-0 px-8 md:px-16 min-w-lg z-10 items-center pt-3 pointer-events-none"
    >
      <nav className="flex justify-between items-center text-white gap-3 rounded-2xl p-2 pl-4 border border-gray-300 backdrop-blur-md pointer-events-auto max-w-7xl mx-auto">
        <Link to="/" className="h-min text-3xl font-varuna -mb-2">
          Alan Zheng
        </Link>
        <div className="flex justify-between gap-2 font-dm *:rounded-xl *:border *:border-white *:px-3 *:py-1 *:transition-colors *:duration-300 *:hover:bg-[#ccc] *:focus-visible:bg-[#ccc]">
          <a href="#about-summary">
            About
          </a>
          <a href="#work-experience">Past Work</a>
          <Link to="#contact">
            Contact
          </Link>
        </div>
      </nav>
    </motion.div>
  );
};

export const Layout = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: ref });
  return (
    <div ref={ref} className="h-dvh w-full min-w-lg overflow-auto bg-gray-800">
      <StickyNav scrollY={scrollY} />
      <Outlet />
    </div>
  )
}
