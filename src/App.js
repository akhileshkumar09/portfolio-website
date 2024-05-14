import "./index.css"
import Navbar from "./components/Navbar";
import Heading from "./components/Heading"
import Feature from "./components/feature/Feature";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div style={{backgroundColor: '#070707'}}>
    <Navbar/>
    <Heading/>
    <Feature/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
