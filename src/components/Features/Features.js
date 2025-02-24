import React from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fImg1 from '../../images/fd-features/1.svg'
import fImg2 from '../../images/fd-features/2.svg'
import fImg3 from '../../images/fd-features/3.svg'
import fImg4 from '../../images/fd-features/4.svg'
import fImg5 from '../../images/fd-features/5.svg'

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    centerMode: true,
    centerPadding:0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Features = (props) => {
    return (
        <section className={`wpo-election-donation-section-s2 section-padding ${props.fClass}`}>
            <div className="container">
                <div className="row-grid wpo-service-slider-s2">
                    <Slider {...settings}>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg1} alt="" />
                                    </div>
                                    <h2>NUESTRA CAMPAÑA</h2>
                                    <p>Súmate a nuestra campaña digital y ayúdanos a llevar el mensaje de Fuerza y Democracia a más personas</p>
                                    <Link onClick={ClickHandler} to="/campaign">MÁS INFO</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg3} alt="" />
                                    </div>
                                    <h2>APOYA EL CAMBIO</h2>
                                    <p>Tu contribución fortalece nuestra causa. Dona y ayúdanos a construir un país con más oportunidades</p>
                                    <Link onClick={ClickHandler} to="/volunteer">DONAR</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg4} alt="" />
                                    </div>
                                    <h2>EVENTOS</h2>
                                    <p>Mantente siempre bien informado y únete a nuestras reuniones, marchas y actividades en todo el país</p>
                                    <Link onClick={ClickHandler} to="/donate">EXPLORAR</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg5} alt="" />
                                    </div>
                                    <h2>COMUNIDAD FD</h2>
                                    <p>Conéctate con personas que comparten tu visión y trabajemos juntos por el verdadero cambio</p>
                                    <Link onClick={ClickHandler} to="/volunteer">SEGUIR</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg2} alt="" />
                                    </div>
                                    <h2>AFILIATE A FD</h2>
                                    <p>Forma parte del cambio
                                    Únete a Fuerza y Democracia y construyamos juntos un país con justicia y progreso para todos</p>
                                    <Link onClick={ClickHandler} to="/volunteer">AFILIARME</Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Features;