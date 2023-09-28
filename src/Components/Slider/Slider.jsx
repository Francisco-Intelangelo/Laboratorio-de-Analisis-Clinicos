import img1 from "../../assets/AssetsHome/Slider/1.jpg"
import img2 from "../../assets/AssetsHome/Slider/2.jpg"
import img3 from "../../assets/AssetsHome/Slider/3.jpg"
import img4 from "../../assets/AssetsHome/Slider/4.jpg"
import './Slider.css';


export const Slider = () => {
    return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-pause="false" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="foto1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="foto2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="foto3"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="foto4"/>
                    </div>
                </div>
            </div>
    )
}
