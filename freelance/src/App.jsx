import './App.css'
import Navbar from './components/navbar'
import Landingpage from './pages/landingpage'
import Projects from './pages/projects'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
