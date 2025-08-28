import { Link, Outlet } from "react-router";
import {
  useMotionValueEvent,
  MotionValue,
  motion,
  useScroll,
} from "motion/react";
import type { Variants } from "motion/react";
import { useState, useRef } from "react";

const Nav = ({ scrollY }: { scrollY: MotionValue<number> }) => {
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
          hidden: { y: "-90%" },
          peeking: { y: "0%", cursor: "pointer" },
        } as Variants
      }
      transition={{
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="sticky top-0 z-10 flex w-full justify-center pt-3"
    >
      <nav className="flex justify-between items-center gap-5 rounded-2xl p-2 pl-4 border border-gray-300 bg-white">
        <Link to="#" className="h-min text-2xl font-[Helvetica_Neue]">
          Alan Zheng
        </Link>
        <div className="flex justify-between gap-3 *:rounded-xl *:border *:border-[#ccc] *:px-3 *:py-1 *:transition-colors *:duration-300 *:hover:bg-[#ccc] *:focus-visible:bg-[#ccc]">
          <Link to="#" className="font-sans">Products</Link>
          <Link className="md:hidden" to="#">
            ...
          </Link>
          <Link className="max-md:hidden" to="#">
            Services
          </Link>
          <Link className="max-md:hidden" to="/about">
            About
          </Link>
          <Link className="max-md:hidden" to="#">
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
    <div ref={ref} className="h-dvh w-full overflow-auto flex flex-col">
      <div className="min-h-[300vh] bg-linear-to-b from-[#22344c] to-[#537eb9]">
        <Nav scrollY={scrollY} />
        <hr className="stroke-10"/>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
