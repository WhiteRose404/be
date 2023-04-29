

/*

const interactionCreate = require('./events/interactionCreate');
const guildMemberAdd = require('./events/guildMemberAdd');
const guildMemberUpdate = require('./events/guildMemberUpdate');
const userUpdate = require('./events/userUpdate');







module.exports = initHandler

const fs = require('fs')
const Discord = require('discord.js');


async function initHandler(dbclient, client) {

    var config = await dbclient.collection('global').findOne({
        id: "config"
    })
  
    if(config.post_on_start) {postDelete.postSC(client,config.post_on_start)}
    initCommands(client)

    //EVENTS_ON_CREATE
    interactionCreate(dbclient, client)
    guildMemberAdd(client,dbclient);
    guildMemberUpdate(client);
    userUpdate(client);


}


*/












function initCommands(client) {
    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        client.commands.set(command.name, command);

    }

}



