import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar/Navbar';
import Home from './pages/home/Home';
import Strategy from './pages/strategy/Strategy';
import What from './pages/what/What';
import Who from './pages/who/Who';
import Strategy2 from './pages/strategy2/Strategy2';
import Contact from './components/navbar/contact/Contact';


function App() {

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/strategy' element={<Strategy />} ></Route>
          <Route path='/strategy2' element={<Strategy2 />}></Route>
          <Route path='/what' element={<What />} ></Route>
          <Route path='/who' element={<Who />} ></Route>
        </Routes>
      </div>
      <Contact />
    </>
  );
}

export default App;