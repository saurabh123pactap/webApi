const sgMail = require('@sendgrid/mail');
const {config} = require("../Config/config.js");
sgMail.setApiKey(config.get('SGMAIL_SETAPIKEY'));
// by sendGrid send mail for fake
module.exports.FakeMail=(req,res)=>{
    console.log("hello get dat")
    const msg = {
    to: 'mishra.arun18@gmail.com',
    from: 'mishra.arun18@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg).then((res,err)=>{
        console.log("msgv ggggggg",err)
        if(res){
        console.log("msg",res)
        }else{
        console.log("err")
        }
    });

}