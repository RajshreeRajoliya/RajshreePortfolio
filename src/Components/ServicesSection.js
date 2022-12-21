import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={
              <svg
                viewBox="0 0 137.144 137.144"
                enableBackground="new 0 0 137.144 137.144"
              >
                <g>
                  <g>
                    <path d="m41.143,109.714h27.429c-3.787,0-6.857-3.07-6.857-6.857 0-3.787 3.07-6.857 6.857-6.857s6.857,3.07 6.857,6.857c0,3.787-3.07,6.857-6.857,6.857h27.429v-82.286h-54.858v82.286zm6.858-75.429h41.143v54.857h-41.143v-54.857zm61.714-34.285h-82.286c-15.149,0-27.429,12.28-27.429,27.429v82.286c0,15.149 12.28,27.429 27.429,27.429h82.286c15.148,0 27.429-12.28 27.429-27.429v-82.286c0-15.149-12.28-27.429-27.429-27.429zm13.715,102.858c0,11.361-9.21,20.572-20.571,20.572h-68.573c-11.362,0-20.572-9.21-20.572-20.572v-68.572c0-11.362 9.21-20.572 20.572-20.572h68.572c11.361,0 20.571,9.21 20.571,20.572v68.572z" />
                  </g>
                </g>
              </svg>
            }
            title={"Responsive Design"}
            paragraph={
              "I can Provide a graphic user interface (GUI) design that adjusts smoothly to various screen sizes."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={
                <svg viewBox="0 0 100 100">
                  <path d="M81.23,17H18.77c-3.71,0-6.68,2.43-6.77,5.58V68.32C12,71.45,15,74,18.77,74H48V85H30.5a1.5,1.5,0,0,0,0,3h39a1.5,1.5,0,0,0,0-3H51V74H81.23C85,74,88,71.45,88,68.32V22.68C88,19.55,85,17,81.23,17ZM85,68.32C85,69.77,83.27,71,81.23,71H18.77c-2,0-3.77-1.23-3.77-2.68V22.62C15,21.18,16.73,20,18.77,20H81.23c2,0,3.77,1.23,3.77,2.68Z" />
                  <path d="M55.27,36.63a1.5,1.5,0,0,0-2,.65L45.19,53a1.5,1.5,0,1,0,2.67,1.37l8.06-15.75A1.5,1.5,0,0,0,55.27,36.63Z" />
                  <path d="M64.86,36.08a1.5,1.5,0,0,0-2.12,2.12l7.48,7.47-7.48,7.47a1.5,1.5,0,1,0,2.12,2.12l8.54-8.53a1.5,1.5,0,0,0,0-2.12Z" />
                  <path d="M38.4,36.08a1.5,1.5,0,0,0-2.12,0l-8.54,8.54a1.5,1.5,0,0,0,0,2.12l8.54,8.54a1.5,1.5,0,0,0,2.12-2.12l-7.48-7.47L38.4,38.2A1.5,1.5,0,0,0,38.4,36.08Z" />
                </svg>
              }
              title={"Web Design"}
              paragraph={
                "I can plan, create and code internet sites and web pages from scratch."
              }
            />
          </div>
          <ServiceCard
            image={
              <svg viewBox="0 0 50 50">
                <g id="Layer_1">
                  <path
                    d="M1,14h3v2H1v14h3v2H1v14h3v4h42v-4h3V32h-3v-2h3V16h-3v-2h3V0H1V14z M44,48H6v-2h38V48z M47,34v10h-1H4H3V34h1h42H47z
                M44,32H6v-2h38V32z M47,18v10h-1H4H3V18h1h42H47z M44,16H6v-2h38V16z M3,2h44v10h-1H4H3V2z"
                  />
                  <rect x="6" y="5" width="2" height="4" />
                  <rect x="11" y="5" width="2" height="4" />
                  <rect x="16" y="5" width="2" height="4" />
                  <rect x="21" y="5" width="2" height="4" />
                  <rect x="42" y="6" width="2" height="2" />
                  <rect x="26" y="6" width="13" height="2" />
                  <rect x="6" y="21" width="2" height="4" />
                  <rect x="11" y="21" width="2" height="4" />
                  <rect x="16" y="21" width="2" height="4" />
                  <rect x="21" y="21" width="2" height="4" />
                  <rect x="42" y="22" width="2" height="2" />
                  <rect x="26" y="22" width="13" height="2" />
                  <rect x="6" y="37" width="2" height="4" />
                  <rect x="11" y="37" width="2" height="4" />
                  <rect x="16" y="37" width="2" height="4" />
                  <rect x="21" y="37" width="2" height="4" />
                  <rect x="42" y="38" width="2" height="2" />
                  <rect x="26" y="38" width="13" height="2" />
                </g>
                <g></g>
              </svg>
            }
            title={"Database Storage"}
            paragraph={
              "I can manage all the data and users information in a structured way."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
