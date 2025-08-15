import { Link, Outlet } from "react-router";
import {
  useMotionValueEvent,
  MotionValue,
  motion,
  useScroll,
} from "motion/react";
import type { Variants } from "motion/react";
import { useState, useRef } from "react";

// export const App = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll({ container: ref });
//   return (
//     <div ref={ref} className="h-dvh w-full overflow-auto text-black">
//       <div className="min-h-[300vh] bg-linear-to-b from-[rgba(255,255,255,.1)] to-[rgba(255,255,255,0)]">
//         <Nav scrollY={scrollY} />
//       </div>
//     </div>
//   );
// };

const Nav = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
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
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-nav flex w-full justify-center pt-3"
    >
      <nav className="flex justify-between gap-3 rounded-3xl bg-white p-2 *:rounded-xl *:border *:border-[#ccc] *:px-3 *:py-1 *:transition-colors *:duration-300 *:hover:bg-[#ccc] *:focus-visible:bg-[#ccc]">
        <Link to="#" className="bg-white hover:bg-[#ccc]">
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
          </svg>
          <span className="sr-only">Home</span>
        </Link>
        <Link to="#">Products</Link>
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
      </nav>
    </motion.div>
  );
};

export const Layout = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: ref });
  return (
    <div ref={ref} className="min-h-dvh w-full overflow-auto flex flex-col">
      <Nav scrollY={scrollY} />
      {/* <nav className="p-4">
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav> */}
      <Outlet />
    </div>
  )
}
