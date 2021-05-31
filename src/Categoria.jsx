import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom';
import DetalhesPrestador from './DetalhesPrestador';
import Prestador from './Prestador';

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
]

function Categoria(props) {
    return (
        <Router>
            <div>
                <ul>
                    {
                        categorias.map(categoria => {
                            return (
                                <li>
                                    <Link to={`/exibePrestador/${categoria.id}`}>{categoria.nome}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <Switch>
                    <Route path={`/exibePrestador/:categoriaId`}>
                        <Prestador props={{
                            categoriaId: categorias.id
                        }
                        } />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Categoria;