import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends Component {
    state = { videos: [] };
    
    onTermSubmit = async term => {
        const results = await youtube.get('/search', {
            params: {
                q: term
            },
        });

        this.setState({ videos: results.data.items });
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos
            </div>
        );
    }
}

export default App;