interface logueado {
    logueado: boolean;
}

function PanelLogin(login: logueado) {
    if (login.logueado) {
        return (
            <div>
                <h2>Bienvenido, usuario!</h2>
                <p>Has iniciado sesión correctamente.</p>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Por favor, inicia sesión</h2>
            </div>
        );
    }
}

export default PanelLogin;