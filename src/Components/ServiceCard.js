import React from "react";
import styled from "styled-components";

function ServiceCard({ image, title, paragraph }) {
  return (
    <ServiceCardStyled>
      <div className="container">
         {image}
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
}

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-left: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  &:hover {
    z-index:100;
    border-top: 8px solid var(--primary-color);
    transform: scale(1.1);
    border-radius: 0px;
     box-shadow:  00px 2px 2px var(--primary-color);
  }
  .container {
    padding: 1.2rem;
    height:350px;
    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }

    p {
      padding: 0.8rem 0;
    }
    svg {
      fill: var(--primary-color);
      width: 60px;
      height: 60px;
    }
  }
`;

export default ServiceCard;
