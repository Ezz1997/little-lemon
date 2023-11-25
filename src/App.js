import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './components/Main';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <>
      <Header></Header>

      <Nav></Nav>

      <Main>
        <section>
          <HeroSection></HeroSection>
        </section>
        <section>
          <Highlights></Highlights>
        </section>
        <section>
          <Testimonials></Testimonials>
        </section>
        <section>
          <About></About>
        </section>
      </Main>

      <Footer>

      </Footer>
    </>
  );
}

export default App;
