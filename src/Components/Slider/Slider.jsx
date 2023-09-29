import img1 from "../../assets/AssetsHome/Slider/1.jpg"
import img2 from "../../assets/AssetsHome/Slider/2.jpg"
import img3 from "../../assets/AssetsHome/Slider/3.jpg"
import img4 from "../../assets/AssetsHome/Slider/4.jpg"
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';


export const Slider = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Fourd slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
