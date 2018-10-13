import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import LandingPage from './pages/LandingPage';

import logo from './media/Musaic.png';
import DownloadPage from './pages/DownloadPage';
import UploadPage from './pages/UploadPage';

const Wrapper = styled.div`
  background: linear-gradient(45deg, #ffecd2, #fcb69f);
  width: 100%;
  overflow: scroll;
  min-height: 100vh;
`;

const Logo = styled.img`
  display: block;
  width: 250px;
  margin: 2rem auto 4rem;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Logo src={logo} alt='logo' />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/upload' component={UploadPage} />
          <Route exact path='/download' component={DownloadPage} />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
