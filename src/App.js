import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import ProductBanner from "./components/ProductBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Banner />
        <ProductBanner />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
