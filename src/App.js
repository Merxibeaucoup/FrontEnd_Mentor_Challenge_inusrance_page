import React from "react";
import Different from "./components/Different";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Header />
        <Different />
      </main>
      <Footer />
    </div>
  );
};

export default App;
