import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Image from '../components/Image';

const PageTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #808080;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const ImagePlaceholder = styled.div`
  width: 512px;
  height: 512px;
  border: 1px solid #3F51B5;
  margin: auto;
`;

const FileUpload = styled.input`
`;

const FlexBox = styled.div`
  width: 512px;
  display: flex;
  margin: 2rem auto;
  justify-content: space-between;
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
        {this.state.picture === '' ? <ImagePlaceholder><h3>Choose an image to upload</h3></ImagePlaceholder> : <Image src={this.state.picture} alt='uploaded'/>}
        <FlexBox>
          <FileUpload
                id="image-upload"
                type="file"
                name="pic"
                accept="image/*"
                onChange={e => this.onChangeFiles(e.target.files)}
              />
          <Button variant='contained' color='primary'>Generate</Button>
        </FlexBox>
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