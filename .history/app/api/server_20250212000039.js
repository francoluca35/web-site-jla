const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deamoncompany18@gmail.com",  // Tu correo Gmail
    pass: "qqpjocekljsjgwvf", // Contraseña de la cuenta o contraseña de aplicación de Gmail
  },
});

// Ruta para manejar el envío de correos
app.post("/enviar-correo", (req, res) => {
    console.log("Datos recibidos:", req.body);  // Muestra los datos en la terminal
  
    const { nombre, apellido, empresa, email, mensaje } = req.body;
  
    if (!nombre || !apellido || !empresa || !email || !mensaje) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
  
    const mailOptions = {
        from: `"${nombre} ${apellido}" <deamoncompany18@gmail.com>`, 
        replyTo: email, 
        to: "deamoncompany18@gmail.com",
        subject: `Nuevo mensaje de ${nombre} ${apellido}`,
        text: `Nombre: ${nombre} ${apellido}
      Empresa: ${empresa}
      Email: ${email}
      
      Mensaje:
      ${mensaje}`,
      };
      
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error al enviar correo:", error);
        return res.status(500).json({ message: "Error al enviar el correo", error });
      }
      console.log("Correo enviado:", info.response);
      return res.status(200).json({ message: "Correo enviado exitosamente", info });
    });
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});
