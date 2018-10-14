import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Image from '../components/Image';
import Loader from 'react-loader-spinner';
import RadioButtons from '../components/RadioButtons';

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
    imageConverted: false,
    genre: 'all',
    loading: false,
  };

  render() {

    let title;
    let image;
    let radioButtons = <RadioButtons onChangeInterval={this.onChangeInterval} current={this.state.genre} />;
    let buttons;

    // Set the title and buttons depending on if a image has been uploaded
    if (this.state.imageConverted) {
      buttons = (<BoxDownload>
       <a href={`data:image/jpg;base64, ${this.state.convertedPicture}`} download="awesomePic.jpg"><Button  variant='contained' color='primary'>Download</Button></a>
      </BoxDownload>);

      title = <PageTitle>Download your image</PageTitle>;

      radioButtons = null;
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

    // Decide the state of the image field depending on if a file has been uploaded or generated
    if (this.state.convertedPicture) {
      image = <Image src={`data:image/jpg;base64, ${this.state.convertedPicture}`} alt='converted'/>    
    } 
    
    else if (this.state.loading) {
      title = <PageTitle>Generating...</PageTitle>
      image = <Loader 
      type="Audio"
      color="#1DB954"
      height="100"	
      width="100"
      />; 
      radioButtons = null;
      buttons = null;
    }
      
    else if (this.state.picture !== '') {
      image = <Image src={this.state.picture} alt='uploaded'/>
    } 
    
    else {
      image = (<ImagePlaceholder><h3>Choose an image to upload</h3></ImagePlaceholder>);
    }

    return (
      <Wrapper>
        {title}
        {image}
        {radioButtons}
        {buttons}
      </Wrapper>
    )
  }

  onGenerate = e => {
    e.preventDefault();

    let data = new FormData();
    data.append('file', this.state.pictureRaw);
    data.append('token', localStorage.spotifyToken);
    data.append('genre', this.state.genre);

    axios.post('http://localhost:5000/upload', data)
      .then(res => this.setState({convertedPicture: res.data, imageConverted: true, loading: false}))
      .catch(err => console.log(err));
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

  onChangeInterval = e => {
    e.persist();
    const genre = e.target.checked ? e.target.value : this.state.interval;

    this.setState({
      genre
    });
  };
}


export default UploadPage;