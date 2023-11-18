import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Products from './Products';
import Collections from './Collections';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category></Category>
            <Products></Products>
            <Collections></Collections>
        </div>
    );
};

export default Home;