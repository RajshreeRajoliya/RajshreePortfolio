import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import resume from "../img/resume.png";
import PrimaryButton from "./PrimaryButton";
import "../App.css"
function ImageSection() {
  const infoo = useRef();
  useEffect(() => {
    init(infoo.current, {
      showCursor: false,
      backSpeed:  100,
      startDelay: 500,
      backDelay:800,
      strings: ["Rajshree Rajoliya","A MERN Stack Developer", "A Problem Solver"],
    });
  },[])
  return (
    <ImageSectionStyled>
     
      <div className="right-content">
        <h4>
          I am <span ref={infoo}></span>
        </h4>
        <p className="paragraph">
          Fictional person for preview purposes .Learning FullStack Development(MERN🧱).
          Strong in design and integration with intuitive
          problem-solving skills. Proficient in React, Javascript. Passionate
          about implementing and launching new projects.A passionate, diligent person who wants to learn continuously. 
           Ability to translate business requirements into technical solutions. Looking to start the
          career as a web developer with a reputed firm driven by technology.
          
        </p>
        <div className="about-info"></div>
        <PrimaryButton  title={"Download Resume"} resu={"/Resume_Rajshree.pdf"}> </PrimaryButton>
        
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .right-content {
    width: 90%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
