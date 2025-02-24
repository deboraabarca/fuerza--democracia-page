import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import Scrollbar from '../../components/scrollbar/scrollbar'
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Sobre Nosotros '} pagesub={'Nosotros'} />
            <About/>
            <TeamSection/>
            <CtaSection ctaClass={'wpo-cta-section-s2 pb-0'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
