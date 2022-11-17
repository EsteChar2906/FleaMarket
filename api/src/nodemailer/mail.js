import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv'
dotenv.config()

const oAuth2Client = new google.auth.OAuth2( process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI )

oAuth2Client.setCredentials({
		refresh_token: process.env.REFRESH_TOKEN,
		 tls: {
            rejectUnauthorized: false
        }
	});


async function send_Mail(name, addressee){
	try{
		const accessToken = await oAuth2Client.getAccessToken();
		const transport = nodemailer.createTransport({
			host: "smtp.gmail.com",
		    port: 465,
		    service:"gmail",
			secure: true,
			auth: {
				type: 'OAuht2',
				clientId: process.env.CLIENT_ID,
				clientSecret: process.env.CLIENT_SECRET,
				user: process.env.EMAIL,
				pass: process.env.PASS,
				refreshToken: process.env.REFRESH_TOKEN,
				accessToken: accessToken.token,
				expires: 3600
			}
		});

		const mailOptions = {
			from: `Hola bienvenido a fleaMarket <${process.env.EMAIL}>`,
			to: addressee,
			subject: 'Asunto',
			text: 'Hola bienvenido',
			html: '<h3>Se ha registrado o ha actualizado su producto</h3>'
		};
		const result = await transport.sendMail(mailOptions);
		return result;
	} catch(error){
		return error
	}
};


/*send_Mail(nombre, correo)
.then(result => console.log(result))
.catch(error => console.log(error))*/