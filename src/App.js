// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Project from './Components/Project';




function App() {
  return (
    <div className="App">
      
      <Header />
      <hr />
      <Navbar />
      <br />
      <Banner />
      <br />
      <About />
      <br />
      <hr />
      <h1 className="skillheader">My Skills</h1>
      <hr />
      <Project />
      <hr />
      <Portfolio />
      <hr />
      <h1 id="contactnav" className="contact">Contact Information</h1>
      <hr />
      <Contact />
    </div>
  );
}

export default App;
