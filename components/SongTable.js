import React from 'react';
import styles from '../styles/SongTable.module.css'; // Ruta actualizada

const SongTable = ({ songs, onEdit, onDelete }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>Nombre de la Canción</th>
          <th className={styles.th}>Artista</th>
          <th className={styles.th}>Álbum</th>
          <th className={styles.th}>Año</th>
          <th className={styles.th}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <tr key={index} className={styles.tr}>
            <td className={styles.td}>{song.name}</td>
            <td className={styles.td}>{song.artist}</td>
            <td className={styles.td}>{song.album}</td>
            <td className={styles.td}>{song.year}</td>
            <td className={styles.td}>
              <button 
                className={`${styles.button} ${styles.edit}`}
                onClick={() => onEdit(song)}
              >
                Editar
              </button>
              <button 
                className={`${styles.button} ${styles.delete}`}
                onClick={() => onDelete(song)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongTable;
