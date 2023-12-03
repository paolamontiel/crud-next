import React, { useState, useEffect } from 'react';
import styles from '../styles/SongForm.module.css'; 

const SongForm = ({ song, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', artist: '', album: '', year: '' });

  useEffect(() => {
    if (song) {
      setFormData(song);
    }
  }, [song]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        {}
        <label className={styles.formLabel}>Nombre de la Canción</label>
        <input
          type="text"
          name="name"
          className={styles.formField}
          placeholder="Nombre de la canción"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          className={styles.formField}
          placeholder="Artista"
          value={formData.artist}
          onChange={handleChange}
        />
         <input
          type="text"
          name="album"
          className={styles.formField}
          placeholder="Álbum"
          value={formData.album}
          onChange={handleChange}
        />
         <input
          type="text"
          name="year"
          className={styles.formField}
          placeholder="Año"
          value={formData.year}
          onChange={handleChange}
        />
        {}
        <button type="submit" className={styles.formButton}>Guardar</button>
      </form>
    </div>
  );
};

export default SongForm
