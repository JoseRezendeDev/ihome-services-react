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
];

function Prestador(props) {
    const cpf = props.match.params.cpf;
    const prestador = prestadores.find(prestador => prestador.cpf === cpf);

    return (
        <div>
            <p>Nome: {prestador.nome}</p>
            <p>Idade: {prestador.idade}</p>
            <p>Cidade: {prestador.cidade}</p>
            <p>Preço por dia: {prestador.preco_dia}</p>
            <button>Contratar</button>
        </div>
    );
}

export default Prestador;