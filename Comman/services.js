
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



   
module.exports = {
    generateOTP,
    timediffertent,
    
};