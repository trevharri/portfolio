import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Trevor <br />
        A developer
      </SectionTitle>
      <SectionText>
        I'm a developer with a passion for all things related to software and automation.
      </SectionText>
      <Button onClick={() => window.location = '/#footer'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
