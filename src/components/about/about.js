import React from 'react'
import abImg from '../../images/about-s2.jpg'

const About = (props) => {
    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>Sobre Nosotros</span>
                                <h2>Construyendo un Perú justo y democrático</h2>
                            </div>
                            <p className="sub-text">Fuerza y Democracia es un partido político peruano inscrito en el 
                            JNE desde el 4 de marzo de 2024. Buscamos fortalecer la democracia, promover la transparencia y 
                            construir un Perú con igualdad de oportunidades.
                             Creemos en un país donde el esfuerzo y la meritocracia sean la base del progreso. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;