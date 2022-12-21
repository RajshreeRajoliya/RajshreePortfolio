import React from 'react'
import styled from 'styled-components';
import "../App.css"
function ProgressBar({ title, width, text }) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                      <span className={`c${width}`} ></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}
const ProgressBarStyled = styled.div`
.progress-bar{
    display: flex;
    align-items: center;
    p{
        padding-right: 1.1rem;
    }
    .progress{
        position: relative;
        width: 100%;
        height: .4rem;
        background-color: var(--border-color);
        span{
            position: absolute;
            left: 0;
            top:0;
            bottom: 10px;
            height: 100%;
            background-color: var(--primary-color)
           
        }
      
    }
}
`;

export default ProgressBar;
