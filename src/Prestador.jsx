import { useParams } from 'react-router';
import DetalhesPrestador from './DetalhesPrestador';

const exibeDetalhesPrestador = () => {
    return (
        <DetalhesPrestador />
    )
}

function Prestador(props) {
    let { categoriaId } = useParams();

    return (
        <ul>
            <li onClick={exibeDetalhesPrestador}>{categoriaId}</li>
            <li>Carlos</li>
            <li>Gabriel</li>
        </ul>
    );
}

export default Prestador;