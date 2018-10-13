import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 512px;
  height: 512px;
  display: block;
  margin: 0 auto 2rem;
`;

class Image extends Component {
  render() {
    return (
      <Img src={this.props.src} alt={this.props.alt} />
    )
  }
}

export default Image;