import './App.css';
import Header from './Components/Header/Index';
import Footer from './Components/Footer/Index';
import Hero from './Components/Hero/Index'
import SchoolInfo from './Components/SchoolInfo/Index';
import PrincipalMessage from './Components/Principle/Index';
import Facilities from './Components/Facilities/Index';
import SchoolGallery from './Components/SchoolGallery/Index';

function App() {
  return (
    <>
     <Header/> 
     <Hero/>
     <SchoolInfo/>
     <PrincipalMessage/>
     <Facilities/>
     <SchoolGallery/>
     <Footer/>
    </>
  );
}

export default App;
