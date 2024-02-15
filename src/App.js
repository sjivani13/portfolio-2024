
import './App.css';
import {Routes, Route} from "react-router-dom"
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Home from './containers/home';
import Resume from './containers/resume';
import Contact from './containers/contact';
import About from './containers/about';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
      
    { /* navbar */}
    <Navbar/>
    { /* main page content */}
      <Routes>
     <Route index path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
  <Route path='/contact' element={<Contact/>} /> 
    </Routes> 
    </div>
  );
}

export default App;
