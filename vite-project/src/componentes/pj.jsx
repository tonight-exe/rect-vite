import React from 'react';

const Pj = ({ pjs = [] }) => {
    return (
        <div>
            <h2>Objetos</h2>
            {pjs.length > 0 ? (
                pjs.map((item) => (
                    <div key={item.id_pj}>
                        <p>Name: {item.Name}</p>
                        <p>id_Arma: {item.id_Arma}</p>
                        <p>id_Armadura: {item.id_Armadura}</p>
                        <p>Age: {item.Age}</p>
                        <p>ID: {item.id_pj}</p>
                    </div>
                ))
            ) : (
                <p>No hay objetos</p>
            )}
        </div>
    );
};

export default Pj;