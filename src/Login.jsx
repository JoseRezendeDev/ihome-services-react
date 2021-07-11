import {
    useHistory
} from 'react-router-dom';
import { useState } from 'react';

function Login(props) {
    const history = useHistory();
    const [usuario, setUsuario] = useState("jose");
    const [senha, setSenha] = useState("jose123");

    const handleChangeUsuario = (event) => {
        setUsuario(event.target.value);
    }

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    }

    const autenticar = () => {
        if ((usuario === "jose" && senha === "jose123") || (usuario === "henrique" && senha === "henrique123")) {
            history.push("/categoria");
        } else {
            alert("Login invalido, tente logar como jose/jose123");
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <br />
            Usuário: <input id="usuario" onChange={handleChangeUsuario} value={usuario} />
            <br />
            Senha: <input type="password" id="senha" onChange={handleChangeSenha} value={senha} />
            <br />
            <button onClick={autenticar}>Entrar</button>
        </div>
    );
}

export default Login;