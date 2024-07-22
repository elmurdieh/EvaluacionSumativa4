import React, { useState, useEffect } from 'react';
import FormularioLibro from './components/FormularioLibro';
import ListaLibros from './components/ListaLibros';
import FormularioEditarLibro from './components/FormularioEditarLibro';

const App = () => {
    const [libros, setLibros] = useState([]);
    const [editando, setEditando] = useState(false);
    const [libroActual, setLibroActual] = useState({});

    useEffect(() => {
        const datosLibros = JSON.parse(localStorage.getItem('libros')) || [];
        setLibros(datosLibros);
    }, []);

    useEffect(() => {
        localStorage.setItem('libros', JSON.stringify(libros));
    }, [libros]);

    const agregarLibro = (libro) => {
        setLibros([...libros, libro]);
    };

    const eliminarLibro = (titulo) => {
        setLibros(libros.filter((libro) => libro.titulo !== titulo));
    };

    const editarLibro = (libro) => {
        setEditando(true);
        setLibroActual(libro);
    };

    const actualizarLibro = (libroActualizado) => {
        setLibros(libros.map((libro) => (libro.titulo === libroActualizado.titulo ? libroActualizado : libro)));
        setEditando(false);
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Biblioteca de Libros</h1>
            {editando ? (
                <FormularioEditarLibro libroActual={libroActual} actualizarLibro={actualizarLibro} setEditando={setEditando} />
            ) : (
                <FormularioLibro agregarLibro={agregarLibro} />
            )}
            <ListaLibros libros={libros} eliminarLibro={eliminarLibro} editarLibro={editarLibro} />
        </div>
    );
};

export default App;
