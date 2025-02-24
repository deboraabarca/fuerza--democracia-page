import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-s2.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="shape-1">
                <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
                    <rect width="795" height="12" fill="url(#paint0_linear_1_223)" />
                    <defs>
                        <linearGradient id="paint0_linear_1_223" x1="795" y1="5.99883" x2="9.55538e-10" y2="5.99883"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#170059" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
                    <rect width="795" height="12" fill="url(#paint0_linear_1_224)" />
                    <defs>
                        <linearGradient id="paint0_linear_1_224" x1="2.31964e-06" y1="5.99883" x2="795" y2="5.99898"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#DE2045" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="blog" />
                                </div>
                                <p>Fuerza y Democracia fue inscrito el 4 de marzo de 2024 y presidido por por la
                                    Dra. Laura Luque Arias.</p>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=61573104098563" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/y_democrac17312" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-twitter-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/fuerzademocracia/" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-instagram"></i>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>ENLACES</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home">Inicio</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">Nosotros</Link></li>
                                    <li><Link onClick={ClickHandler} to="/event-single/Gran-Marcha-por-la-Democracia">Eventos</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contacto</Link></li>
                                </ul>
                            </div>
                        </div >
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>CONTÁCTANOS</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-phone-call-1"></i>+51 900 103 512
                                            <br />
                                            +1 800 123 654 987</li>
                                        <li><i className="fa fa-envelope-o" aria-hidden="true"></i>fuerza&democracia<br />@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>NOTICIAS</h3>
                                </div>
                                <p>Recibe las últimas noticias y eventos de Fuerza y Democracia.<br /> ¡Sé el primero en enterarte!</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Ingresa tu email"
                                            required="" />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="fa fa-paper-plane"
                                            aria-hidden="true"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2025  Fuerza y Democracia  &nbsp;&nbsp;Todos los derechos reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;