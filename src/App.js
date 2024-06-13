import "./App.css";
import { About, Contact, Header, Home, Portfolio } from "./sections";
function App() {
  return (
    <div className="App bg-clothBlack  text-secondary ">
      <div className="mx-20 max-w-7xl mx-auto px-10  ">
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
