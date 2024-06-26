
import { useEffect } from 'react';
import './App.css';
import Company from './screens/Company';
import Contact from './screens/Contact';
import Footer from './screens/Footer';
import Header from './screens/Header';
import Main from './screens/Main';
import Projects from './screens/Projects';
import Services from './screens/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="">
      <Header/>
      <Main/>
      <Services/>
      <Company/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
