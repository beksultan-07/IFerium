import React from 'react';
import { Route, Routes } from "react-router";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home/Home'


function App() {
  const [lang, setLang] = React.useState('en')
  const [showDD, setShowDD] = React.useState(false)

  const [loaderState, setloaderState] = React.useState(false)

  function headerClicks(){
    setShowDD(false)
  }

  return (
    <div onClick={() => headerClicks()}>
      <Loader showLoader={loaderState}/>
      <Header 
        lang={lang} 
        setLang={setLang} 
        setShowDD={setShowDD} 
        showDD={showDD}
      />
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<div>error</div>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
