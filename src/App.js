import { NavBar, Footer } from './components';
import { Home, About, Introduction, Projects, Skills } from './pages';
import Container from './styles/Container';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Container>
        <Home />
        <About />
        <Introduction />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
