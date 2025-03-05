const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deamoncompany18@gmail.com",  // Tu correo Gmail
    pass: "qqpjocekljsjgwvf", // SIN ESPACIOS
  },
});

const mailOptions = {
  from: "tu-correo@gmail.com",
  to: "deamoncompany18@gmail.com",
  subject: "Prueba de Nodemailer",
  text: "Este es un correo de prueba",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error al enviar correo:", error);
  } else {
    console.log("Correo enviado:", info.response);
  }
});
