import { getItem, getPJ } from "/src/api.jsx";
import React, { useEffect, useState } from 'react';
import "/src/app.css";
import Items from './componentes/item.jsx';


export function App() {
    const [items, setItems] = useState([]);

    async function fetchItems() {
        const resp = await getItem();
        setItems(resp);
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <>
            <button onClick={fetchItems}>obtener armas</button>
            <button onClick={getPJ}>obtener personaje</button>
            <button>editar</button>
            <button>crear</button>

            <Items items={items} />
        </>
    );
}