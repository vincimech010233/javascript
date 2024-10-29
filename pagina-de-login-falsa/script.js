function fakeLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
}
