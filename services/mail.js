
const sendMail = function(sendmsg){

var transporter = nodemailer.createTransport({
                                            
    //its comment for heroku app deploye  
      // host: 'smtp.gmail.com',
      // port: 465,
      // secure: true,
      // auth: {
      //     user: 'youremai@gmail.com', // Your email id
      //     pass: 'pwd123' // Your password
      // },
      // tls: {
      //     // do not fail on invalid certs
      //     rejectUnauthorized: false
      // }
      service: 'gmail',
      auth: {
              user: process.env.SENDER_EMAIL,
              pass: process.env.SENDER_PASSWORD
              
         }
  });
  var maillist=[sendmsg.email, process.env.FROM_EMAIL];
  const mailOptions = {
      from: process.env.FROM_EMAIL, // sender address
      to: maillist, // list of receivers
      subject: 'Sending Email using saurabhProperty',
      text: 'you are success fully signup! in "" ',
      //   + mydata.email + "your password : "+req.body.pass,
      html:sendMsg.html
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
    sendMail,
    emailSend
}

