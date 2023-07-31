"use client";
import Footer from "./components/Footer/Footer";
import Home_Main from "./components/Home_Main/Home_Main";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Home_Main/>
      <Footer/>
    </div>
  );
}
