import React, { Component } from 'react'
import styled from 'styled-components';


let defaultStyle = {
  color:'#181818',
  'fontFamily': 'Roboto'
};

class WelcomeComment extends Component {
  render() {
    return (
      <div style ={{ 
      width: "40%",
      display:'inline-block'}}
      >

        <h2 style ={{...defaultStyle,
           //'marginLeft': '100px',
           //'marginTop' : '40px'
        }}>
          Let's create awesome profile photo with your favorite songs on Spotify! 
        </h2>
      </div>
    )
  }
}

export default WelcomeComment;