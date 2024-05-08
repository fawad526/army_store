import { Add, Remove } from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components';
import Announcments from '../components/Announcments';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
 
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;




const Product = () => {
    return (
        <Container>
        <Navbar/>
        <Announcments/>
        <Wrapper>
            <ImgContainer>
                <Image src = "data:image/jpeg;base64,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"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Glock 19</Title>
                <Desc>The GLOCK 19 is a scaled-down version of GLOCKs original full-sized model 17. It is a striker-fired, locked-breech short-recoil operated semi-automatic pistol chambered for 9mm. Not wanting to sacrifice ammunition capacity for size, requests from plain-clothes police officers led to the development of the GLOCK 19</Desc>
                <Price>$769.00</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="darkgreen"/>
                    </Filter>
                    <FilterSize>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSizeOption>Pistols</FilterSizeOption>
                        <FilterSizeOption>Rifles</FilterSizeOption>
                        <FilterSizeOption>Sniper</FilterSizeOption>
                        <FilterSizeOption>Shotgun</FilterSizeOption>
                    </FilterSize>
                </FilterContainer>
                <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
            
        </Container>
    )
}



export default Product
