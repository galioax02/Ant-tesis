require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '*****' : undefined);

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error('Faltan las variables de entorno EMAIL_USER o EMAIL_PASS');
}

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { order, customerEmail } = JSON.parse(event.body);

  // Construye el contenido del correo para el cliente
  const clienteBody = `
    ¡Gracias por tu compra, ${order.nombre} ${order.apellido} !

    Detalles de tu pedido:
    - Teléfono: ${order.telefono}
    - Correo: ${order.correo}
    - Precio: $ ${order.precio}

    Nos pondremos en contacto contigo pronto.
  `;

  // Construye el contenido del correo para ti mismo
  const adminBody = `
    Nueva orden recibida:

    Nombre: ${order.nombre} ${order.apellido}
    Teléfono: ${order.telefono}
    Correo: ${order.correo}
    Precio: $ ${order.precio}
    Parámetros: ${Object.entries(order.parametros).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;

  // Usa variables de entorno para seguridad
  const transporter = nodemailer.createTransport({
    service: 'gmail', // o el servicio que uses
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = [
    {
      from: process.env.EMAIL_USER,
      to: customerEmail,
      subject: 'Confirmación de tu compra',
      text: clienteBody,
      cc: process.env.EMAIL_USER // CC a ti mismo en el correo al cliente
    },
    {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Nueva orden recibida - Detalles completos',
      text: adminBody
    }
  ];

  try {
    // Envía ambos correos
    await Promise.all(mailOptions.map(opts => transporter.sendMail(opts)));
    return { statusCode: 200, body: JSON.stringify({ message: 'Emails sent' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
