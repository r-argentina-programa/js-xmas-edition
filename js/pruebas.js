function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}



function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Este campo debe contener al menos 1 caracter',
        'Validar ciudad no validó que la ciudad tenga al menos 1 caracter',
    );
};

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe contener al menos 1 caracter',
        'Validar descripcion regalo no validó que la descripción del regalo tenga al menos 1 caracter',
    );
    
    console.assert(
        validarDescripcionRegalo('asdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwerty') ===
        'Este campo debe contener menos de 100 caracteres',
        'Validar descripcion regalo no validó que la descripción del regalo tenga menos de 100 caracteres',
    );
};

probarValidarCiudad();
probarValidarNombre();
probarValidarDescripcionRegalo();