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
    const [cliente, setCliente] = useState({});
    const [shouldUpdateServicos, setShouldUpdateServicos] = useState(0);

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

        const urlCliente = 'http://localhost:80/cliente/1';
        const requestCliente = new Request(urlCliente);

        fetch(requestCliente)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCliente(data);
            })
            .catch(erro => exibirErroGetCliente(erro));
    }, [cpf, shouldUpdateServicos]);

    const exibirErroGetPrestador = erro => {
        alert('Falha ao buscar prestador: ' + erro);
    }

    const exibirErroGetServicos = erro => {
        alert('Falha ao buscar servicos: ' + erro);
    }

    const exibirErroGetCliente = erro => {
        alert('Falha ao buscar cliente: ' + erro);
    }

    const exibirErroContratarPrestador = erro => {
        alert('Falha ao contratar prestador: ' + erro);
    }

    const encodeFormData = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }

    const contratar = () => {
        const body = {
            id: null,
            data: new Date().toISOString().slice(0, 10),
            preco_total: prestador.preco_dia || 0,
            id_cliente: cliente.id,
            cpf_prestador: prestador.cpf
        }

        fetch('http://localhost:80/prestador/servico', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: encodeFormData(body)
        })
            .then(setShouldUpdateServicos(shouldUpdateServicos + 1))
            .catch(erro => exibirErroContratarPrestador(erro));
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
            <p>Pre??o por dia: {prestador.preco_dia}</p>
            <button onClick={contratar}>Contratar</button>
            <br />
            <br />
            <br />
            <h4>Servi??os j?? realizados</h4>
            <ul>
                {
                    servicos && servicos.map(servico => {
                        return (
                            <li key={servico.id}>
                                <p>Data: {servico.data.substr(0, 10)}
                                <br />
                                Pre??o total: {servico.preco_total}
                                <br />
                                Nota: {servico.nota}
                                <br />
                                Coment??rio: {servico.comentario}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    );
}

export default Prestador;