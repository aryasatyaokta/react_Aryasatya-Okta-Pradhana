import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CreateProduct from './pages/CreateProduct'
import LandingPage from './pages/LandingPage'
import React, { useEffect } from 'react';
// import './App.css'

function App() {

  useEffect (() => {
    alert("Welcome")
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        {/* ... etc. */}
      </>
    )
  );  

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
    
  )
}

export default App
