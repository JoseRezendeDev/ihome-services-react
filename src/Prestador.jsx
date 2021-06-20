import { useEffect, useState } from 'react';
import {
    Link, useLocation
} from 'react-router-dom';

function Prestador(props) {
    const location = useLocation();
    const { categoria, categorias } = location.state;
    const cpf = props.match.params.cpf;
    const [prestador, setPrestador] = useState({});
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        const urlPrestador = 'http://localhost:80/prestador/' + cpf;
        const requestPrestador = new Request(urlPrestador);

        fetch(requestPrestador)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPrestador(data);
            })
            .catch(erro => exibirErroGetPrestador(erro));

        const urlServicos = 'http://localhost:80/prestador/' + cpf + '/servico';
        const requestServicos = new Request(urlServicos);

        fetch(requestServicos)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setServicos(data);
            })
            .catch(erro => exibirErroGetServicos(erro));
    }, [cpf]);

    const exibirErroGetPrestador = erro => {
        alert('Falha ao buscar prestador: ' + erro);
    }

    const exibirErroGetServicos = erro => {
        alert('Falha ao buscar servicos: ' + erro);
    }

    return (
        <div>
            <p>
                <Link to={`/categoria`}>categorias</Link>&gt;
                <Link to={{
                    pathname: `/prestadores/${categoria.id}`,
                    state: {
                        categorias
                    }
                }}>{categoria.nome.toLowerCase()}</Link>&gt;
                {prestador.nome}
            </p>
            <h2>{categoria.nome} {prestador.nome}</h2>
            <p>Cidade: {prestador.cidade}</p>
            <p>Preço por dia: {prestador.preco_dia}</p>
            <button>Contratar</button>
            <br />
            <br />
            <br />
            <h4>Serviços já realizados</h4>
            <ul>
                {
                    servicos && servicos.map(servico => {
                        return (
                            <li key={servico.id}>
                                <p>Data: {servico.data.substr(0, 10)}</p>
                                <p>Preço total: {servico.preco_total}</p>
                                <p>Nota: {servico.nota}</p>
                                <p>Comentário: {servico.comentario}</p>
                                <br />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Prestador;