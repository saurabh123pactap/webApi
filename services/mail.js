
var nodemailer = require('nodemailer');
const {config} = require("../Config/config.js");


const sendMail = function(sendmsg){
    console.log("sendmsgsendmsgsendmsg",sendmsg)

var transporter = nodemailer.createTransport({
      service: config.get('EMAIL_SERVICE'),
      auth: {
              user: config.get('SENDER_EMAIL'),
              pass: config.get('SENDER_PASSWORD')
              
         }
  });
  var maillist=[sendmsg.email, config.get('FROM_EMAIL')];
  const mailOptions = {
      from: config.get('FROM_EMAIL'), // sender address
      to: maillist, // list of receivers
      subject: sendmsg.subject,
      html:sendmsg.html
  };                                                                                                                                                                                                                                                                                                                                                                                                               //http://localhost:5050/api/activateAccount?account_status='+1+'&'+'email='+mydata.email+'"  for query parameter
  transporter.sendMail(mailOptions, function (err, info) {
  if(err)
     {
      console.log('error to send mail',err);
     }
  else{
      console.log('Email sent: ' + info.response);
  }
  })
}

// const emailSend = function(sendmsg){
//     // console.log("this is for msg send",sendmsg);
//     return new Promise((resolve, reject) => {
//         var transporter = nodemailer.createTransport({
//             service: _config.EMAIL_SERVICE,
//             auth: {
//                 user: _config.SENDER_EMAIL,
//                 pass: _config.SENDER_PASSWORD
//             }
//         });
//         var maillist = [sendmsg.email, _config.FROM_EMAIL];
//         var mailOptions = {
//             from: _config.FROM_EMAIL,
//             to: maillist,
//             subject: 'Sending Email using saurabhProperty',
//             // html:'<p><strong>otp valid for 15 min</strong></p></br>'+'<p><strong style="color:red">your otp is</strong> : '+otp+'</p>'
//             html:sendmsg.html,
//         };
//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log("eroorrrr",error);
//                 reject(error,{err:"somthing error to send msg"})
//             }
//             else {
//                 console.log('Email sent: ',info.response);
//                 resolve(info.response,{msg:"successfully send msg"}) ;
//             }
//         });
//       });
// }

module.exports = {
    sendMail,
    // emailSend
}

