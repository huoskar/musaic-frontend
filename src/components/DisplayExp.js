import React, { Component } from 'react'
import styled from 'styled-components';
import Example11 from './Example11.jpg';
import Example12 from './Example12.jpg';
import Example1 from './Example1.jpg';
import Example2 from './Example2.jpg';
import Example31 from './Example31.jpg';
import Example32 from './Example32.jpg';
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
      <Image src= {Example1} onMouseOver={e => (e.currentTarget.src = `${Example2}`)} onMouseOut={e => (e.currentTarget.src = `${Example1}`)}/>  
      <a href="http://home.com"><Image src= {Example32} onMouseOver={e => (e.currentTarget.src = `${Example31}`)} onMouseOut={e => (e.currentTarget.src= `${Example32}` )}/></a>  
      <Image src= {Example1} onMouseOver={e => (e.currentTarget.src = `${Example2}`)} onMouseOut={e => (e.currentTarget.src = `${Example1}`)}/> 
      <Image src= {Example1} onMouseOver={e => (e.currentTarget.src = `${Example2}`)} onMouseOut={e => (e.currentTarget.src = `${Example1}`)}/> 
      </div>
    )
  }
}

export default DisplayExp;