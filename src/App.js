import './App.css';
import Categoria from './Categoria';
import Prestador from './Prestador';
import Prestadores from './Prestadores';
import Login from './Login';
import {
  Switch, Route
} from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/categoria" component={Categoria} />
        <Route path="/prestadores/:categoriaId" component={Prestadores} />
        <Route path="/prestador/:cpf" component={Prestador} />
      </Switch>
    </main>
  );
}

export default App;
