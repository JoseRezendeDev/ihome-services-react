import {
    Link
} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Prestadores(props) {
    const [categorias, setCategorias] = useState([]);
    const [prestadores, setPrestadores] = useState([]);

    const categoriaId = props.match.params.categoriaId;
    const categoria = categorias.find(categoria => categoria.id === parseInt(categoriaId));

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

        const fetchPrestadoresByCategoriaId = async () => {
            const url = 'http://localhost:80/prestador/categoria/' + categoriaId;
            const myRequest = new Request(url);

            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setPrestadores(data);
                })
                .catch(erro => exibirErroGetCategorias(erro));
        }

        fetchCategorias();
        fetchPrestadoresByCategoriaId();
    }, [categoriaId]);

    const exibirErroGetCategorias = erro => {
        alert('Falha ao buscar prestadores por categoria id: ' + erro);
    }

    return (
        <div>
            <p>
                <Link to={`/categoria`}>categorias</Link> &gt; prestadores
            </p>
            <h1>Prestadores</h1>
            <br />
            <h2>{categoria && categorias.find(categoria => categoria.id === parseInt(categoriaId)).nome}</h2>
            <ul>
                {
                    prestadores.map(prestador => {
                        return (
                            <div>
                                <li key={prestador.cpf}>
                                    Nome: <Link to={`/prestador/${prestador.cpf}`}>{prestador.nome}</Link>
                                    <br />
                                    CPF: {prestador.cpf}
                                    <br />
                                    Cidade: {prestador.cidade}
                                    <br />
                                    Preço por dia: {prestador.preco_dia}
                                    <br />
                                    <br />
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Prestadores;