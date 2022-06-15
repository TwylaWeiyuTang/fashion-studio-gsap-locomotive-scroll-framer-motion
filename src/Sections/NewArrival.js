import React, {useRef, useLayoutEffect} from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import img1 from '../assets/images/11.webp'
import img2 from '../assets/images/12.webp'
import img3 from '../assets/images/13.webp'
import img4 from '../assets/images/14.webp'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    display: flex;

    margin: 0 auto;
    justify-content: center;
    align-items: center;

    /* background-color: yellow; */
`

const Overlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    height: 90vh;

    box-shadow: 0 0 0 4vw ${props => props.theme.text};
    border: 3px solid ${props => props.theme.body};
    z-index: 11;
`
const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Poppins', sans-serif;;
    font-weight: 300;

    text-shadow: 1px 1px 1px ${props => props.theme.text};
    color: ${props => props.theme.body};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
`
const Text = styled.div`
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 20%;
    position: absolute;
    padding: 2rem;
    top: 0;
    right: 0;
    z-index: 11;
`

const Container = styled.div`
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 25vw;
    height: auto;

    /* width: 65%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;

    img {
        width: 100%;
        height: auto;
        z-index: 5;
    }
`

const Product = ({img, title=''}) => {
    return(
        <Item
        >
            <img src={img} alt={title}/>
            <h1>{title}</h1>
        </Item>
    )
}

const NewArrival = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)
    const ScrollingRef = useRef(null)

    useLayoutEffect(() => {
        let element = ref.current
        let scrollingElement = ScrollingRef.current
        let tl = gsap.timeline()

        setTimeout(() => {
            tl.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: 'bottom+=100% top-=100%',
                    scroller: '.App', // locomotive element
                    scrub: true,
                    pin: true,
                    // markers: true
                },
                // we need to increase the scrolling height of this element same as scrolling width
                ease: 'none',
            })

            // Vertical scrolling
            tl.fromTo(scrollingElement, 
                {
                    y:'0'
                },
                {
                    y: '-100%',
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: 'bottom top',
                    scroller: '.App', // locomotive element
                    scrub: true,
                    // markers: true
                },
                // we need to increase the scrolling height of this element same as scrolling width
                
            })

            ScrollTrigger.refresh()
        }, 1000)

        return () => {
            // Let's clear instances
            tl.kill()
            ScrollTrigger.kill()
        }
    })
  return (
    <Section ref={ref} id='new-arrival'>
        <Overlay />
        <Title data-scroll data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        >New Arrivals
        </Title>
        
        <Container ref={ScrollingRef}>
            <Product img={img1} title='Denim' />
            <Product img={img2} title='Cool Dresses' />
            <Product img={img3} title='Jackets' />
            <Product img={img4} title='T-shirts' />
        </Container>

        <Text data-scroll  data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. 
        This collection is a great way to find a new look for you. 
        It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
        <br/>
        <br/>
        <br/>
        The first line of clothing you will see on this collection is for men. 
        The collection also includes three new styles for women.
        <br/>
        <br/>
        <br/>
        Give it a try and experience a new look.
        </Text>
    </Section>
  )
}

export default NewArrival