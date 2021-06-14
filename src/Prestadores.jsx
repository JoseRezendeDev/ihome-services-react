import {
    Link
} from 'react-router-dom';


const categorias = [
    {
        id: 1,
        nome: 'pedreiro'
    },
    {
        id: 2,
        nome: 'pintor'
    },
    {
        id: 3,
        nome: 'piscineiro'
    }
];

const prestadores = [
    {
        nome: "Jose",
        cpf: "11122233344",
        idade: 37,
        cidade: "Sao Carlos",
        preco_dia: 120
    },
    {
        nome: "Kaleo",
        cpf: "163473576",
        idade: 31,
        cidade: "Sao Carlos",
        preco_dia: 90
    },
    {
        nome: "Henrique",
        cpf: "436817232",
        idade: 30,
        cidade: "Sao Carlos",
        preco_dia: 130
    },
    {
        nome: "Bruno",
        cpf: "267547424",
        idade: 35,
        cidade: "Araraquara",
        preco_dia: 120
    }
];

function Prestadores(props) {
    const categoriaId = props.match.params.categoriaId;
    const categoria = categorias.find(categoria => categoria.id === parseInt(categoriaId));

    return (
        <div>
            <p>
                <Link to={`/categoria`}>categorias</Link> &gt; prestadores
            </p>
            <h1>Prestadores</h1>
            <br />
            <h2>{categoria && categoria.nome}</h2>
            <ul>
                {
                    prestadores.map(prestador => {
                        return (
                            <div>
                                <li>
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