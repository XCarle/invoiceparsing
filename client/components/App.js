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

    const fileReader = new FileReader();
    fileReader.readAsText(files[0]);
    fileReader.onload = function(e){
      console.log(fileReader.result);
    };
    fileReader.onloadend = this.handlePDFUpload(files[0]);
    console.log("result : ", fileReader.result);
  }

  handlePDFUpload(file) {
    console.log("file", file);
    fetch("/extract-vat-numbers?file="+JSON.stringify({file}), {
      method:'POST',
      headers: {
        'Accept': 'application/pdf',
        'Content-Type': 'application/pdf',
      }
    }).then(function(response){
      console.log("response : ",response);
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
