
var moment = require('moment');
var nodemailer = require('nodemailer');

const generateOTP=function() {  
    var digits = process.env.OTP_DIGIT; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 

} 


const timediffertent = function(linkTime){
    var date2 = new Date();
    var otpTime1=date2.valueOf();
    var start=moment(otpTime1);
    var end=moment(linkTime);
    var duration = moment.duration(end.diff(start));
    var hours = duration.asMinutes();
    // console.log(hours,"heyy33")
    var posNum = (hours < 0) ? hours * -1 : hours;
    // console.log(posNum,"posNum")
    var otpTimeDiff=Math.round(posNum)
     console.log("hellofhffff",otpTimeDiff,Math.round(posNum))

return otpTimeDiff;
}


const emailSend = function(sendmsg){
    // console.log("this is for msg send",sendmsg);
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD
            }
        });
        var maillist = [sendmsg.email, process.env.FROM_EMAIL];
        var mailOptions = {
            from: process.env.FROM_EMAIL,
            to: maillist,
            subject: 'Sending Email using saurabhProperty',
            // html:'<p><strong>otp valid for 15 min</strong></p></br>'+'<p><strong style="color:red">your otp is</strong> : '+otp+'</p>'
            html:sendmsg.html,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("eroorrrr",error);
                reject(error,{err:"somthing error to send msg"})
            }
            else {
                console.log('Email sent: ',info.response);
                resolve(info.response,{msg:"successfully send msg"}) ;
            }
        });
      });
}
   
module.exports = {
    generateOTP,
    timediffertent,
    emailSend
};