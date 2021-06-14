import {
    Link
} from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <br />
            Usuário: <input />
            <br />
            Senha: <input />
            <br />
            <Link to={`/categoria`}><button>Entrar</button></Link>
        </div>
    );
}

export default Login;