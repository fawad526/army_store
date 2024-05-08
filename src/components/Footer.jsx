import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = styled.h1`

`;
const Description = styled.p`
    margin:20px 0px;
`;
const SocialContainer = styled.div`
    display:flex; 
`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;
const Center = styled.div`
    flex:1;
    padding:20px;
`;

const Title= styled.h3`
margin-bottom:30px

`;
const List= styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;
const Right =styled.div` 
    flex:1;
    padding:20px;
`;
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;
const Payment= styled.img`
    width:50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BravoStore</Logo>
                <Description>A gun shop (also known by various other names such as firearm 
                store and gun store) is a business establishment that sells small arms, 
                such as handguns and shotguns, to individuals in an open shopping format. 
                It may also provide repairs for firearms and their parts.</Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <LinkedIn/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Small Weapons</ListItem>
                    <ListItem>Rifles</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms</ListItem>
                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>E-9/11  Air Uiversity, Islamabad</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+92 3334513912</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>190939@Students.au.edu.pk</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
