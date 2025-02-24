import React from "react";
import { Link } from 'react-router-dom'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import hero1 from '../../images/slider/slide-1.png'
import hero2 from '../../images/slider/slide-2.png'
import hero3 from '../../images/slider/slide-3.png'

const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="wpo-hero-slider-s2  wpo-hero-slider-1">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={1800}
                        parallax={true}
                        navigation
                    >
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="slide-inner slide-bg-image" data-background="assets/images/slider/slide-1.png">
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div data-swiper-parallax="300" className="slide-title">
                                                <h2>Fuerza para avanzar, democracia para decidir</h2>
                                            </div>
                                            <div data-swiper-parallax="400" className="slide-text">
                                                <p>Creemos en una nación donde el esfuerzo y la igualdad abran caminos hacia el bienestar y el crecimiento</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div data-swiper-parallax="500" className="slide-btns">
                                                <Link onClick={ClickHandler} to="/about" className="theme-btn-s3">SOBRE NOSOTROS</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>Construyamos un <br /> Perú de oportunidades</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Juntos podemos lograr un país más justo, <br /> próspero y democrático</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div data-swiper-parallax="500" className="slide-btns">
                                            <a
                                                href="https://api.whatsapp.com/send?phone=51921661758&text=Buenas%20tardes%2C%20deseo%20afiliarme%20a%20Fuerza%20y%20Democracia%20%F0%9F%98%8A%E2%9C%A8"
                                                className="theme-btn-s3"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                AFILIARME
                                            </a>  </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>El futuro del Perú <br />está en tus manos</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Tu participación es clave para construir un Perú<br /> con más oportunidades, justicia y desarrollo</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div data-swiper-parallax="500" className="slide-btns">
                                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s3">CONTACTO</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>


                </div>
            </div>
        </section>
    )
}

export default Hero;