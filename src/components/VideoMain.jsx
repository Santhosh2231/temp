import React from "react";
import SearchBar from "../VideoComponents/SearchBar";
import youtube from "../VideoComponents/youtube";
import VideoList from "../VideoComponents/VideoList";
import VideoDetail from "../VideoComponents/VideoDetail";

class VideoMain extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (

      <div className="md:px-[8rem] px-[4rem] w-full bg-slate-100 py-5">
        

        <div className="">
        <SearchBar handleFormSubmit={this.handleSubmit} />
          <div className="">

            <div className="w-full">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default VideoMain;
