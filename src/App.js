import './App.css'
import Header from './components/header/Header'
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
