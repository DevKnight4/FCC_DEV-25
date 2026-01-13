
import { Route, Routes, Link } from 'react-router-dom'; //BrowserRouter as Router,
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Project from './components/projects/Project';
import Events from './components/events/Events';
import Team from './components/team/Team';
import Alumni from './components/alumni/Alumni';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';


function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
