// sendmailer.ts

import * as nodemailer from 'nodemailer';

export class SendMailerService {
  async sendMail() {
     const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'marketplace1836@gmail.com',
        pass: 'dwnaopulpnqlvziw',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Message object
    const message = {
      from: 'xxxxx@gmail.com',
      to: 'jabriskander361@gmail.com',
      subject: 'Récupération du mot de passe',
      html: `
      <html>
      <head>
        <style>
          /* Add your styles here */
          body {
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
          }
          .container {
            margin: 0 auto;
            max-width: 600px;
            padding: 20px;
            text-align: center;
          }
          .header {
            background-color: #f5f5f5;
            border-bottom: 1px solid #ddd;
            margin-bottom: 20px;
            padding: 10px 20px;
            border-radius: 10px;
          }
          .title {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
            color:#26a4ab;
          }
          .content {
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 10px;
            
          }
          h2 {
              color: #7d1a1a;
              display: inline-block;
              border-radius: 10px;
          }
        </style>
        <!-- Load Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Votre demande de changement de mot de passe</h1>
          </div>
          <div class="content">
            <p>Bonjour Mr/Mme <strong>hamaaaaaaaaaaaa,</strong></p>
            <p>Nous avons reçu votre demande pour changer votre mot de passe.</p>
            <p>Veuillez trouvez ci-dessous le code pour confirmer votre identité afin de changer le mot de passe:</p>
            <h2 style="font-size: 36px; font-weight: bold;">frezaaaaaaaaaaaaa</h2>
            <p>Vous pouvez utiliser ce code seulement une fois.</p>
          </div>
        </div>
      </body>
    </html>
      `,
    };

    try {
      const info = await transporter.sendMail(message);
      console.log('Email sent successfully!', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      transporter.close();
    }
  }
}
