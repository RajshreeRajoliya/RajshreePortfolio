import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title icon={school} title={"Educational"} span={"Qualifications"} />
      <InnerLayout>
       
        <div className="resume-content ">
          <ResumeItem
            year={"May, 2022 - Presently"}
            title={"MERN Stack Developer"}
            subTitle={"Masai School, Bengaluru"}
            text={
              "Learning Full Stack Web Development and Communication Skills. "
            }
          />
          <ResumeItem
            year={"2019 - 2022"}
            title={"Bachelor of Commerce"}
            subTitle={"Shri Atal Bihari Vajpayee Government Arts And Commerce College"}
            text={
              "Got 80% through out the semester. Always active in Extra Curriculum."
            }
          />
          <ResumeItem
            year={"2019"}
            title={"+2 Certificate"}
            subTitle={"St Marys Higher Secondary School, MHOW"}
            text={
              "Got 78% in 12th."
            }
            />
            <ResumeItem
              year={"2017"}
              title={"High School"}
              subTitle={"St Marys Higher Secondary School, MHOW"}
              text={
                "Got 76% in 10th."
              }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  
  .resume-content {

    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
