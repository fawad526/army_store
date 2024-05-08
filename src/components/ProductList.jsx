import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcments from './Announcments';
import Footer from './Footer';
import NewsLetter from './NewsLetter';
import Products from './Products';

const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;
const FilterText= styled.div`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;
const Select = styled.select`
    padding:10px;
    margin-right:20px;
`;
const Option = styled.option`

`;

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcments/>
            <Title>Weapons</Title>
            <FilterContainer>           
                    <Filter>
                    
                    <FilterText>Filter Products:</FilterText>
                    
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Snow </Option>
                        <Option>Red </Option>
                        <Option>Yellow</Option>
                        
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>Pistol</Option>
                        <Option>Rifles</Option>
                        <Option>Sniper</Option>
                        <Option>Shotguns</Option>

                    </Select>
                    </Filter>
                    
                    <Filter>
                    
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Latest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                    </Filter>
            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
