import React from 'react';
import styled from 'react-emotion';
import portrait from '../assets/portrait.jpg';

const AboutArthur = styled.div({
  padding: 0,
  margin: '0px auto',
  width: 1024,
  position: 'relative',
  fontFamily: 'helvetica, arial, sans-serif',
  fontWeight: 'lighter',
  lineHeight: 2,
});
const StyledAnchor = styled.a({
  color: '#d30000',
});
const StyledHeading = styled.h1({
  padding: 0,
  margin: 0,
});
const About = () => (
  <AboutArthur>
    <StyledHeading> Arthur Sousa </StyledHeading>
    <p>
      Web Designer & Front-End Developer based out of <u>London, Ontario</u>.
      Currently working at{' '}
      <strong>
        <em>
          <a
            href="https://www.digitalextremes.com/"
            target="_blank"
            title="Digital Extremes"
          >
            Digital Extremes
          </a>
        </em>
      </strong>, Makers of{' '}
      <strong>
        <em>
          <StyledAnchor
            target="_blank"
            href="https://warframe.com/"
            title="Warframe"
          >
            Warframe
          </StyledAnchor>
        </em>
      </strong>. Creator of{' '}
      <StyledAnchor
        target="_blank"
        href="http://proasfuck.life"
        title="Pro As F*ck"
      >
        <strong>
          <em>Pro As F*ck</em>
        </strong>
      </StyledAnchor>. Some brands I have worked with include:
    </p>
  </AboutArthur>
);

export default About;
