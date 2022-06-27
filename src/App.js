import { NavBar, Footer } from './components';
import { Home, About, Introduction, Projects, Skills } from './pages';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Home />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
