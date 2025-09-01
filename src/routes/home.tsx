import { useRef } from 'react'

import { WorkList } from '@/components/WorkList'
import { TypeEffect } from '@/components/TypeEffect'


export const Home = () => {
  const workRef = useRef<HTMLElement | null>(null)

  return (
    <>
      <section
        className="font-helvetica
          relative flex flex-col items-center justify-center
          gap-6 px-8 py-24 overflow-clip
          h-[98%] min-h-fit min-w-lg
          -mt-16
          *:z-1"
        aria-label="Hero Section"
      >
        <div aria-label="Background Video" className="absolute z-0 min-w-full min-h-full h-[100%] w-auto">
          <video className="h-full w-full object-cover" autoPlay loop muted>
            <source src="/bg-home.mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.7)] z-1" />
        </div>
        <div className="max-md:w-full">
          <img
            src="/zoom-hero-headshot.PNG"
            alt="hero section headshot"
            className="h-[clamp(8rem,25vw,16rem)] w-auto rounded-full"
          />
        </div>
        <h1 className="w-full md:w-auto text-white leading-[1] text-[clamp(4rem,9.6vw,9rem)]">
          <span className="font-light font-dm mb-2">Hey! I'm </span>
          <span className="font-bold font-varuna">Alan.</span>
        </h1>
        <h2 className="-mt-6 z-1 w-full md:w-fit md:mx-auto font-dm text-2xl text-gray-300 text-[clamp(2.2rem,4.8vw,8rem)] relative">
          I'm a{' '}
          <TypeEffect
            className="font-bold"
            words={["Software Developer", "CS + Finance Major", "Fullstack Developer", "Math Educator", "Varsity Athlete"]}
          />
        </h2>
        <div className="w-full md:w-auto">
          <button
            onClick={() => workRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className=" text-white text-lg hover:text-blue-100
              py-2 px-4 bg-blue-600 rounded-sm"
          >
            Where I've Worked
          </button>
        </div>
      </section>
      <section
        id="about-summary"
        className="font-dm text-white
          px-8 md:px-20 pt-20 min-w-lg *:max-w-7xl *:mx-auto"
        aria-label="About Summary"
      >
        <h1 className="font-dm text-5xl mb-8 pb-5">
          About Me
        </h1>
        <article className="*:pb-5">
          <p className="text-2xl">
            I'm Alan Zheng, a <b>4<sup>th</sup></b> year <b>Computing and Financial Management</b> undergrad at the <b className="text-[#ffd100]">University of Waterloo</b>. (Computing and Financial Management '27)
          </p>
          <p className="text-xl">
            I'm deeply interested in <b>Finance</b>, <b>Computer Science</b> and <b>Math</b>.
          </p>
          <p className="text-xl">
            In my spare time, I love to fence, play chess, and solve math puzzles.
          </p>
          <p className="text-xl">
            I'm currently seeking internships to make something great and learn something new!
          </p>
        </article>
      </section>
      <section id="work-experience" ref={workRef} className="font-dm min-w-lg text-white px-8 md:px-20 pt-20 *:mb-2">
        <h1 className="font-dm text-5xl pb-4 md:pl-12">
          Work Experience
        </h1>
        <WorkList />
      </section>
      <section id="contact" className="font-dm min-w-lg text-gray-900 bg-slate-400 px-8 md:px-20 pt-20 mt-12">
        <div className="max-w-7xl mx-auto flex justify-between">
          <h1 className="text-4xl pb-12">
            Contact Me
          </h1>
          <div className="flex gap-2 text-xl *:hover:text-gray-800 *:h-fit">
            <a href="mailto:ayzheng@uwaterloo.ca">Email</a>
            •
            <a href="https://www.instagram.com/alan77zheng">Instagram</a>
            •
            <a href="https://www.linkedin.com/in/alan-y-zheng/">LinkedIn</a>
            •
            <a href="https://github.com/threeholestraw">GitHub</a>
          </div>
        </div>
      </section>
    </>
  )
}
