import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    overflow: hidden;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontBig};
    font-family: 'Kaushan Script', cursive;
    font-weight: 300;

    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;
`
const About = () => {
  return (
    <Section>
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            About Us
        </Title>
    </Section>
  )
}

export default About