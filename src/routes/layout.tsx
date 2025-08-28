import { Link, Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="min-h-[300vh] min-w-md bg-linear-to-b from-[#22344c] to-[#537eb9] justify-center">
      <nav className="absolute z-50 flex w-full justify-center *:bg-[rgba(255,255,255,0.3)]">
        {/* nav placeholder */}
        <Link to="/">Home</Link> | <Link to="/about">This is a nav bar placeholder, i forgot to push on my main computer</Link>
      </nav>
      <Outlet />
    </div>
  )
}