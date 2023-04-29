import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiMsqlServer } from 'react-icons/di';
import {FiFigma} from 'react-icons/fi'
import {FaGitAlt} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id="tech">
      <SectionDivider style={{marginBottom: "2rem"}} />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world with a special focus on Front-end.
      </SectionText>
      <List>
        <ListItem>
          <span>
          <DiJavascript1 size="3rem" />
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiReact size="3rem" />
          </span>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              JavaScript / HTML / CSS / React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <span>
            <DiNodejsSmall size="3rem" />
            {/* <SiExpress size="3rem" /> */}
            <DiMsqlServer size="3rem" />
          </span>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Node.js / SQL Server
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <span>
            <FiFigma size="3rem" />
            <FaGitAlt size="3rem" />
          </span>
          <ListContainer>
            <ListTitle>Tools</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Figma / Git
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
