import { Link } from 'react-router'
import viteLogo from '/vite.svg'

export const Home = () => {
  return (
    <>
      <section className="font-helvetica relative flex flex-col items-center justify-center gap-6 px-8 overflow-clip h-full min-h-[90svh] min-w-md md:min-w-full *:z-1">
        <div aria-label="Background Video" className="absolute z-0 min-w-full min-h-full h-[100%]">
          <video className="h-full w-full object-cover" autoPlay loop muted>
            <source src="/bg-home.mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.7)] z-1" />
        </div>
        <a href="https://vite.dev" target="_blank" className="w-full md:w-auto">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1 className="w-full md:text-center text-white leading-[1] text-[clamp(2.5rem,6vw,10rem)]">
          <span className="font-light block">"The wind is rising!</span>
          <span className="font-medium text-[clamp(2.5rem,6vw,10rem)]">We must try to live.</span>"
        </h1>
        <p className="w-full md:w-auto text-2xl text-gray-100 text-[clamp(1rem,2vw,1.5rem)]">
          Thriving in a world of <b>volatile markets</b> and <b>evolving technology</b>.
        </p>
      </section>
      <section className="">

      </section>
      <div className="card">
        <Link to="/about">
          this button does nothing...
        </Link>
        <p className="bg-black text-red-100">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}
