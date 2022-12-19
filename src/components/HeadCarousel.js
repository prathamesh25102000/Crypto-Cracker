import React from "react";
import useWindowDimensions from "./WindowDimensions";
import Slider from "react-slick";


const HeadCarousel = () => {

    const { width, height } = useWindowDimensions()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };




    return (
        <div className="HeadCarousel">
            {width > 1190 ?
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ padding: "10%" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="card1" style={{ display: "flex", width: "33%" }}>
                                    <img className="card1-img" src="https://live.staticflickr.com/65535/52571161529_bd2e59d2cf_q.jpg" />
                                    <div className="card-text">
                                        <text style={{ color: "gray" }}>Take a quiz</text>
                                        <p style={{ fontSize: "20px", fontWeight: "500" }}>Learn and earn $CKB</p>
                                    </div>
                                </div>
                                <div className="card1" style={{ display: "flex", width: "33%" }}>
                                    <img className="card1-img" src="https://live.staticflickr.com/65535/52570921951_33302db3af_q.jpg" />
                                    <div className="card-text">
                                        <text style={{ color: "gray" }}>Portfolio <i className="fa fa-fire" aria-hidden="true"></i></text>
                                        <p style={{ fontSize: "20px", fontWeight: "500" }}>Track your trades in one place, not all over the space</p>
                                    </div>
                                </div>
                                <div className="card1" style={{ display: "flex", width: "33%" }}>
                                    <img className="card1-img" src="https://live.staticflickr.com/65535/52571451473_e487154f46_q.jpg" />
                                    <div className="card-text" style={{ display: "block" }}>
                                        <text style={{ color: "gray" }}>Portfolio</text>
                                        <p style={{ fontSize: "20px", fontWeight: "500" }}>Track your trades in one place, not all over the space</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" style={{ backgroundColor: "grey", height: "15px", width: "15px", borderRadius: "50%" }}></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" style={{ backgroundColor: "grey", height: "15px", width: "15px", borderRadius: "50%" }}></span>
                    </button>
                </div>
                :

                <div>
                    <Slider {...settings} style={{ marginTop: "50px" }}>
                        <div className="card2" style={{ display: "flex", minWidth: "300px", maxWidth: "350px" }}>
                            <img className="card1-img" src="https://live.staticflickr.com/65535/52571161529_bd2e59d2cf_q.jpg" />
                            <div className="card-text">
                                <text style={{ color: "gray" }}>Take a quiz</text>
                                <p style={{ fontSize: "20px", fontWeight: "500" }}>Learn and earn $CKB</p>
                            </div>
                        </div>
                        <div className="card2" style={{ display: "flex" }}>
                            <img className="card1-img" src="https://live.staticflickr.com/65535/52570921951_33302db3af_q.jpg" />
                            <div className="card-text">
                                <text style={{ color: "gray" }}>Portfolio <i className="fa fa-fire" aria-hidden="true"></i></text>
                                <p style={{ fontSize: "20px", fontWeight: "500" }}>Track your trades in one place, not all over the space</p>
                            </div>
                        </div>
                        <div className="card2" style={{ display: "flex" }}>
                            <img className="card1-img" src="https://live.staticflickr.com/65535/52571451473_e487154f46_q.jpg" />
                            <div className="card-text" style={{ display: "block" }}>
                                <text style={{ color: "gray" }}>Portfolio</text>
                                <p style={{ fontSize: "20px", fontWeight: "500" }}>Track your trades in one place, not all over the space</p>
                            </div>
                        </div>

                    </Slider>
                </div>



            }
        </div>
    )
}

export default HeadCarousel