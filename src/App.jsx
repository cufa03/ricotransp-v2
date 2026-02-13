import './app.css';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar/index';
import Home from './components/pages/home/Home';
import AboutSection from './components/pages/about';
import OurTrucks from './components/pages/trucks';
import ContactUs from './components/pages/contact';
import NewNavbar from './components/navbar/newNavbar';
import NewFooter from './components/footer/NewFooter';

function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        {/* <Navbar /> */}
        <NewNavbar />
      </header>

      <main className='app__main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trucks' element={<OurTrucks />} />
          <Route path='/about-section' element={<AboutSection />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </main>

      <footer className='app__footer'>
        <NewFooter />
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
