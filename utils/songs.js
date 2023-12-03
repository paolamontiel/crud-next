let songs = [
  { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1', year: '2022' },
  { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2', year: '2023' },
  // Agrega más canciones según sea necesario
];

// Función para obtener todas las canciones
export const getAllSongs = () => {
  return songs;
};

// Función para obtener los detalles de una canción por ID
export const getSongById = (id) => {
  return songs.find((song) => song.id.toString() === id.toString());
};

// Función para agregar una nueva canción
export const addSong = (song) => {
  const newSong = { id: songs.length + 1, ...song };
  songs = [...songs, newSong];
  return newSong;
};

// Función para editar una canción por ID
export const editSong = (id, updatedSong) => {
  songs = songs.map((song) =>
    song.id.toString() === id.toString() ? { ...song, ...updatedSong } : song
  );
  return updatedSong;
};

// Función para eliminar una canción por ID
export const deleteSong = (id) => {
  songs = songs.filter((song) => song.id.toString() !== id.toString());
  return id;
};
