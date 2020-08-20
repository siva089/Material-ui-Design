const functions = require('firebase-functions');
const config=functions.config()
const admin=require("firebase-admin")
const nodemailer=require("nodemailer")
const cors=require("cors")({origin:true})
admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const transporter=nodemailer.createTransport({service:"Gmail",auth:{user:config.user.email,pass:config.user.password}})

let mailOptions={
    from:'Siva',
    to:'sivasankarreddyt089@gmail.com',
    subject:"Texting node mailer",
    text:"Test successfully"

}

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    transporter.sendMail(mailOptions,(err)=>{
        if(err){
            response.send(err)
        }
        else{
            response.send("Message sent successfully")
        }
        }) 
  })  

});
