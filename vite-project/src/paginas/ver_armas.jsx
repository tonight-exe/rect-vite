import React, { useState } from 'react';
import { createPJ } from '../api.jsx';

export const VerArmas = () => {
    const [newPJ, setNewPJ] = useState({
        Name: '',
        id_Arma: '',
        id_Armadura: '',
        Age: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPJ({
            ...newPJ,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createPJ(newPJ);
        if (result) {
            alert('Personaje creado exitosamente');
            setNewPJ({
                Name: '',
                id_Arma: '',
                id_Armadura: '',
                Age: '',
            });
        } else {
            alert('Error al crear el personaje');
        }
    };

    return (
        <div>
            <h2>Crear Nuevo Personaje</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="Name" value={newPJ.Name} onChange={handleChange} required />
                </div>
                <div>
                    <label>ID Arma:</label>
                    <input type="text" name="id_Arma" value={newPJ.id_Arma} onChange={handleChange} required />
                </div>
                <div>
                    <label>ID Armadura:</label>
                    <input type="text" name="id_Armadura" value={newPJ.id_Armadura} onChange={handleChange} required />
                </div>
                <div>
                    <label>Edad:</label>
                    <input type="number" name="Age" value={newPJ.Age} onChange={handleChange} required />
                </div>
                <button type="submit">Crear Personaje</button>
            </form>
        </div>
    );
};