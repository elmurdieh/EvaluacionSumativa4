import React from 'react';
import Libro from './Libro';

const ListaLibros = ({ libros, eliminarLibro, editarLibro }) => {
    return (
        <div>
            {libros.map((libro) => (
                <Libro key={libro.titulo} libro={libro} eliminarLibro={eliminarLibro} editarLibro={editarLibro} />
            ))}
        </div>
    );
};

export default ListaLibros;
