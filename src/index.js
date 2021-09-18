const messages = ['Joaquín', "Macarena", "Guillermo", 'Anna', 'Nicolás', 'Jessica', 'Laura', 'Gustavo'];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg };