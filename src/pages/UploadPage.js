import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import fileDownload from 'js-file-download';

import Button from '@material-ui/core/Button';
import Image from '../components/Image';
import obama from '../media/obama.png';

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

const BoxDownload = styled.div`
  text-align: center;
  width: 512px;
  margin: 2rem auto;
`;

class UploadPage extends Component {

  state = {
    pictureRaw: null,
    picture: '',
    convertedPicture: null,
    imageConverted: true,
  };

  render() {

    let buttons;
    let image;
    let title;

    if (this.state.imageConverted) {
      buttons = (<BoxDownload>
        <Button onClick={this.downloadImage} variant='contained' color='primary'>Download</Button>
      </BoxDownload>);

      title = <PageTitle>Download your image</PageTitle>;
    } else {
      buttons = (<FlexBox>
        <FileUpload
            id="image-upload"
            type="file"
            name="pic"
            accept="image/*"
            onChange={e => this.onChangeFiles(e.target.files)}
          />
        <Button disabled={!this.state.pictureRaw} onClick={this.onGenerate} variant='contained' color='primary'>Generate</Button>
      </FlexBox>);

      title = <PageTitle>Upload your image</PageTitle>;
    }

    if (this.state.convertedPicture) {
      image = <Image src={this.state.convertedPicture} alt='converted'/>    
    } else if (this.state.picture !== '') {
      image = <Image src={this.state.picture} alt='uploaded'/>
    } else {
      image = (<ImagePlaceholder><h3>Choose an image to upload</h3></ImagePlaceholder>);
    }

    return (
      <Wrapper>
        {title}
        {image}
        {buttons}
      </Wrapper>
    )
  }

  onGenerate = e => {
    e.preventDefault();

    let data = new FormData();
    data.append('file', this.state.pictureRaw);
    data.append('token', localStorage.spotifyToken);

    axios.post('/upload', data)
      .then(res => console.log(res))
  };

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

  downloadImage  = e => {
    e.preventDefault();
    // console.log('In download image function')
    // if(this.state.convertedPicture)
    //     fileDownload(this.state.convertedPicture, 'awesomePic.png');
    //     console.log(typeof this.state.convertedPicture);
    // else
    //     alert('No image to download')

    axios.get('/api/users/cat')
      .then(res => {
        this.setState({ convertedPicture: res.data.base64 })
      
      });
  };
}

export default UploadPage;