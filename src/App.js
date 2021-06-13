import './App.css';
import Categoria from './Categoria';
import Prestador from './Prestador';
import Prestadores from './Prestadores';
import {
  Switch, Route
} from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Categoria} exact />
        <Route path="/prestadores/:categoriaId" component={Prestadores} />
        <Route path="/prestador/:cpf" component={Prestador} />
      </Switch>
    </main>
  );
}

export default App;
