import axios from "axios";
import { useRef, useState } from "react";
import { youtube_parser } from "../utils/utils";

function YtMp3() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);
    console.log(youtubeID);
    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      params: { id: youtubeID },
      headers: {
        "X-RapidAPI-Key": "f4ae1a733fmsh82d6da692edabd0p1c5a91jsn890e5d689e37",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";
  };

  return (
    <div className=" bg-slate-100">
    <div className="container">
      <span className="logo">youtube2mp3</span>
      <section className="content">
        <h1 className="content_title">YouTube to MP3 Converter</h1>
        <p className="content_description mb-10">
          Transform YouTube videos into MP3s in just a few clicks!
        </p>

        <form onSubmit={handleSubmit} className="form">

            <div className="flex justify-center align-center">
                <div className="w-full md:w-1/2 mb-6 md:mb-0" >
                <input className="appearance-none block w-full bg-white text-blue-700 border-2 border-teal-600 
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-teal focus:border-blue-700" 
                            placeholder="Paste a Youtube video URL link..." type="text"
                            ref={inputUrlRef}/>

                </div>
            </div>

        <div className="flex justify-center align-center">
            <button type="submit" className='border-2 my-5 rounded-lg text-white bg-teal-600 p-2 ' ><h4 className='text-xl font-Inria text-white'>Search</h4></button>
        </div>
       

        </form>

        {urlResult ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={urlResult}
            className="download_btn"
          >
            Download MP3
          </a>
        ) : (
          ""
        )}
      </section>
      </div>
    </div>
  );
}

export default YtMp3;



