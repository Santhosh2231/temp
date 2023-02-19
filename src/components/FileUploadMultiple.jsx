import axios from "axios";

import React, { Component, createElement } from "react";
import {FiSend} from "react-icons/fi"
let formData = new FormData();
class FileUploadMultiple extends React.Component {
  onFileChange(e) {
    // Getting the files from the input
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("audio", e.target.files[0]);
    }
  }

  handleUpload(e) {
    axios({
      // Endpoint to send files
      url: "http://0955-35-245-70-57.ngrok.io/audmain/",
      method: "POST",
      // Attaching the form data
      data: formData,
    })
      .then((res) => {
        console.log(res.data);
      }) // Handle the response from backend here
      .catch((err) => {
        console.log(formData);
      });
  }
  onFileChange1(e) {
    // Getting the files from the input
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("audio", e.target.files[0]);
    }
  }

  handleUpload1(e) {
    axios({
      // Endpoint to send files
      url: "http://0955-35-245-70-57.ngrok.io/auduser/",
      method: "POST",
      // Attaching the form data
      data: formData,
    })
      .then((res) => {
        this.setState({ loading: false });
        console.log(res.data);
      }) // Handle the response from backend here
      .catch((err) => {
        console.log(formData);
      });
  }
  handleUpload2(e) {
    this.setState({ loading: true }, () => {
      axios({
        // Endpoint to send files
        url: "http://0955-35-245-70-57.ngrok.io/result/",
        method: "POST",
        // Attaching the form data
        data: formData,
      })
        .then((res) => {
          this.setState({ loading: false });
          console.log(res.data);
        }) // Handle the response from backend here
        .catch((err) => {
          console.log(formData);
        });
    });
  }

  render() {
    return (
      <div className="bg-slate-100">
        <h1 className="container py-2 text-2xl">Select your files</h1>
        <div className='flex gap-5 justify-center items-center'>
            <label htmlFor="file-input" className="bg-teal-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-full text-xl font-Inria text-white">
                        Choose File - 1
                        <input type="file" id="file-input" className="hidden" onChange={(e) => this.onFileChange(e)}  />
            </label>
            <button onClick={(e) => this.handleUpload(e)} className='bg-teal-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-full text-xl font-Inria text-white' >
            <h4 className='text-xl font-Inria text-white'>{createElement(FiSend)}</h4></button>
       
        </div>

        <div className='flex gap-5 justify-center items-center my-5'>
            <label htmlFor="file-input" className="bg-teal-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-full text-2xl font-Inria text-white">
                        Choose File - 2
                        <input type="file" id="file-input" className="hidden" onChange={(e) => this.onFileChange1(e)}  />
            </label>
            <button onClick={(e) => this.handleUpload1(e)} className='bg-teal-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-full text-2xl font-Inria text-white' >
            <h4 className='text-xl font-Inria text-white'>{createElement(FiSend)}</h4></button>
       
        </div>

        <div className="flex justify-center items-center">
            
        <button onClick={(e) => this.handleUpload2(e)} className='border-2 my-5 rounded-lg text-white bg-orange-400 p-2 ' ><h4 className='text-xl font-Inria text-white'>Submit</h4></button>

        </div>

      </div>
    );
  }
}
export default FileUploadMultiple;


