const toxicity = require('../../features/toxicity-detection/toxicity')





module.exports = (client) => {

    client.on('messageCreate',  async (message) => {
     if(["963406071173627904","667044844366987296"].includes(message.channel.id) && message.content){
        toxicity.logResult(message)
     }
       
      
    });

}
function components() {
    const row = new ActionRowBuilder()

    row.addComponents(
        new ButtonBuilder()
        .setCustomId('global/ban')
        .setLabel("Banned")
        .setDisabled(true)
        .setStyle(ButtonStyle.Danger)


    )



    return [row]
}