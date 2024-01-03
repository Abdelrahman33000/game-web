import './App.css';
import {  Products } from './Pages';
import {Footer, Header, NavBar } from './component';
function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
      <Header />
      <NavBar />
<Products />
      <Footer />
    </div>
  );
}

export default App;
