import img1 from "../../assets/AssetsHome/Slider/1.jpg"
import img2 from "../../assets/AssetsHome/Slider/2.jpg"
import img3 from "../../assets/AssetsHome/Slider/3.jpg"
import img4 from "../../assets/AssetsHome/Slider/4.jpg"
import './Slider.css';


export const Slider = () => {
    return (
            <div id="carouselExampleFade" className="carousel carousel-dark slide carousel-fade" data-bs-touch="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-label="Slide 1"/>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"/>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"/>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"/>
                </div>
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}
