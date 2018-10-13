import React, { Component } from 'react';
import WelcomeComment from '../components/WelcomeComment';
import StartButton from '../components/StartButton';
import DisplayExp from '../components/DisplayExp';

 class LandingPage extends Component {
  render() {
    return (
      <div>
       <WelcomeComment/>
       <DisplayExp/>
       <StartButton/>
       
      </div>
    )
  }
}

export default LandingPage;