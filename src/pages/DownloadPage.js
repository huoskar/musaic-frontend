import React, { Component } from 'react';
import styled from 'styled-components';
import fileDownload from 'js-file-download';

import Button from '@material-ui/core/Button';

const PageTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #808080;
`;

const Wrapper = styled.div`
  text-align: center;
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
    if(this.state.convertedPicture)
        fileDownload(this.state.convertedPicture, 'awesomePic.jpg');
    else
        alert('No image to download')
  };
}

export default DownloadPage;