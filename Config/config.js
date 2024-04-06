
const _config={

    //port
    PORT:process.env.PORT,

    //for email send
    SENDER_EMAIL:process.env.SENDER_EMAIL,
    SENDER_PASSWORD:process.env.SENDER_PASSWORD,
    FROM_EMAIL:process.env.FROM_EMAIL,
    EMAIL_SERVICE:process.env.EMAIL_SERVICE,
    //for email send

    //jwt token secrete
    JWT_TOKEN_SECRET:process.env.JWT_TOKEN_SECRET,
    
    // databse url
    DB_URL:process.env.DB_URL,

    //Session secrete for app.js file
    SESSION_SECRET:process.env.SESSION_SECRET,

    //Otp_generate
    OTP_DIGIT:process.env.OTP_DIGIT,

    //strip key----
    STRIP_KEYPUBLISHABLE : process.env.STRIP_KEYPUBLISHABLE,
    STRIP_KEYSEC :process.env.STRIP_KEYSEC,


    //#sendgrid mail key
    SGMAIL_SETAPIKEY:process.env.SGMAIL_SETAPIKEY,

}

// const config=Object.freeze(_config)
const config={
    get(key){
        const value=_config[key]
        if(!value){
            console.error(`The ${key} variable not found make sure to pass environment variables`)
            process.exit();
        }
        return value
    }
}
module.exports = {
config
}
