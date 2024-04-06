
const {config} = require("../Config/config.js");
var jwt = require('jsonwebtoken');

module.exports.verifyToken=(req,res,next)=>{
    console.log(req.headers.authorization,"fgdfg")
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
      }
      let token = req.headers.authorization.split(' ')[1]
      if(token === 'null') {
        return res.status(401).send('Unauthorized request')    
      }
      let payload = jwt.verify(token, config.get('JWT_TOKEN_SECRET'))
      if(!payload) {
        return res.status(401).send('Unauthorized request') 
      }
      req.userId = payload.subject
      next()

}