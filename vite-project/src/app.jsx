import { getItem, getPJ, deletePJ } from "/src/api.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "/src/app.css";
import Pj from './componentes/pj.jsx';
import { VerArmas } from './paginas/ver_armas.jsx';

export function App() {
    const [pjs, setPjs] = useState([]);
    const navigate = useNavigate();

    async function fetchItems() {
        const resp = await getPJ();
        setPjs(resp);
    }

    useEffect(() => {
        fetchItems();
    }, []);

    const handleViewArmas = () => {
        navigate('/ver_armas');
    };
    const handleDelete = async (id_pj) => {
        try {
            await deletePJ(id_pj);
            setPjs(pjs.filter(pj => pj.id_pj !== id_pj));
        } catch (error) {
            console.error('Error deleting character:', error);
        }
    };

    return (
        <Routes>
            <Route path="/" element={
                <div>
                    <button onClick={handleViewArmas}>crear nuevo personaje</button>
                    <ul><Pj pjs={pjs} onDelete={handleDelete} /></ul>
                </div>
                
            } />
            <Route path="/ver_armas" element={<VerArmas />} />
        </Routes>
    );
}

export default App;