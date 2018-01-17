import React from 'react';
import AudioPlayer from './AudioPlayer';

const SongRow = ({ rank, image, title, artist, preview, link }) => {
  return (
    <tr>
      <td className="rank">{rank}</td>
      <td>
        <img src={image} />
      </td>
      <td>
        <a href={link}>{title}</a>
      </td>
      <td>{artist}</td>
      <td>
        <AudioPlayer source={preview.href} type={preview.type} />
      </td>
    </tr>
  );
};

export default SongRow;
