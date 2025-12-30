import './App.css'
// import { createBrowserRouter, RouterProvider } from 'react-router'
// import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Navbar from './Components/Navbar/Navbar'
import OurPortfolio from './Pages/OurPortfolio/OurPortfolio'
import AboutUs from './Pages/AboutUs/AboutUs'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/Loader'
import { useEffect, useState } from 'react'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;


  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <AboutUs></AboutUs>
      <Services ></Services>
      <OurPortfolio></OurPortfolio>
      <Contact></Contact>
      <Footer></Footer>


    </>
  )
}

export default App
