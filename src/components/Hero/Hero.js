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
        I'm a frontend developer with a passion for turning designs into live responsive websites.
      </SectionText>
      <Button onClick={() => window.location = '/portfolio#footer'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
