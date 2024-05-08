import React from 'react';
import Announcments from '../components/Announcments';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Slider from '../components/Slider';



const Home = () => {
    return (
        <div>
            <Announcments/>
            <Navbar />
            <Slider/>
            <Categories/>
            <Products/> 
            <NewsLetter/>
            <Footer/>
        </div>
    );
}

export default Home;
