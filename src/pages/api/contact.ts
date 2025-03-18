import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const fullName = formData.get('fullname');
    const email = formData.get('email');
    const projectType = formData.get('projectType');
    const budget = formData.get('budget');
    const message = formData.get('message');

    // Lógica para procesar el formulario:
    // - Guardar en base de datos
    // - Enviar correo usando nodemailer
    // - Enviar a un webhook externo, etc.

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
