import {getItem, getPJ} from "/src/api.jsx" 
import React, { useEffect, useState } from 'react';

export function App() {
   
    async function item(){
        const resp = await getItem()
        let sintaxis =  document.createElement("div")
       
        let currentDiv = document.getElementById("");
        resp.map((item) =>{   
        

          document.body.insertBefore(sintaxis, currentDiv);          
          let newContent = document.createElement("p");
          newContent.textContent = item
          sintaxis.appendChild(newContent)

          

            console.log(item)
            return{
                id: item.id,
                Name: item.Name,
                Type: item.Type,
                Value: item.Value,
                durability: item.durability,
                image: item.image
        }}
         )
        
        
    }
    function PJ(){
        const resp = getPJ()
        console.log(resp)
    }
    return(
        <>
        <button onClick={item}>obtener armas</button>
        <button onClick={PJ}>obtener personaje </button>
        <button>editar</button>
        <button>crear</button>

      </>
    )
}

