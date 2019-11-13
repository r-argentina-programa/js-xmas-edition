let $form = document.querySelector("[name=formulario]")

function validarForm(event) {
    event.preventDefault()
    let continuar = manejarErrores()
    if (continuar === true) { exito() }
}
