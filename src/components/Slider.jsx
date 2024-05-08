import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'
import { useState } from 'react';


const Container=styled.div`
    height:100%;
    width:100%;
    display:flex;
    position:relative;
    overflow:hidden;

`;
const Arrow = styled.div`
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    background-color:white;
    border-radius:50%;
    justify-content:center;
    position:absolute;
    margin:auto;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px" };
    right: ${props => props.direction === "right" && "10px" };
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`;

const Wrapper = styled.div`
    
    display:flex;
    height:100%;
    transition:all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);

`;
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props=>props.bg};
`;
const ImageContainer = styled.div`
    height:100vh;
    flex:1;
`;
const Image = styled.img`
    height:100vh;

`;
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
 `;

const Title = styled.h1`
    font-size:50px;
`;
const Desc = styled.p`
    margin:50px 0;
    font-size:20px;
`;
const Button = styled.button`
    padding:10px;
    font-size:16px;
    background-color:transparent;
    cursor:pointer;
`;


const Slider = () => {

    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3)
        }
        else{
            setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0)
        }

    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
           <ArrowLeftOutlined/> 
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>(
            <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
                <Image src ={item.img} />
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>
                    {item.desc}
                </Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>
            ))}
         </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick("right")}>
           <ArrowRightOutlined/> 
            </Arrow>
          </Container>
    )
}

export default Slider;