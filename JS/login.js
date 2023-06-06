let loginForm;

function inicializar() {
    loginForm = new FormularioLogin()
    loginForm.render();
}

function FormularioLogin() {
    this.render = function() {
        const formularioLoginDiv = document.getElementById("formulario-login");
        formularioLoginDiv.innerHTML = `<input type="email" id="email" />
            <input type="password" id="password" />
            <button onclick="loginForm.login()">Login</button>`;
    },
    
    this.login = function() {
        console.log("Boton login clickado");

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "israel@mail.com" && password === "12345678") {
            window.location.href =  "index.html"
            console.log("Usuario logueado");
        } else {
            console.log("Usuario no valido");
        }
    }
}