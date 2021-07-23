import React from 'react';
import Toggle from './toggle';
import Banner from "./Banner";
import Hero from "./Hero";
import Footer from "./Footer";
import Popular from "./Popular";
import AboutUs from "./AboutUs";

class HomePage extends React.Component {
    render() {
        return (
            
<>

<Banner />
{/* <Hero /> */}
<Popular />
<Toggle/>
<AboutUs />
<Footer/>
</>
        )
    }
}

export default HomePage;