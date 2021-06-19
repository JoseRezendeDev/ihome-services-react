import {
    Link
} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Categoria(props) {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            const myRequest = new Request('http://localhost:80/categoria');

            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setCategorias(data);
                })
                .catch(erro => exibirErroGetCategorias(erro));
        }

        fetchCategorias();
    }, []);

    const exibirErroGetCategorias = erro => {
        alert('Falha ao buscar categorias: ' + erro);
    }

    return (
        <div>
            <h1>Categorias</h1>
            <br />
            <ul>
                {
                    categorias && categorias.map(categoria => {
                        return (
                            <li key={categoria.id}>
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