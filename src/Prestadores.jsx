import {
    Link, useLocation
} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Prestadores(props) {
    const location = useLocation();
    const { categorias } = location.state;
    const [prestadores, setPrestadores] = useState([]);

    const categoriaId = props.match.params.categoriaId;
    const categoria = categorias.find(categoria => categoria.id === parseInt(categoriaId));

    useEffect(() => {
        const fetchPrestadoresByCategoriaId = async () => {
            const url = 'http://localhost:80/prestador/categoria/' + categoriaId;
            const myRequest = new Request(url);

            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setPrestadores(data);
                })
                .catch(erro => exibirErroGetPrestadores(erro));
        }

        fetchPrestadoresByCategoriaId();
    }, [categoriaId]);

    const exibirErroGetPrestadores = erro => {
        alert('Falha ao buscar prestadores: ' + erro);
    }

    return (
        <div>
            <p>
                <Link to={`/categoria`}>categorias</Link>&gt;{categoria.nome.toLowerCase()}
            </p>
            <h2>Lista de {categoria.nome.toLowerCase()}</h2>
            <ul>
                {
                    prestadores.map(prestador => {
                        return (
                            <li key={prestador.cpf}>
                                Nome:
                                <Link to={{
                                    pathname: `/prestador/${prestador.cpf}`,
                                    state: {
                                        categoria,
                                        categorias
                                    }
                                }}>{prestador.nome}</Link>
                                <br />
                                CPF: {prestador.cpf}
                                <br />
                                Cidade: {prestador.cidade}
                                <br />
                                Preço por dia: {prestador.preco_dia}
                                <br />
                                <br />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Prestadores;