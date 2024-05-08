import React from 'react'
import styled from 'styled-components';

const Container=styled.div`
    flex:1;
    height:70vh;
    margin:3px;
    position:relative;
`;
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    flex :1;
`;
const Info  = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:column;

`;
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
    font-size:40px;
    `;
const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;

`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
