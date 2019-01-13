import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends Component {
    state = { 
        videos: [],
        selectedVideo: null,
     };
    
    onTermSubmit = async term => {
        const results = await youtube.get('/search', {
            params: {
                q: term
            },
        });

        this.setState({ videos: results.data.items });
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}

export default App;