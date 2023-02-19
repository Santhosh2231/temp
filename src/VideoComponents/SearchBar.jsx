import React from "react";

class SearchBar extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <>
        
        <div className="search-bar ui segment">
          <form onSubmit={this.handleSubmit} className="ui form">
            
                <div className="w-full md:w-1/2 mb-6 md:mb-0" >
                    <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
                    <h1 className='text-xl'>Video Search</h1>
                    </label>
                    <input className="appearance-none block w-full bg-white text-blue-700 border-2 border-teal-600 
                    rounded py-3 px-4 leading-tight focus:outline-none focus:bg-teal focus:border-blue-700" 
                    placeholder="Search Something..."
                    name="video-search"
                        onChange={this.handleChange}/>
                </div>
          
                 <button type="submit" className='border-2 my-5 rounded-lg text-white bg-teal-600 p-2 ' ><h4 className='text-xl font-Inria text-white'>Search</h4></button>
            
          </form>
        </div>
      </>
    );
  }
}
export default SearchBar;