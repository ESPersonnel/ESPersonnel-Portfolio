import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome, <br />
          My Name is Wycliffe Ndiba
        </SectionTitle>
        <SectionText>
        I am a Fullstack Developer. I am dedicated to researching and building products that are relevant. Reach out and we can work together to build something great.
        </SectionText>
        <a href='https://espersonnel.showwcase.com/' target='_blank'>
          <Button onClick={props.handleClick}>Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;