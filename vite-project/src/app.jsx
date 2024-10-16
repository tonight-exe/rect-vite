import { getItem, getPJ } from "/src/api.jsx";

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

    return (
        <Routes>
            <Route path="/" element={
                <div>
                    <button onClick={handleViewArmas}>crear nuevo personaje</button>
                    <button>editar</button>
                    <ul><Pj pjs={pjs} /></ul>
                </div>
                
            } />
            <Route path="/ver_armas" element={<VerArmas />} />
        </Routes>
    );
}

export default App;