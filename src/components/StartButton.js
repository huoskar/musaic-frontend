import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class StartButton extends Component {
  render() {
    return (
      <div style = {{'marginLeft' : '40px'}}>
      
        <Button variant = 'contained' color = 'primary' position = 'center'>Get Started!</Button>
      
      </div>
    )
  }
}

export default StartButton;
