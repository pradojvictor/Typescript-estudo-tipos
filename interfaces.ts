interface Usuario {
    name: string;
    email: string;
    address?: string;
};

function getUser(): Usuario {
    return {
        name: 'victor',
        email: 'victro@exemple.com'
    }
};

function setUser(usuario: Usuario) {
    //..
}
