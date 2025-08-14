import { Routes, Route } from 'react-router'

import { Layout } from './routes/layout'
import { Home } from './routes/home'

const About = () => {
  return <h2>About Page coming soon</h2>
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
