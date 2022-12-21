import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import Button1 from './Button1';


const front = ["HTML","CSS","JAVASCRIPT","REACT","BOOTSTRAP","REDUX"]
const  back = ["NODEJS","EXPRESS","MONGODB","REDIS"]
const tech = ["VSCODE","POSTMAN","GITHUB","MONGODB-ATLAS"]
const soft = ["TEAM PLAYER","POSITIVE ATTITUDE","WORK ETHICS","CREATIVE"]
function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                       
                      <Button1 button={front} title = "FRONT-END"/>
                      <Button1 button={back} title = "BACK-END"/>
                      <Button1 button={tech} title = "TOOLS"/>
                      <Button1 button={soft} title = "SOFT-SKILLS"/>
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 1rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
