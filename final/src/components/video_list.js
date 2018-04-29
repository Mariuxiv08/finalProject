import React from 'react';
import VideoListItem from './video_list_item';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return ( 
			<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} />
		);
	});

	return (
		<div className="container rootList">
			<div className="row">
				<div className="col-md-12">
					<MuiThemeProvider>
					<div className="videoList details">
						<GridList className="gridList" cols={5.1}>
			     		 {videoItems}
			    		</GridList>
			    	</div>
			    	</MuiThemeProvider>
		    	</div>
	    	</div>
    	</div>
	);
};

export default VideoList;