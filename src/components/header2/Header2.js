import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={`${props.hclass}`}>
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-sm-3  col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-5 col-sm-4 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={Logo} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-sm-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">INICIO</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">NOSOTROS</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/event-single/Support-for-Womans">EVENTOS</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/blog-left-sidebar">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" to="/contact"><span className="text">CONTACTO</span>
                                            <span className="mobile">
                                                <i className="fi flaticon-user"></i>
                                            </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header2;