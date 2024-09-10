// app/api/register/route.js

export async function POST(request) {
  try {
    const { username, email, password, confirmPassword } = await request.json();

    // Validar que los campos no estén vacíos
    if (!username || !email || !password || !confirmPassword) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son obligatorios.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      return new Response(
        JSON.stringify({ error: 'Las contraseñas no coinciden.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Aquí puedes agregar lógica para verificar si el usuario ya existe, etc.
    // Y luego, si todo es válido, guardar el usuario en la base de datos.

    // Simular respuesta exitosa
    return new Response(
      JSON.stringify({ message: 'Usuario registrado exitosamente.' }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error procesando la solicitud.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
