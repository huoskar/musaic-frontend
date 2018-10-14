import React, { Component } from 'react'
import styled from 'styled-components';
import Example11 from './Example11.jpg';
import Example12 from './Example12.jpg';
import Example51 from './Example51.jpg';
import Example52 from './Example52.jpg';
import Example21 from './Example21.jpg';
import Example22 from './Example22.jpg';
import Example31 from './Example31.jpg';
import Example32 from './Example32.jpg';
import Example41 from './Example41.jpg';
import Example42 from './Example42.jpg';
//import Example4 from './Example4.jpg'
//import Example5 from './Example5.jpg';

const Image = styled.img`
  width: 135px;
  height: 200px;
  display: inLineBlock;
  margin: 0 auto 1rem;
  padding: 1em;
`;

 

class DisplayExp extends Component {
  render() {
    return (
      <div>
      <Image src= {Example12} onMouseOver={e => (e.currentTarget.src = `${Example11}`)} onMouseOut={e => (e.currentTarget.src = `${Example12}`)}/>  
      <Image src= {Example22} onMouseOver={e => (e.currentTarget.src = `${Example21}`)} onMouseOut={e => (e.currentTarget.src = `${Example22}`)}/>  
      <Image src= {Example42} onMouseOver={e => (e.currentTarget.src = `${Example41}`)} onMouseOut={e => (e.currentTarget.src = `${Example42}`)}/> 
      <Image src= {Example52} onMouseOver={e => (e.currentTarget.src = `${Example51}`)} onMouseOut={e => (e.currentTarget.src = `${Example52}`)}/> 
      <Image src= {Example32} onMouseOver={e => (e.currentTarget.src = `${Example31}`)} onMouseOut={e => (e.currentTarget.src= `${Example32}`)}/>
      </div>
    )
  }
}

export default DisplayExp;