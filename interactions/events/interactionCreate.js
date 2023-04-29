
const Buttons = require('../handlers/buttons-interaction-handler')
const commands = require('../handlers/commands')
const Menus = require('../handlers/selectmenu-interaction-handler')
const autocompleteHandler = require('../handlers/autocomplete-handler')
const Modals = require('../handlers/modalSubmission_handler')
const user = require('../../database/user')










module.exports = (dbclient, client) => {

    client.on('interactionCreate', async interaction => {
        //console.log(interaction.user.username)


        var d = {}

        var config = await dbclient.collection('global').findOne({
            id: "config"
        })
        //fetch user info;
        const u=await user.getUser(interaction.user.id,dbclient);
        
        //fetch team info;
        if(u && u?.team) {
            try {
                d.team=await dbclient.collection("teams").findOne({"_id":u.team})
                console.log(d.team)
            }
            catch{}
            
            
        }
        d.user=u;
        d.cg = config
        d.i = interaction
        d.db = dbclient



        //  interaction.deferUpdate()
      
        if (interaction.isCommand() || interaction.isContextMenuCommand()) return commands.execute(d)
        // else if(interaction.isAutocomplete()) return autocomplete.execute(interaction)
        else if (interaction.isButton() && Buttons.isGlobalButton(d)) return Buttons.execute(d)
        else if (interaction.isSelectMenu()&& Menus.isGlobalSelectmenu(d)) return Menus.execute(d)
        else if(interaction.isAutocomplete())return autocompleteHandler.execute(d);
        else if (interaction.isModalSubmit() && Modals.isGlobalModal(d)) return Modals.execute(d)
    });

}