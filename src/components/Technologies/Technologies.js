import React from 'react';
import { DiReact, DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiMsqlServer } from 'react-icons/di';
import {FiFigma} from 'react-icons/fi'
import {FaGitAlt} from 'react-icons/fa'
import {SiSelenium, SiTailwindcss, SiPython, SiPytest, SiPostman} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id="tech">
      <SectionDivider style={{marginBottom: "2rem"}} />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world with a special focus on automation testing and front-end.
      </SectionText>
      <List>
        <ListItem>
          <span>
          <DiJavascript1 size="3rem" />
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiReact size="3rem" />
          <SiTailwindcss size="3rem" />
          <FiFigma size="3rem" />
          </span>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              JavaScript / HTML / CSS / React.js / Tailwind CSS / Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <span>
            <SiPython size="3rem" />
            <DiNodejsSmall size="3rem" />
            <DiMsqlServer size="3rem" />
          </span>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Python/ Node.js / SQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <span>
            {/* <SiSelenium size="3rem" /> */}
            {/* <SiPytest size="3rem" /> */}
            <img src='https://i.imgur.com/mYwC3Ys.png/' style={{height:"3rem"}} />
            <SiPostman size="3rem" />
            <FaGitAlt size="3rem" />
          </span>
          <ListContainer>
            <ListTitle>Testing / Tools</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Selenium / Pytest / Postman / Git
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
