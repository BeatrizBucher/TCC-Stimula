const nodemailer = require('nodemailer');

async function enviarEmail(email, password) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'stimulaempresa@gmail.com',
            pass: 'qqlprluxxjbfzuua'
        }
    });

    const info = await transporter.sendMail({
        from: '"Stimula" <stimulaempresa@gmail.com>',
        to: email,
        subject: 'Seus dados de login',
        text: `Olá! \nSeu email: ${email}\nSua senha: ${password}`
    });

    return info;
}

module.exports = enviarEmail;