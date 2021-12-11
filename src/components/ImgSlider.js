import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (

        <Carousel {...settings}>
            <div>
                <h3></h3>
            </div>
            <div>
                <h3>
                </h3>
            </div>
            <div>
                <h3>
                </h3>
            </div>
        </Carousel>

    )
    
};

const Carousel = styled(Slider)`

    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

`;

export default ImgSlider;