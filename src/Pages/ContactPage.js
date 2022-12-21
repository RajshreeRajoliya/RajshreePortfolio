import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from "@material-ui/icons/GitHub";
import { useState } from 'react';
import { motion } from "framer-motion";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.6, duration: 0.6 }
    },
    exit: {
        x: "-100vw",
        transition: { ease: "easeInOut" }
    }
}
function ContactPage() {
    const phone = <PhoneIcon />
    const email1 = <EmailIcon />
    const location = <LocationOnIcon />
    const Linked = <LinkedInIcon />
    const github = <GithubIcon />
    const intitialData = {
        name: "",
        email: "",
        message: "",
        subject:""
      };
      
    const [data, setData] = useState(intitialData);
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    console.log(data);
    const success = () => toast.dark("Successfully Sent");
    const failure = () => toast.error("Something went wrong");
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(e,"vvvv");
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                    success();
                },
                (error) => {
                    failure();
                }
            );

        setData(intitialData);
    };
    const { name, email, message,subject } = data;
    return (
        <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <MainLayout>
                <Title title={'Contact'} span={'Contact'} />
                <ContactPageStyled >
                    <InnerLayout className={'contact-section'}>
                        <div className="left-content">
                            <div className="contact-title">
                                <h4>Get In Touch</h4>
                            </div>
                            <form className="form" onSubmit={onSubmitHandler}>
                                <div className="form-field">
                                    <label htmlFor="name"  >Enter your name*</label>
                                    <input value={name} type="text" id="name" name="name" onChange={onChangeHandler} required/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email"  >Enter your email*</label>
                                    <input value={email} type="email" id="email" name="email" onChange={onChangeHandler} required/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="subject"  >Enter your subject</label>
                                    <input value={subject} type="text" id="subject" name="subject" onChange={onChangeHandler} required/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="text-area">Enter your Message*</label>
                                    <textarea value={message}  id="textarea" cols="30" rows="10" name="message" onChange={onChangeHandler}></textarea>
                                </div>
                                <div className="form-field f-button">
                                   
                                    <button type="submit"> <PrimaryButton title={'Send Email'} /></button>
                                </div>
                            </form>
                        </div>
                        <div className="right-content" style={{ maxHeight: "30%" }}>
                            <ContactItem title={'Phone'} icon={phone} cont1={'+91-8839128201'} />
                            <ContactItem title={'Email'} icon={email1} cont1={'rajshreerajoliya14@gmail.com'} />
                            <ContactItem title={'Address'} icon={location} cont1={'MHOW,Madhya Pradesh'} cont2={'India'} />
                            <a href="https://www.linkedin.com/in/rajshree-r/" target="_blank" style={{ marginBottom: "10%" }}><ContactItem title={'LinkedIn'} icon={Linked} cont1={'Rajshree Rajoliya'} /> </a>
                            <a href="https://github.com/RajshreeRajoliya" target="_blank"> <ContactItem title={'GitHub'} icon={github} cont1={'RajshreeRajoliya'}  />  </a>
                        </div>
                    </InnerLayout>
                </ContactPageStyled>
            </MainLayout>
        </motion.nav>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            
            svg{
                fill: var(--primary-color);
            }
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage
