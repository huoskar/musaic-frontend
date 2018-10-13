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

class UploadPage extends Component {

  state = {
    pictureRaw: null,
    picture: '',
  };

  render() {
    return (
      <Wrapper>
        <PageTitle>Upload your image</PageTitle>
        {this.state.picture === '' ? (<h1>Upload an image</h1>) : <Image src={this.state.picture} alt='uploaded'/>}
        <input
                id="image-upload"
                type="file"
                name="pic"
                accept="image/*"
                onChange={e => this.onChangeFiles(e.target.files)}
              />
        <Button variant='contained' color='primary'>Generate</Button>
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
          picture: e.target.result, // Loaded image for presentation
          pictureRaw: files[0], // input File object
        });
      };

      reader.readAsDataURL(files[0]);
    }
  };
}

export default UploadPage;