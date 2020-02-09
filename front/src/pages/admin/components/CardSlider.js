import React, { useState, useRef } from "react";
import Slider  from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { ReactComponent as More } from '../../../assets/icons/more.svg'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
    margin-bottom: 15px;
`
const Header = styled.div`
    height: 57px;
    padding: 0px 30px;
    background-color: #EDF4FF;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & span{
        text-transform: uppercase;
        font-weight: bold;
    }
`
const Content = styled.div`
    position: relative;
`
const SliderWrapper = styled.div`
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
`
const SliderWidth = styled.div`
    max-width: 1530px;
    width: calc(100% - 150px);
    .slick-track{
      display: flex;
      align-items: stretch;
    .slick-slide{
      height: auto;
    &>div{
      height: 100%;
    &>div{
      height: 100%;
    &>div{
      height: 100%;
    }
   }
  }
 }
}
    @media (max-width: 840px) {
      width: 100%;
    }
`

const ArrowLeft = styled.div`
    border-left: 3px solid #31384E ;
    border-top: 3px solid #31384E ;
    transform:translateX(10px) rotate(-45deg);
    width: 20px;height: 20px;
    cursor: pointer;
    transition: 0.3s;
    flex-shrink: 0;
    &:hover{
     box-shadow: -2px -2px 2px rgba(49, 56, 78, 0.4);
    }

 
`
const ArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 70px;
    flex-shrink: 0;
    min-width: 50px;
    width: 100%;
    @media (max-width: 840px) {
       z-index: 10;
       max-width: 30px;
       min-width: 30px;
       position: absolute;
       ${({left,right})=>left && "left:0" || right && "right:0"}
    }
`
const ArrowRight = styled.div`
    border-right: 3px solid #31384E ;
    border-top: 3px solid #31384E;
    transform: translateX(-10px) rotate(45deg);
    width: 20px;height: 20px;
    transition: 0.3s;
    cursor: pointer;
    margin:0 40px;
    flex-shrink: 0;
    &:hover{
     box-shadow: 2px -2px 2px rgba(49, 56, 78, 0.4);
    }
`
const Description = styled.div`
    font-size: 13px;
    margin-top: 34px;
    margin-bottom: 22px;
    text-align: center;
`
const ItemsContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: absolute;
    right:0;
    top: 103%;
    width: 278px;
    z-index: 1;
    overflow: hidden;
    opacity: ${props => props.isOpen ? 1 : 0};
    transition-duration: 0.3s;
    height: ${props => props.isOpen ? '' : 0};
`
const ItemInput = styled.div`
    line-height: 48px;
    padding: 0 24px;    
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #F6F9FF;
    }
`
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

const CardSlider = ({
    heading,
    description,
    itemsNumber,
    withMenu,
    toggleModalSelect,
    children
}) => {
    const slider = useRef(null);
    const nextSlide = () => {
    slider.current.slickNext();
    }
    const prevSlide = () => {
        slider.current.slickPrev();
    }

    const [value, setActive] = useState(0);
    const [isMenuOpen, toggleMenuHandler] = useState(false);
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        swipe:false,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const setValue = (newValue) => () => {
        if (newValue < 0) {
            newValue = 0;
        }
        if (newValue > itemsNumber) {
            newValue = itemsNumber;
        }
        itemsNumber - newValue > 3 && setActive(newValue)
    }
    return (
        <Wrapper>
            <Header>
                <span>{heading}</span>
                {withMenu && <div className="rel">

                    <More onClick={() => toggleMenuHandler(!isMenuOpen)} />
                    <ItemsContainer isOpen={isMenuOpen}>
                        <Link to='/admin/my-posted-collaboration'>
                            <ItemInput>View all</ItemInput>
                        </Link>

                        <ItemInput
                            onClick={() => {
                                toggleMenuHandler(!isMenuOpen)
                                toggleModalSelect()
                            }}
                        >
                            Post a new collaboration
                        </ItemInput>
                    </ItemsContainer>

                    {isMenuOpen && <Overlay onClick={() => toggleMenuHandler(!isMenuOpen)} />}
                </div>}
            </Header>

            <Content>
                <Description>{description && description}</Description>

                <SliderWrapper>
                    <ArrowWrapper left >
                        <ArrowLeft onClick={prevSlide}/>
                    </ArrowWrapper>
                    <SliderWidth>
                    <Slider ref={slider}  {...settings}>
                        {children}
                    </Slider>
                    </SliderWidth>
                    <ArrowWrapper right >
                        <ArrowRight onClick={nextSlide}/>
                    </ArrowWrapper>
                </SliderWrapper>
            </Content>

        </Wrapper>
    );
}

export default CardSlider;
