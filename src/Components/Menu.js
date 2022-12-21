import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a
                      href={item.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a
                      href={item.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LanguageIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
              <p style={{paddingTop:"10px"}}> <strong style={{color:"white"}}>Tech Stack</strong>{item.text1}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      text-align: center;
      border-radius: 10px;
      overflow: hidden;
      border: 2px solid  var(--primary-color);;
      p{
        text-align:start;
        padding:10px;
        padding-left:13px;
        font-size:1.2vw
      }
      h6 {
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        transform: translasteY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        display: flex;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--background-light-color-2);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }

      .portfolio-image {
       
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 4%;
          height: 0;

          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .portfolio-image:hover {
   
        ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }

          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          height: calc(100% - 30%);
          width: calc(100% - 4%);
          background-color: rgba(0, 0, 0, .7);
          opacity: 0.9;
          transform-origin: left;

          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;

export default Menu;
