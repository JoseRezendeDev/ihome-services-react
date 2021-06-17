import {
    Link
} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Categoria(props) {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        var myHeaders = new Headers();
        const myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'no-cors',
            cache: 'default'
        };

        fetch('http://localhost:80/categoria', myInit)
            .then(resp => resp.json())
            .then(data => setCategorias(data))
    });

    return (
        <div>
            <h1>Categorias</h1>
            <br />
            <ul>
                {
                    categorias.map(categoria => {
                        return (
                            <li>
                                <Link to={`/prestadores/${categoria.id}`}>{categoria.nome}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Categoria;