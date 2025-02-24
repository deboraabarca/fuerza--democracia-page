import React from "react";
import { Link } from 'react-router-dom'
import cImag from '../../images/ideario.jpg'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Ideario = (props) => {
    return (
        <section className="wpo-running-campaign-section section-padding">
            <div className="container">
                <div className="running-campaign-wrap">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="campaign-img">
                                <img src={cImag} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="running-campaign-content">
                                <span className="sub-title">NUESTRO PROPIO CAMINO</span>
                                <h2 className="title">Ideario de fuerza y <br /> democracia</h2>
                                <div className="donate-progress-wrap">

                                    <div className="progress-text">
                                        <p>Nos sumamos a la vida política para enfrentar los <br /> desafíos y oportunidades del siglo XXI</p>
                                    </div>
                                </div>
                                <a href="https://www.partidomorado.pe/files/pdf/Ideario-Partido%20Morado%20-%20Valores.pdf" target="_blank" rel="noopener noreferrer" className="theme-btn-s3">
                                    IDEARIO
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="shape-3">
                        <svg width="157" height="135" viewBox="0 0 157 135" fill="none">
                            <circle cx="78.5" cy="78.5" r="78.5" fill="url(#paint0_linear_1_82)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_82" x1="78.5" y1="157" x2="78.5" y2="6.98189e-07"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#170059" stopOpacity="0.25" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="shape-4">
                        <svg width="157" height="123" viewBox="0 0 157 123" fill="none">
                            <circle cx="78.5" cy="44.5" r="78.5" transform="rotate(-180 78.5 44.5)"
                                fill="url(#paint0_linear_1_83)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_83" x1="78.5" y1="123" x2="78.5" y2="-34"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#DE2045" stopOpacity="0.25" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ideario;