import React, { Component } from 'react'
import React, { Component } from 'react';
import DisplayExp from '../components/DisplayExp';
import styled from 'styled-components';
import Loader from 'react-loader-spinner'

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


class LoadingPage extends Component {
  render() {
    return (
        <Wrapper>
        <PageTitle>While Processing...</PageTitle> 
        <PageContents>Enjoy songs in the Bottom List!</PageContents>
        <Loader 
         type="Audio"
         color="#1DB954"
         height="100"	
         width="100"
      />   
      </Wrapper>
    )
  }
}

export default LoadingPage;