import React from 'react';

const Libro = ({ libro, eliminarLibro, editarLibro }) => {
    return (
        <div className="card my-2">
            <div className="card-body">
                {libro.imagen && <img src={libro.imagen} alt={libro.titulo} style={{ width: '100px', float: 'left', marginRight: '10px' }} />}
                <h5 className="card-title">{libro.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{libro.autor}</h6>
                <p className="card-text">Género: {libro.genero}</p>
                <p className="card-text">Fecha de Publicación: {libro.fechaPublicacion}</p>
                <p className="card-text">Estado: {libro.estado}</p>
                <button className="btn btn-warning mr-2" onClick={() => editarLibro(libro)}>Editar</button>
                <button className="btn btn-danger" onClick={() => eliminarLibro(libro.titulo)}>Eliminar</button>
            </div>
        </div>
    );
};

export default Libro;
