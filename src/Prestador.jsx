import {
    Link
} from 'react-router-dom';

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

function Prestador(props) {
    const cpf = props.match.params.cpf;
    const prestador = prestadores.find(prestador => prestador.cpf === cpf);

    return (
        <div>
            <p>
                <Link to={`/categoria`}>categorias</Link> &gt; 
                <Link to={`/prestadores/1`}>prestadores</Link> &gt; 
                prestador {prestador.nome}
            </p>
            <h1>Prestador</h1>
            <h2>Nome: {prestador.nome}</h2>
            <p>Idade: {prestador.idade}</p>
            <p>Cidade: {prestador.cidade}</p>
            <p>Preço por dia: {prestador.preco_dia}</p>
            <button>Contratar</button>
        </div>
    );
}

export default Prestador;