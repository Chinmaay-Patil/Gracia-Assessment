import React from 'react';
import "./css/Home.css"
// import HeroSlider, { Slide } from 'hero-slider';
// import image from "../components/images/PathFrameLogo.JPG"
import Slider from '../components/Slider/Slider';
import ProductsWeOffer from '../components/ProductsWeOffer/ProductsWeOffer'
import OurServices from '../components/OurServices/OurServices'
import AboutUs from '../components/AboutUs/AboutUs'
import Clients from '../components/Clients/Clients'
import Footer from '../components/Footer/Footer'
const Home = () => {

  return (
    <div>
      <Slider />
      <ProductsWeOffer/>
      <OurServices/>
      <AboutUs/>
      <Clients/>
      <Footer/>
    </div>

  )
};

export default Home;