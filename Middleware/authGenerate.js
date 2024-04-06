var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

const {config} = require("../Config/config.js");

function generateToken(userId){
    var token = jwt.sign({ id: userId }, config.get('JWT_TOKEN_SECRET'), {
        expiresIn: 86400 // expires in 24 hours
    });
    return token
}

module.exports={
    generateToken
}