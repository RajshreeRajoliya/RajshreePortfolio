import React from 'react';
import styled from 'styled-components';

function Button({button,title}) {
    return (
        <>
            <div className="skil">
            <h3 style={{fontSize:25}}>{title}</h3>
        <ButtonsStyled>
            {
                button.map((but, i) =>{
                    return <ButtonStyled key={i}>
                        {but.toUpperCase()}
                    </ButtonStyled>
                })
            }
        </ButtonsStyled>
            </div>
        </>
    )
}

const ButtonStyled = styled.button`

    border: none;
    box-shadow: 0px 0px 0px 2px var(--primary-color) ;
    border-radius: 10px;
    background-color: var(--background-light-color-2);
    padding: .4rem 1rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: .6rem;
    &:active ,&:focus{
        background-color: var(--primary-color);
    }
    &:hover{
        background-color: var(--primary-color);
    }
    
    &:not(:last-child){
        margin-right: .6rem;
    }
    `;
const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* width: 100%; */
    margin: 2.4rem auto;
`;
export default Button;
