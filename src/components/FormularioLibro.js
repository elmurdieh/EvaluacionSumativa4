import React, { useState } from 'react';

const FormularioLibro = ({ agregarLibro }) => {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [fechaPublicacion, setFechaPublicacion] = useState('');
    const [imagen, setImagen] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoLibro = { titulo, autor, genero, fechaPublicacion, estado: 'no leído', imagen };
        agregarLibro(nuevoLibro);
        setTitulo('');
        setAutor('');
        setGenero('');
        setFechaPublicacion('');
        setImagen('');
    };

    const handleImagenChange = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagen(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Título</label>
                <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Autor</label>
                <input type="text" className="form-control" value={autor} onChange={(e) => setAutor(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Género</label>
                <input type="text" className="form-control" value={genero} onChange={(e) => setGenero(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Fecha de Publicación</label>
                <input type="date" className="form-control" value={fechaPublicacion} onChange={(e) => setFechaPublicacion(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Imagen de Referencia</label>
                <input type="file" className="form-control" onChange={handleImagenChange} />
                {imagen && <img src={imagen} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
            </div>
            <button type="submit" className="btn btn-primary">Agregar Libro</button>
        </form>
    );
};

export default FormularioLibro;
