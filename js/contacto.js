document.getElementById("myForm").addEventListener("submit", function (event) { 
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    if (name === "" || phone === "" || email === "" || message === "") {
        alert("Por favor, complete todos los campos antes de enviar el formulario.")
        event.preventDefault()
    }
});
