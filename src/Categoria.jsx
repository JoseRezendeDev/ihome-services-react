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

function Categoria(props) {
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