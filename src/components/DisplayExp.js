import React, { Component } from 'react'

class DisplayExp extends Component {
  render() {
    return (
      <div style ={{ 
        width: "40%",
        display:'inline-block',
        marginLeft:'150px'}}>
        <h2>Gallery</h2>
      <img src= 'images/example1.jpg' style={{width: '60px'}}/>
      
      </div>
    )
  }
}

export default DisplayExp;