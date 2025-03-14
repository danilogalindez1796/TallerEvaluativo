const login = (username: string, password: string): string => {
    if (username === "" || password === "" || password.length < 8) {
        return "Usuario o contraseña incorrectos";
    }
    return "Inicio de sesión exitoso";
};
console.log(login("usuario1", "contraseña123")); 
console.log(login("", "short")); 