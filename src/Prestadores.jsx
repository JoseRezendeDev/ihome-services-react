import DetalhesPrestador from './Prestador';
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
        cidade: "Sao Carlos",
        preco_dia: 120
    },
    {
        nome: "Kaleo",
        cpf: "163473576",
        cidade: "Sao Carlos",
        preco_dia: 90
    },
    {
        nome: "Henrique",
        cpf: "436817232",
        cidade: "Sao Carlos",
        preco_dia: 130
    },
    {
        nome: "Bruno",
        cpf: "267547424",
        cidade: "Araraquara",
        preco_dia: 120
    }
]

function Prestadores(props) {
    const categoriaId = props.match.params.categoriaId;
    const categoria = categorias.find(categoria => categoria.id === parseInt(categoriaId));

    return (
        <div>
            <h1>{categoria.nome}</h1>
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