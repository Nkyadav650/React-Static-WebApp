import React from 'react';
//import SimpleImageSlider from 'react-simple-image-slider';
import Img from '../buildingImage/Image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../index.css";
const images = [
    { url: Img. RoadAndBridgeConstruction},
    { url: Img.greenbuilding6 },
    { url: Img.BuildingLot },
    { url: Img.ApartmentConstruction2 },
    
    { url: Img.OfficeBuilding },
    { url: Img.Bangalow2 },
    { url: Img.ApartmentConstruction1 },
];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Set the interval to 3000 milliseconds (3 seconds)

    };

    return (
        <div className='imageSlider'>
            <Slider className='imageSlider'{...settings}>
                {images.map((image, index) => (
                    <div key={index}>

                        <img
                            src={image.url}
                            alt={`Slide ${index + 1}`}

                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImageSlider;