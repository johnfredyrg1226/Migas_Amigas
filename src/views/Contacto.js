import React from 'react'
import '../css/contacto.css';

function TrabajaConNosotrosForm() {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormularioEnviado(true);
    alert(' Formulario enviado correctamente');

  };
  return (
    <div>
      {formularioEnviado ? (
        <p>Formulario enviado correctamente</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Aquí va tu formulario */}
          <button type="submit">Enviar Formulario</button>
        </form>
      )}
    </div>
  );
}



const Contacto = () => {
  return (
    <section>
      <h1>Formulario "Trabaja con Nosotros"</h1>
      <form id="trabaja-con-nosotros-form" className='trabaja'>
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required aria-invalid="true" />
        </div>
        <div>
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required aria-invalid="true" />
        </div>
        <div>
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje"></textarea>
        </div>
        <div>
          <label for="cv" >Adjuntar CV:</label>
          <input type="file" id="cv" name="cv" aria-invalid="true" />//
        </div>
        <div>
          <label for="acepto-terminos"><input type="checkbox" id="acepto-terminos" name="acepto_terminos" /> Acepto los términos y condiciones</label>
        </div>
        <button type="submit">Enviar Formulario</button>
      </form>
      <br />
      <br />
      <br />
      
      <br />
      <br />
      <h1 id='h1informacion_contacto'>Información de Contacto</h1>
      <table>
        <thead>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Enviar Correo Electrónico</th>
            <th scope='col'>Copiar Correo Electrónico </th>
            <th scope='row'>Teléfono</th>
            <th scope='row'>Cargo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Ramirez</td>
            <td><a href='mailto:johnfredyrg@gmail.com'>johnfredyrg@gmail.com</a></td>
            <td>johnfredyrg@gmail.com</td>
            <td>639197794</td>
            <td>Desarrollador Back-End </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td><a href='mailto:jane@example.com'>jane@example.com</a></td>
            <td>jane@example.com</td>
            <td>987-654-3210</td>
            <td>Gerente</td>
          </tr>
          <tr>
            <td>Alice Johnson</td>
            <td><a href='mailto:alice@example.com'>alice@example.com</a></td>
            <td>alice@example.com</td>
            <td>555-555-5555</td>
            <td>Administrador</td>
          </tr>
        </tbody>

      </table>
    </section>


  )
}

export default Contacto;

