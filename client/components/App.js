import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      value: 'Your PDF invoice',
      uploadedFileCloudinaryUrl:''
    };

  }

  onPDFDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handlePDFUpload(files[0]);
  }

  handlePDFUpload(file) {
    console.log("file", file);
    let upload = request.post("/extract-vat-numbers")
                        .field('file', file[0]);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      console.log("Response to POST : ", response);
      // TODO

      //if (response.body.secure_url !== '') {
      //  this.setState({
      //    uploadedFileCloudinaryUrl: response.body.secure_url
      //  });
      //}
    });
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center'}}>
          <h1>1 - Select a PDF </h1>
          <Dropzone
              multiple={false}
              accept="application/pdf"
              onDrop={this.onPDFDrop.bind(this)}>
              <p>Drop an invoice (PDF) or click to select a file to upload.</p>
          </Dropzone>
        </div>
        <div style={{ textAlign: 'center'}}>
          <h1>2 - Your VAT Numbers </h1>
        </div>
      </div>
    );
  }
}
