import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import { motion } from "framer-motion";
import Resume from '../Components/Resume';
const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {delay: 0.6, duration: 0.6}
    },
    exit: {
        x: "-100vw",
        transition: {ease: "easeInOut"}
    }
}
function AboutPage() {
    return (
      <>
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
            
            </AboutStyled >
               <Resume />
        </MainLayout>
        </motion.div>
      
      </>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
