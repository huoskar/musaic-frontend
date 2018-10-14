import React, { Component } from 'react';
import DisplayExp from '../components/DisplayExp';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom';

const PageTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #808080;
`;

const PageContents = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #808080;
  //font-weight: bold;

`;

const Wrapper = styled.div`
  text-align: center;
`;



 class LandingPage extends Component {
  render() {
    return (
      <Wrapper>
        <PageTitle>Welcome to Spotify Musaic App</PageTitle> 
        <PageContents>Create awesome profile with your playlist and Share with your friends</PageContents>
        <DisplayExp/>
        <Button variant='contained' color='primary' fill='rebeccapurple' ><Link to='/upload'>Let's Get Started !</Link></Button>   
      </Wrapper>
    
      
    )
  }
}


export default LandingPage;