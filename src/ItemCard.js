/*
Ejercicio 8
Crear un componente ItemCard que reciba como propiedades el titulo y la descripcion.
Mostrar en la página.
*/

import React from 'react';


//Componente Stateless - Funcional

const ItemCard = (props) => {
    return (
        <div>
            <ul>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ul>
        </div>
    );
}

//Componente Statefull

// class ItemCard extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.description}</h2>
//             </div>
//         );
//     }
// }

export default ItemCard;