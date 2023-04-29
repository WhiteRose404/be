const botClient = require('../init/bot_client')
const dbClient = require('../init/db_client')

module.exports = async (req, res, next) => {
    // do the auth check
    // if the user is authenticated, call next()
    // if the user is not authenticated, send a 401 response
    // res.status(401).send('Unauthorized');


    // dbClient.run().then((mongoClient)=>{
    //     botClient.login(mongoClient)
    //    // test(mongoClient)
    // });

    next();
}