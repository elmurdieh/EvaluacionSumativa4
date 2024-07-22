import React, { useState, useEffect } from 'react';

const FormularioEditarLibro = ({ libroActual, actualizarLibro, setEditando }) => {
    const [libro, setLibro] = useState(libroActual);

    useEffect(() => {
        setLibro(libroActual);
    }, [libroActual]);

    const handleSubmit = (e) => {
        e.preventDefault();
        actualizarLibro(libro);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLibro({ ...libro, [name]: value });
    };

    const handleImagenChange = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setLibro({ ...libro, imagen: reader.result });
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Título</label>
                <input type="text" className="form-control" name="titulo" value={libro.titulo} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label>Autor</label>
                <input type="text" className="form-control" name="autor" value={libro.autor} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label>Género</label>
                <input type="text" className="form-control" name="genero" value={libro.genero} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label>Fecha de Publicación</label>
                <input type="date" className="form-control" name="fechaPublicacion" value={libro.fechaPublicacion} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label>Imagen de Referencia</label>
                <input type="file" className="form-control" onChange={handleImagenChange} />
                {libro.imagen && <img src={libro.imagen} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
            </div>
            <button type="submit" className="btn btn-primary">Actualizar Libro</button>
            <button type="button" className="btn btn-secondary" onClick={() => setEditando(false)}>Cancelar</button>
        </form>
    );
};

export default FormularioEditarLibro;
