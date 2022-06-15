import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import img1 from '../assets/images/1.webp'
import img2 from '../assets/images/2.webp'
import img3 from '../assets/images/3.webp'
import img4 from '../assets/images/4.webp'
import img5 from '../assets/images/5.webp'
import img6 from '../assets/images/6.webp'
import img7 from '../assets/images/7.webp'
import img8 from '../assets/images/8.webp'
import img9 from '../assets/images/9.webp'
import img10 from '../assets/images/10.webp'

import { motion } from 'framer-motion'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Poppins', sans-serif;;
    font-weight: 300;

    text-shadow: 1px 1px 1px ${props => props.theme.body};
    color: ${props => props.theme.text};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
`

const Left = styled.div`
    width: 35%;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};

    min-height: 100vh;
    z-index: 5;

    position: fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }
`

const Right = styled.div`
    position: absolute;
    left: 35%;
    padding-left: 30%;
    min-height: 100vh;

    background-color: ${props => props.theme.grey};
    /* width: 65%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1{
        width: 5rem;
        margin: 0 2rem;
    }
`

const Item = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20rem;
    margin-right: 6rem;

    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }

    h1 {
        display: inline-block;
        width: fit-content;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
    }
`

const Product = ({img, title=''}) => {
    return(
        <Item
        initial={{filter: 'grayscale(100%)'}}
        whileInView={{filter: 'grayscale(0%)'}}
        transition={{duration: 0.5}}
        viewport={{once: false, amount: 'all'}}
        >
            <img src={img} alt={title}/>
            <h1>{title}</h1>
        </Item>
    )
}

const Shop = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)
    const horizontalRef = useRef(null)

    useLayoutEffect(() => {
        let element = ref.current
        let scrollingElement = horizontalRef.current

        let pinWrapWidth = scrollingElement.offsetWidth

        let tl = gsap.timeline()

        setTimeout(() => {
            tl.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App', // locomotive element
                    scrub: true,
                    pin: true,
                    markers: true
                },
                // we need to increase the scrolling height of this element same as scrolling width
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none',
            })

            // horizontal scrolling
            tl.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App', // locomotive element
                    scrub: true,
                    markers: true
                },
                // we need to increase the scrolling height of this element same as scrolling width
                x: -pinWrapWidth,
                ease: 'none',
            })

            ScrollTrigger.refresh()
        }, 1000)

        return () => {

        }
    })
  return (
    <Section ref={ref}>
        <Title data-scroll data-scroll-speedd="-1">New Collection</Title>
        <Left>
            <p>
                The brand new collection is currently being developed in USA. 
                We create our products using best quality material, including the use of some of the pure fabrics to make our products. 
                All products are made using the best materials, from the finest cotton to the finest fabrics.
                <br/><br/>
                We have lots of different clothing options like shoes, jackets and dresses. 
                Not only clothes but we also provide unique Jewellery as well. 
                It is great for us to carry our new clothes all around the country and look different.
            </p>
        </Left>

        <Right ref={horizontalRef}>
            <Product img={img1} title='Man Basic' />
            <Product img={img2} title='Tops' />
            <Product img={img3} title='Swearshirt' />
            <Product img={img4} title='Ethnic Wear' />
            <Product img={img5} title='Blazers' />
            <Product img={img6} title='Suits' />
            <Product img={img7} title='Antiques' />
            <Product img={img8} title='Jwellery' />
            <Product img={img9} title='Watches' />
            <Product img={img10} title='Special Edition' />
        </Right>
    </Section>
  )
}

export default Shop