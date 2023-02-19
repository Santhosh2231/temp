import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
// import Audio from './components/Audio';
import VideoMain from './components/VideoMain';
import FileUploadMultiple from './components/FileUploadMultiple';
import YtMp3 from './components/YtMp3';


function App() {

  return (
    <div className='bg-slate-100 h-screen'>
      {/* <Audio /> */}
      
      <VideoMain />
      <FileUploadMultiple />
      <YtMp3 />
    </div>
  )
}

export default App
