
const Discord = require('discord.js')
const dbLogger = require('../database/db_logger')
const handler = require('../interactions/handler')




module.exports = {
    login(mongoClient){
        const client = new Discord.Client({
            partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
            intents:98303
        });
        client.login(process.env.bot_token)
        client.on('ready', async () => {
            //handler(mongoClient,client)
            dbLogger.bot_init(mongoClient,client)
            console.log(`${client.user.username} is Online `+ ` \nID: ${client.user.id}`);
        })

        return client 


    }
}