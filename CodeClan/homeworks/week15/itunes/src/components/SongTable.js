import React from 'react';
import SongTableBody from './SongTableBody';

const SongTable = ({ songs }) => {
  return (
    <table className="songs-table">
      <SongTableBody songs={songs} />
    </table>
  );
};

export default SongTable;
