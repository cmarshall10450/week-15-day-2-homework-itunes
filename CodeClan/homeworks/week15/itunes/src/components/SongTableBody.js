import React from 'react';
import SongRow from './SongRow';

const SongTableBody = props => {
  const songs = props.songs.map((song, i) => {
    const id = song.id.attributes['im:id'];
    const title = song['im:name'].label;
    const artist = song['im:artist'].label;
    const image = song['im:image'][0].label;
    const link = song.id.label;
    const preview = song.link[1].attributes;

    return (
      <SongRow
        key={id}
        title={title}
        image={image}
        artist={artist}
        preview={preview}
        rank={i + 1}
        link={link}
      />
    );
  });

  return <tbody className="songs-table-body">{songs}</tbody>;
};

export default SongTableBody;
