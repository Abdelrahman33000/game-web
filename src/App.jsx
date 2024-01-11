import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AllImages, Gallery, Products } from "./Pages";
import { Footer, Header, NavBar } from "./component";

function App() {
  return (
      <div className="App" style={{ overflowX: "hidden" }}>
        <Header />
        <NavBar />
       
        <Routes>
          <Route path="/products" element={ <Products />} />
          <Route  path="/gallery" element={<Gallery />} />
          <Route  path="/all" element={<AllImages />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
