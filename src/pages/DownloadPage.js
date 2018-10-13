import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const PageTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #808080;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 512px;
  display: block;
  margin: 0 auto 2rem;
`;

class DownloadPage extends Component {

  state = {
    picture: '',
  };

  render() {
    return (
      <Wrapper>
        <PageTitle>Download your image</PageTitle>
        <Button variant='contained' color='primary' onClick={this.downloadImage}>Download</Button>
      </Wrapper>
    )
  }

    /**
   * Handle files choosen in the file upload form. We only want one file.
   */
  onChangeFiles = files => {
    if (files && files[0]) {
      const reader = new FileReader();

      reader.onload = e => {

        this.setState({
          picture: e.target.result // Loaded image for presentation
        });
      };

      reader.readAsDataURL(files[0]);
    }
  };

  downloadImage  = () => {
    console.log('In download image function')
    var fileDownload = require('js-file-download');
    if(this.state.picture)
        fileDownload(this.state.picture, 'awesomePic.jpg');
    else
        alert('No image to download')
  };
}

export default DownloadPage;