import { Routes, Route } from 'react-router'

import { Layout } from './routes/layout'
import { Home } from './routes/home'

const About = () => {
  return (
    <div className='mx-8 md:mx-20'>
      <h1 className="mx-auto max-w-7xl text-white text-2xl my-4">More pages coming soon!</h1>
      <h2 className="mx-auto max-w-7xl text-white text-xl my-4">This site was made using React Router and Tailwind.</h2>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
