import React from 'react'
import mvImg1 from '../../images/objetivos/1.jpg'
import mvImg2 from '../../images/objetivos/2.jpg'
import mvImg3 from '../../images/objetivos/3.jpg'
import mvImg4 from '../../images/objetivos/4.jpg'
import mvImg5 from '../../images/objetivos/5.jpg'
import mvImg6 from '../../images/objetivos/6.jpg'
import mvImg7 from '../../images/objetivos/7.jpg'
import mvImg8 from '../../images/objetivos/8.jpg'


const Mission = [
    {
        id: '01',
        mImg: mvImg1,
        Title: 'Defensa\nDemocrática',
        Des: "Garantizamos el respeto a la democracia, los derechos humanos y la soberanía nacional.",
    },
    {
        id: '02',
        mImg: mvImg2,
        Title: 'Renovación\nPolítica',
        Des: "Reformaremos la Constitución si es necesario para un país más justo y equitativo.",
    },
    {
        id: '03',
        mImg: mvImg3,
        Title: 'Educación\nInnovadora',
        Des: "Impulsamos un sistema educativo moderno, accesible y adaptado a los desafíos del futuro.",
    },
    {
        id: '04',
        mImg: mvImg4,
        Title: 'Servicios\nDignos',
        Des: "Trabajamos por un acceso justo y eficiente a salud, transporte y otros servicios esenciales.",
    },
    {
        id: '05',
        mImg: mvImg5,
        Title: 'Gobierno\nTransparente',
        Des: "Promovemos una gestión pública sin corrupción, con cuentas claras y acceso a la información.",
    },
    {
        id: '06',
        mImg: mvImg6,
        Title: 'Gestión\nModerna',
        Des: "Aplicamos tecnología y eficiencia en la administración del Estado para un mejor servicio ciudadano.",
    },
    {
        id: '07',
        mImg: mvImg7,
        Title: 'Economía\nDiversificada',
        Des: "Fomentamos el crecimiento sostenible con nuevas oportunidades en diferentes sectores productivos.",
    },
    {
        id: '08',
        mImg: mvImg8,
        Title: 'Inclusión\nSocial',
        Des: "Construimos un país sin desigualdades, donde todos tengan acceso a oportunidades.",
    }
];

const MissionVission = (props) => {
    return (
        <section className="wpo-election-mission-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6 col-md-8 col-12">
                        <div className="wpo-section-title">
                            <div className="section-titl-shape-1">
                                <svg width="687" height="473" viewBox="0 0 687 473" fill="none">
                                    <g opacity="0.44" filter="url(#filter0_f_1_1040)">
                                        <circle cx="343.5" cy="129.5" r="129.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_1_1040" x="0" y="-214" width="687" height="687"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                result="shape" />
                                            <feGaussianBlur stdDeviation="107" result="effect1_foregroundBlur_1_104" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div className="section-titl-shape-2">
                                <svg width="687" height="473" viewBox="0 0 687 473" fill="none">
                                    <g opacity="0.44" filter="url(#filter0_f_1_105)">
                                        <circle cx="343.5" cy="129.5" r="129.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_1_105" x="0" y="-214" width="687" height="687"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                result="shape" />
                                            <feGaussianBlur stdDeviation="107" result="effect1_foregroundBlur_1_105" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <span>Nuestros Objetivos</span>
                            <h2>Por un Perú justo <br/>
                            próspero y democrático</h2>
                        </div>
                    </div>
                </div>
                <div className="election-mission-wrap">
                    <div className="row">
                        {
                            Mission.map((mvsion, tsm) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={mvsion}>
                                    <div className="election-mission-content">
                                        <img src={mvsion.mImg} alt=""/>
                                            <div className="title break-line">{mvsion.Title}</div>
                                            <div className="text">
                                                <h3>{mvsion.Title}</h3>
                                                <p>{mvsion.Des}</p>
                                            </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <svg width="1245" height="1206" viewBox="0 0 1245 1206" fill="none">
                    <path opacity="0.6" d="M0 0L1245 619V1206H0V0Z" />
                    <defs>
                        <linearGradient id="paint0_linear_1_102" x1="622.5" y1="0" x2="622.5" y2="1206"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#F8F2F2" />
                            <stop offset="1" stopColor="#F8F2F2" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="945" height="884" viewBox="0 0 945 884" fill="none">
                    <path opacity="0.6" d="M945 0L0 503V884L945 359V0Z" />
                    <defs>
                        <linearGradient id="paint0_linear_1_106" x1="945" y1="64" x2="661" y2="809"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#F8F2F2" />
                            <stop offset="1" stopColor="#F8F2F2" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default MissionVission;