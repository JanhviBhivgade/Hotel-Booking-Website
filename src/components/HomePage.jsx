import React from 'react';
import HeroSection from './Hero';
import ResortFeatures from './Features';
import PhotoGallery from './PhotoGalley';
import About from './About';
import TestimonialSlider from './Testimonial';
import BookRoom from './Bookoom';
import RestaurantSection from './Cafe';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <ResortFeatures/>
      <PhotoGallery/>
      <About/>
      <RestaurantSection/>
      <TestimonialSlider/>
      <BookRoom/>
      <Footer/>
    </div>
  );
}

export default HomePage;