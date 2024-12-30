import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Navbar/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
