import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class StartButton extends Component {
  render() {
    return (
      <div style = {{'marginLeft' : '40px'}}>
      <center>
        <Button variant = 'contained' color = 'primary' position = 'center'>Get Started!</Button>
      </center>
      </div>
    )
  }
}

export default StartButton;
