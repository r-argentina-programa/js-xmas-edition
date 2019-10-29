function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo no puede estar vacío',
      'Validar nombre no validó que el nombre no sea vacío',
  );
  console.assert(
      validarNombre(
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
  console.assert(
    validarNombre(
        '1') ===
    'Este campo debe contener solo letras',
    'Validar nombre no validó que el nombre sean solo letras',
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Este campo no puede estar vacío',
        'Validar ciudad no validó que la Ciudad no sea vacío',
    );
}

function probarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo no puede estar vacío',
        'Validar descripción no validó que la descripción no sea vacío',
    );
    console.assert(
        validarDescripcionRegalo(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
        'Este campo debe tener menos de 250 caracteres',
        'Validar descripción regalo no validó que la descripción sea menor a 250 caracteres',
    );
  }

probarValidarNombre();
probarValidarCiudad();
probarDescripcionRegalo();
