let $form = document.querySelector("[name=formulario]")

function validarForm(event) {
    event.preventDefault()
    manejarErrores()
    if (verificarTodo() === true) { exito() }
}
