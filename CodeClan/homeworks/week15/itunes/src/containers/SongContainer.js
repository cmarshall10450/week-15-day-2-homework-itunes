import React, { Component } from 'react';
import SongTable from '../components/SongTable';

export class SongsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };
  }

  componentDidMount = () => {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;

      const songs = JSON.parse(request.responseText);
      this.setState({ songs: songs.feed.entry });
    });
    request.send();
  };

  render() {
    return (
      <div className="songs-container">
        <h1>{this.props.title}</h1>
        <SongTable songs={this.state.songs} />
      </div>
    );
  }
}

export default SongsContainer;
