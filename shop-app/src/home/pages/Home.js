import React from 'react';
import './Home.css';
import SlideShow from '../../shared/components/SlideShow/SlideShow';
import TitleDivideSection from '../../shared/components/UIElements/TitleDivideSection/TitleDivide'
import CategoriesFeature from '../components/CategoriesFeature/CategoriesFeature';
import Partner from '../components/Partners/Partner';
import CustomerReview from '../components/CustomerReview/CustomerReview';
import HotProduct from '../components/ProductsFeature/HotProduct';
import NewSection from '../components/NewSection/NewSection';



const Home = props => {
    return (
        <>
        <SlideShow/>
        <div className="home-container">
        <TitleDivideSection subDescription/>
        <CategoriesFeature/>
        <NewSection/>
        <HotProduct/>
        <TitleDivideSection/>
        <CustomerReview/>
        <Partner/>
        </div>
        </>
    )
}

export default Home;