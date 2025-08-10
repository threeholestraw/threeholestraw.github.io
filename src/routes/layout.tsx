import { Link, Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <div className="bg-black">

      </div>
      <nav className="p-">
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  )
}