const express =require('express');
const router1=express.Router();
const userControl=require('../Controller/userControl');
const commanControl=require('../Controller/commanControl');
const authModule=require('../Middleware/authTokenVeri');
const adminControl=require('../Controller/adminControl')
const fakeMail=require('../services/fakeMail');


router1.get('/',userControl.home);
router1.post('/api/signup',userControl.Signup);
router1.post('/api/login',userControl.Login);
router1.get('/api/logout',userControl.Logout);
router1.post('/api/contactus',authModule.verifyToken,userControl.Contactus);
router1.post('/api/forgetpassword',userControl.ForgetPassword);
router1.post("/api/changpassword",userControl.ChangPassword);
// router1.post('/api/propertysubmit',userControl.PropertySubmit)
router1.post('/api/Upload',userControl.uplaod);
router1.get('/api/Fileget', userControl.fileget);
router1.post('/api/propertydetailsget?', userControl.PropertyDetailsGet);
router1.get('/api/propertydeleteAll',userControl.PropertyDeleteAll);
router1.get('/api/exmple',userControl.Exmple);
router1.get('/api/activateAccount/:email?',userControl.ActivateAccount); //this use params( /:email) and query(?)
router1.post('/api/searchemail',userControl.SearchEmail);
router1.post('/api/billingAddress',userControl.BillingAddress);
router1.post('/api/getAddress',userControl.GetAddress);
router1.post('/api/payme',userControl.Payme);
router1.post('/api/deleteUserData',authModule.verifyToken,userControl.DeleteUserData);
router1.post('/api/updateUserData',userControl.UpdateUserData);
router1.post('/api/deletePropertyData',userControl.DeletePropertyData);
router1.post('/api/updatePropertyData',userControl.UpdatePropertyData);
router1.post('/api/deleteContactData',userControl.DeleteContactData);
router1.post('/api/updateContactData',userControl.UpdateContactData);
router1.post('/api/deleteBillingData',userControl.DeleteBillingData);
router1.post('/api/updateBillingData',userControl.UpdateBillingData);
router1.post('/api/changePasswordOtp',userControl.changePasswordOtp);
router1.post('/api/verifyOtpPssword',userControl.verifyOtpPssword);

//admin api
router1.post('/api/admin',adminControl.Admin);

//commanControl api
router1.all('/api/GetDataby',commanControl.getdataby);
router1.all('/api/passchange',commanControl.passChange);
router1.post('/api/excelsheet',commanControl.excelSheet);
router1.post('/api/csvfile',commanControl.csvFile);
router1.post('/api/fakemail',fakeMail.FakeMail);

// router1.post('/api/formdib',userControl.Formdib);


module.exports=router1;
                                                                   