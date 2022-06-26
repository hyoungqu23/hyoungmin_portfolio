import { NavBar } from './components/NavBar';
import { About, Introduction, Projects, Skills } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Introduction />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
