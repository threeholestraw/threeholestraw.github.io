import { Link } from 'react-router'
import { useRef } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { WorkLine } from '../components/WorkLine'

import viteLogo from '/vite.svg'
import nauticalLogo from '/nautical-logo.webp'

export const Home = () => {
  const workRef = useRef<HTMLElement | null>(null)
  // const chevronRef = useRef<SVGSVGElement | null>(null)

  return (
    <div className="-mt-16">
      <section
        className="font-helvetica
          relative flex flex-col items-center justify-center
          gap-6 px-8 overflow-clip
          h-full min-h-[90svh] min-w-full
          *:z-1 *:w-full"
        aria-label="Hero Section"
      >
        <div aria-label="Background Video" className="absolute z-0 min-w-full min-h-full h-[100%] w-auto">
          <video className="h-full w-full object-cover" autoPlay loop muted>
            <source src="/bg-home.mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.7)] z-1" />
        </div>
        <a href="https://vite.dev" target="_blank" className="md:w-auto">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1 className="md:text-center text-white leading-[1] text-[clamp(2.5rem,6vw,10rem)]">
          <span className="font-light block">"The wind is rising!</span>
          <span className="font-medium text-[clamp(2.5rem,6vw,10rem)]">We must try to live.</span>"
        </h1>
        <p className="md:w-auto text-2xl text-gray-300 text-[clamp(1.25rem,2vw,1.5rem)]">
          Thriving in a world of <b>volatile markets</b> and <b>evolving technology</b>.
        </p>
        <div className="md:w-auto">
          <button
            onClick={() => workRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className=" text-white hover:text-blue-100
              py-2 px-4 bg-blue-600 rounded-sm"
          >
            Learn More
          </button>
        </div>
        {/* <ChevronDownIcon className="absolute bottom-2 z-2 stroke-white w-5 h-5" ref={chevronRef} /> */}
      </section>
      <section
        className="font-dm text-white md:text-center
          px-8 md:px-20 mt-20 mb-15 *:pb-5"
        aria-label="About Summary"
      >
        <h2 className="text-2xl">
          Hey! I'm Alan Zheng, a <b>4<sup>th</sup></b> year <b>Computing and Financial Management</b> student at the <b className="text-[#ffd100]">University of Waterloo</b>.
        </h2>
        <p className="text-xl">
          I'm deeply interested in <b>Finance</b>, <b>Computer Science</b> and <b>Math</b>. In my spare time, I love to fence, play chess, and solve math puzzles.
        </p>
        <p className="text-xl">
          I'm currently seeking internship opportunities to apply my skills, create something great, and learn something new.
        </p>
      </section>
      <section id="work-experience" ref={workRef} className="font-dm text-white px-8 md:px-20 py-20">
        <WorkLine
          companyName='Nautical Commerce'
          companyLogo={nauticalLogo}
          companyLogoAlt='nautical commerce logo'
          jobTitle='Fullstack Developer'
          startDate='May 2025'
          endDate='August 2025'
          location='Toronto, ON'
          href='https://www.nauticalcommerce.com'
          roundedLogo
        >
          <p>This is a bullet point.</p>
          <p>This is another bullet point.</p>
        </WorkLine>
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
    </div>
  )
}
