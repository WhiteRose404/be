
const errorHandling = (fn) => {
    return (req, res, next) => {
        try{
            fn(req, res, next);
        }catch(err){
            console.err("Error caught in errorHandlers.js: ", err);
            res.status(500).send("Internal Server Error");
        }
    };
}

module.exports = errorHandling;