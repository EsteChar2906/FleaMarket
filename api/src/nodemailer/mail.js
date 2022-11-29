import nodemailer from 'nodemailer';
import {EMAIL, PASS } from '../../config.js' 

const createTransporter = () => {
	var transport = nodemailer.createTransport({
		host: "smtp.gmail.com",
        auth: {
        	user: EMAIL,
        	pass: PASS
        }
    });
    return transport;
};

export const send_Mail = async (correo, tipo, firstname, lastname) => {
	const transport = createTransporter()
	if(tipo === "registro"){
		const mail = await transport.sendMail({
			from: `Hola bienvenido a fleaMarket <fleamarket.appservices@gmail.com>`,
			to: correo,
			subject: 'Se ha registrado correctamente',
			text: 'Hola bienvenido al mejor sitio de comprar donde podras comprar ahorrando',
			html: `<div><h3>Registro exitoso</h3><p>El usuario ${firstname} ${lastname} se ha registrado correctamente con el siguiento correo ${correo}. </p></div>`
		})
	}
	if(tipo === "orden"){
		const mail = await transport.sendMail({
			from: `Pago exitoso <fleamarket.appservices@gmail.com>`,
			to: correo,
			subject: 'Su pago se ha registrado correctamente',
			text: 'Se le informa que ha realizado la compra de sus productos y se procedera con el envio de los productos',
			html: `<div><h3>Pago exitoso</h3><p>El usuario ${firstname} ${lastname} ha realizado una compra de los siguientes productos ${nombres} </p></div>`
		})
	}

	console.log("message send")
};