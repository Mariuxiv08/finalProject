import React , {Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyD2nq5AO1puGS-20Y8hOaQ4iX6M01XjF_A';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {videos: [] };

		YTSearch({key: API_KEY, term: 'beach'}, (videos) => {
			this.setState({videos: videos});
			// this.setState({videos}); when key and value we keep the same
		});
	}


	render () {
	return (
		<div>
		  <SearchBar />
		  <VideoList videos={this.state.videos} />
		</div>
	);
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
