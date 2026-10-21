import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar/Navbar';
import Home from './pages/home/Home';
import Strategy from './pages/strategy/Strategy';
import What from './pages/what/What';
import Who from './pages/who/Who';
import Strategy2 from './pages/strategy2/Strategy2';
import Contact from './components/navbar/contact/Contact';
import Experience from './pages/experience/Experience';
import NotFound from './pages/not-found/NotFound';
// import Socials from './pages/socials/Socials';


function App() {

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/what' element={<What />} ></Route>
          <Route path='/who' element={<Who />} ></Route>
          <Route path='/experience' element={<Experience />} ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Contact />
    </>
  );
}

export default App;