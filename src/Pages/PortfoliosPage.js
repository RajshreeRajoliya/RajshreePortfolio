import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';
import Button from '../Components/Button';
import { motion } from 'framer-motion';

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]
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
function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate= "visible"
        exit="exit"
        >
        <MainLayout>
            <Title title={'Projects'} span={'Projects'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
        </motion.div>
    )
}

export default PortfoliosPage
