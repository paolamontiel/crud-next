import React, { useState } from 'react';
import SongTable from '../components/SongTable';
import SongForm from '../components/SongForm';
import ConfirmDialog from '../components/ConfirmDialog';

export default function Home() {

  const initialSongs = [
    { name: 'Imagine', artist: 'John Lennon', album: 'Imagine', year: '1971' },
    { name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', year: '1975' },
    { name: 'Stairway to Heaven', artist: 'Led Zeppelin', album: 'Led Zeppelin IV', year: '1971' },
    { name: 'Like a Rolling Stone', artist: 'Bob Dylan', album: 'Highway 61 Revisited', year: '1965' },
    { name: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Nevermind', year: '1991' }
  ];

  const [songs, setSongs] = useState(initialSongs);
  const [currentSong, setCurrentSong] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleAddSong = () => {
    setCurrentSong(null);
    setIsFormOpen(true);
  };

  const handleEditSong = (song) => {
    setCurrentSong(song);
    setIsFormOpen(true);
  };

  const handleDeleteSong = (song) => {
    setCurrentSong(song);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    setSongs(songs.filter(song => song !== currentSong));
    setIsConfirmOpen(false);
  };

  const handleSubmitForm = (song) => {
    if (currentSong) {
      setSongs(songs.map(s => (s === currentSong ? song : s)));
    } else {
      setSongs([...songs, song]);
    }
    setIsFormOpen(false);
  };

  return (
    <div>
      <div className="titleContainer">
        <h1 id="mainTitle">Mi Lista de Reproducción</h1>
        <button onClick={handleAddSong} className="addButton">Agregar Canción</button>
      </div>

      <SongTable songs={songs} onEdit={handleEditSong} onDelete={handleDeleteSong} />
      {isFormOpen && <SongForm song={currentSong} onSubmit={handleSubmitForm} />}
      {isConfirmOpen && <ConfirmDialog onConfirm={handleConfirmDelete} />}
    </div>
  );
}
