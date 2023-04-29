module.exports={
    bot_init
}

async function bot_init(db,client){
    return new Promise((resolve, reject) => {
        db.collection("logs").insertOne({
            id:"bot_init",
            servers:client.guilds.cache.map(guild => guild.id),
            client_name:client.user.username,
            client_id:client.user.id,
            date:Date.now()
        })
    });

}