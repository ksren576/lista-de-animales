class Propietario {
  constructor(nombre, direccion, telefono) {
    this.Nombre = nombre;
    this.Direccion = direccion;
    this.Telefono = telefono;
  }

  datosPropietario() {
      return `<li>El nombre del dueño es: ${this.Nombre}. El domicilio es: ${this.Direccion}, y el número telefónico de contacto es: ${this.Telefono}</li>`;
  }
}

class Animal extends Propietario {
  constructor(tipo, nombre, direccion, telefono) {
    super(nombre, direccion, telefono);
    this.Tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es un: ${this.tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombreMascota, enfermedad, tipo, nombre, direccion, telefono) {
    super(tipo, nombre, direccion, telefono);
    this.NombreMascota = nombreMascota;
    this.Enfermedad = enfermedad;
  }

  get nombreMascota() {
    return this.NombreMascota;
  }
  get enfermedad() {
    return this.Enfermedad;
  }
  set nombreMascota(value) {
    this.NombreMascota = value;
  }
  set enfermedad(value) {
    this.Enfermedad = value;
  }
}

// Primer paso, obtener el elemento HMTL del botón
const elementoBoton = document.getElementById('botonAgregar');

// Agregar el listener de click al botón
elementoBoton.addEventListener('click', function() {
    // Obtener los datos de todos los elementos del formulario
    const elementoPropietario = document.getElementById('propietario');
    const elementoTelefono = document.getElementById('telefono');
    const elementoDireccion = document.getElementById('direccion');
    const elementoNombreMascota = document.getElementById('nombreMascota');
    const elementoTipo = document.getElementById('tipo');
    const elementoEnfermedad = document.getElementById('enfermedad');

    const elementoLista = document.getElementById('lista');

    // Crear instancia de la clase que hereda de las demas o la de menor rango
    const instancia = new Mascota(
        elementoNombreMascota.value,
        elementoEnfermedad.value, 
        elementoTipo.value,
        elementoPropietario.value,
        elementoDireccion.value,
        elementoTelefono.value
    );

    const mensaje = `${instancia.datosPropietario()}
                    <li>El tipo de animal es un: ${instancia.tipo}, mientras que el nombre de la mascota es: ${instancia.nombreMascota} y la enfermedad es: ${instancia.enfermedad}</li>`;

    elementoLista.innerHTML = mensaje;
});