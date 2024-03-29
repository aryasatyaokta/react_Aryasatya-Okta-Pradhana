import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
