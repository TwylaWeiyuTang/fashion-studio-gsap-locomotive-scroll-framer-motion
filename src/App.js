import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import { dark } from './styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Home from './Sections/Home';
import About from './Sections/About';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { AnimatePresence } from 'framer-motion';
import Shop from './Sections/Shop';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from './Sections/Banner';

function App() {
  const containerRef = useRef(null)

  return (
    <>
    <GlobalStyle />

    <ThemeProvider theme={dark}>
      <LocomotiveScrollProvider 
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}>
        <ScrollTriggerProxy />
        <AnimatePresence>
          <main className='App' data-scroll-container ref={containerRef}>
          <Home />
          <About />
          <Shop />
          <Banner />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
