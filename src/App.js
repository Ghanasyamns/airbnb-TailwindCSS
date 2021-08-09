import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Largecard from "./components/Largecard";
import MeadiumCards from "./components/MeadiumCards";
import NavBar from "./components/NavBar";
import SmallCards from "./components/SmallCards";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <main className=" max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-3">
          <SmallCards />
        </section>
        <section>
          <h1 className="text-4xl my-3 font-semibold pb-5">Live Anywhere</h1>

          <MeadiumCards />
        </section>
        <Largecard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
