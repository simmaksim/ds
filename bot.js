const { Client, GatewayIntentBits } = require('discord.js');
const robot = new Client({ intents: [GatewayIntentBits.Guilds] });

//const comms = require('./comms')
let config = require('./config.json');
let token = config.token;
//let prefix = config.prefix;
// some functions
coin = () => {
	let rand = Math.floor(Math.random() * 2)
		if (rand === 1)
			return `Орел!`
		else return `Решка!`
	
}
serverInfoCommand = (int) => {
	return `Server name: ${int.guild.name}\nTotal members: ${int.guild.memberCount}`
}

userInfoCommand = (int) => {
	return `Your tag: ${int.user.tag}\nYour id: ${int.user.id}`
}

roll = () =>{
	return `Your number ${Math.floor(Math.random() * 101)}`
}

robot.on("ready", function(){
    console.log(robot.user.username + " запустился!");
})


robot.on('interactionCreate', async interaction =>{
	if(!interaction.isChatInputCommand()) return

	const { commandName } = interaction;

	if (commandName === 'mur') {
		await interaction.reply('Meoowwww');
	} else if (commandName === 'server') {
		await interaction.reply(serverInfoCommand(interaction));
	} else if (commandName === 'user') {
		await interaction.reply(userInfoCommand(interaction));
	} else if (commandName === 'coin') {
		await interaction.reply(coin(interaction));
	} else if (commandName === 'roll') {
		await interaction.reply(roll());
	}
})


robot.login(token);