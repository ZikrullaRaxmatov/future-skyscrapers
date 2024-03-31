
import './App.css';
import Company from './screens/Company';
import Contact from './screens/Contact';
import Header from './screens/Header';
import Main from './screens/Main';
import Projects from './screens/Projects';
import Services from './screens/Services';

function App() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <Services/>
      <Company/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
