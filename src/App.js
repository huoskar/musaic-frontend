import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import logo from './media/Musaic.png';
import UploadPage from './pages/UploadPage';

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(45deg, #ffecd2, #fcb69f);
  position: fixed;
  height: 100%;
`;

const Logo = styled.img`
  display: block;
  width: 250px;
  margin: 2rem auto 6rem;
`;

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <BrowserRouter>
        <Wrapper>
          <Logo src={logo} alt='logo' />
          <Route exact path='/upload' component={UploadPage} />
        </Wrapper>
      </BrowserRouter>
    );
=======
      <div>
       </div>
        
        );
>>>>>>> staging changes
  }
}

export default App;
