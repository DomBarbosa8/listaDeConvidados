import React from 'react';

const ClassComponent = ({nome, estaNaLista}) => {
    return (
        <li>{nome} {estaNaLista ? "está" : "não está"} convidada para a festa</li>
    )
}

export default ClassComponent;