
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`;

const Announcments = () => {
    return (
        <Container>
            Super Deal! 75% OFF on the basis of First Come First Serve
        </Container>
    )
}

export default Announcments
