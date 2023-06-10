import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Trevor <br />
        A web developer
      </SectionTitle>
      <SectionText>
        I'm a developer with a passion for creating beautiful, interactive and responsive websites and web applications.
      </SectionText>
      <Button onClick={() => window.location = '/#footer'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
