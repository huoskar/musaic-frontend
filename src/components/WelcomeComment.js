import React, { Component } from 'react'


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
         <h1 style={{...defaultStyle,
          'fontSize': '70px',
          'marginTop' :'150px',
          'marginLeft' :'150px'
        }}>Musaic</h1>

        <h2 style ={{
           'marginLeft': '100px',
           'marginTop' : '40px',
           'color' : '#146E14'
        }}>
          Let's create awesome profile photo with your playlist on Spotify!
        </h2>

      </div>
    )
  }
}

export default WelcomeComment;