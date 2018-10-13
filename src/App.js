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

if (!localStorage.spotifyToken || localStorage.spotifyToken === undefined) {
  // Get the hash of the url
  const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    if (item) {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

  window.location.hash = '';

  // Set token
  let _token = hash.access_token;
  console.log(_token);
  if (_token) {
    localStorage.setItem('spotifyToken', _token);
    setAuthToken(_token);
  }
  const authEndpoint = 'https://accounts.spotify.com/authorize';

  // Replace with your app's client ID, redirect URI and desired scopes
  const clientId = 'b25b36ce588b48018453c8bac31b2337';
  const redirectUri = 'http://localhost:3000/callback/';
  const scopes = [
    'user-top-read'
  ];

  // If there is no token, redirect to Spotify authorization
  if (!_token) {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
  }
}

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
