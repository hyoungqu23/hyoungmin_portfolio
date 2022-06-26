import { NavBar, Footer } from './components';
import { Home, About, Introduction, Projects, Skills } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
