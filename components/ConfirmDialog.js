import React from 'react';

const ConfirmDialog = ({ onConfirm }) => {
  return (
    <div>
      <p>¿Estás seguro de que quieres eliminar esta canción?</p>
      <button onClick={onConfirm}>Sí, eliminar</button>
      <button onClick={() => onConfirm(null)}>Cancelar</button>
    </div>
  );
};

export default ConfirmDialog;
