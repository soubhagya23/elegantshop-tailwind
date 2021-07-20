import React from 'react';
import HeroImage from "../Assets/HeroImage.jpg"

class Banner extends React.Component {
    render() {
        return(
            
<div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
           
            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Be on
                <span class="text-5x1 sm:text-7xl">
                    Trend
                </span>
            </h1>
            <p class="text-sm sm:text-base text-gray-700 dark:text-white mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum vehicula dignissim. Mauris sed dapibus risus, sed scelerisque justo. Nam tempus metus eget elit faucibus, sed molestie ex varius. 
            </p>
            <div class="flex mt-8">
                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                    Shop Now
                </a>
                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                    Explore
                </a>
            </div>
        </div>
        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img src={HeroImage} class="max-w-xs md:max-w-sm m-auto"/>
        </div>
    </div>
</div>

        )
    }
}

export default Banner;