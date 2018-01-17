import React from 'react';

const AudioPlayer = ({ source, type }) => (
  <audio controls>
    <source src={source} type={type} />
    Your browser does not support the audio element.
  </audio>
);

export default AudioPlayer;
