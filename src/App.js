import { NavBar, Footer } from './components';
import { About, Introduction, Projects, Skills } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
