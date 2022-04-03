import React from 'react';
import { Route, Routes } from "react-router";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Header/>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<div>error</div>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
