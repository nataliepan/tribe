import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import graphqlHTTP from 'express-graphql';
import graphqlSessionSchema from './src/schemas/sessionSchema';
import graphqlUserSchema from './src/schemas/userSchema';
import graphqlEventSchema from './src/schemas/eventSchema';
import graphqlPersonSchema from './src/schemas/personSchema';

import mongoose from 'mongoose';
import User from './src/models/person';
import Event from './src/models/event';




import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';
import  cors  from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;


var SparkPost = require('sparkpost');
var client = new SparkPost('f1803b529d9647aa05d0ad8e5a3c5aafeab4e958'); // email secret key



//FIXES CORS ERROR
var whitelist = [
    'http://localhost:8080',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

app.use(bodyParser.json({ type: '*/*' }));

(async() => {
	try {
		const sessionSchema = graphqlSessionSchema(); // the default session schema
		const userSchema = graphqlUserSchema(); // the custom user schema
    const eventSchema = graphqlEventSchema(); // the custom event schema
    const personSchema = graphqlPersonSchema();// the custom person schema

		await mongoose.connect('mongodb://ajay:ajay@ds133271.mlab.com:33271/tribe_sfo');
		console.log('connected');

  app.use(cors(corsOptions));

    app.use('/graphqlSessions', graphqlHTTP(req => ({
			schema : sessionSchema,
			graphiql: true
		})));


    app.use('/graphqlUsers', graphqlHTTP(req => ({
			schema : userSchema,
			graphiql: true
		})));


    app.use('/graphqlEvents', graphqlHTTP(req => ({
    	schema : eventSchema,
    	graphiql: true
    })));

    app.use('/graphqlPersons', graphqlHTTP(req => ({
    	schema : personSchema,
    	graphiql: true
    })));

    app.post('/insertEvent', function(req,res){

     console.log(req.body);

     // Creating one user.
    var toSave = new Event (req.body);

    // Saving it to the database.
  toSave.save(function (err) {if (err) console.log ('Error on save!')});
     res.send('thank you');

    });




    app.post('/triggerEmail', function(req,res){

     console.log(req.body);

     client.transmissions.send({
         options: {
           sandbox: false
         },
         content: {
           from: 'test@email.codingspaghetti.com',
           subject: 'Thank you from team tribe',
           // html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
           html: `<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width"> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <title>Simple Transactional Email</title> <style type="text/css"> /* ------------------------------------- INLINED WITH https://putsmail.com/inliner ------------------------------------- */ /* ------------------------------------- RESPONSIVE AND MOBILE FRIENDLY STYLES ------------------------------------- */ @media only screen and (max-width: 620px) { table[class=body] h1 { font-size: 28px !important; margin-bottom: 10px !important; } table[class=body] p, table[class=body] ul, table[class=body] ol, table[class=body] td, table[class=body] span, table[class=body] a { font-size: 16px !important; } table[class=body] .wrapper, table[class=body] .article { padding: 10px !important; } table[class=body] .content { padding: 0 !important; } table[class=body] .container { padding: 0 !important; width: 100% !important; } table[class=body] .main { border-left-width: 0 !important; border-radius: 0 !important; border-right-width: 0 !important; } table[class=body] .btn table { width: 100% !important; } table[class=body] .btn a { width: 100% !important; } table[class=body] .img-responsive { height: auto !important; max-width: 100% !important; width: auto !important; }} /* ------------------------------------- PRESERVE THESE STYLES IN THE HEAD ------------------------------------- */ @media all { .ExternalClass { width: 100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } .apple-link a { color: inherit !important; font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; text-decoration: none !important; } .btn-primary table td:hover { background-color: #34495e !important; } .btn-primary a:hover { background-color: #34495e !important; border-color: #34495e !important; } } </style> </head> <body class="" style="background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;"><table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;"><tr> <td style="font-family:sans-serif;font-size:14px;vertical-align:top;">&nbsp;</td> <td class="container" style="font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;"> <div class="content" style="box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;"> <!-- START CENTERED WHITE CONTAINER --> <span class="preheader" style="color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;">This is preheader text. Some clients will show this text as a preview.</span> <table class="main" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;"> <!-- START MAIN CONTENT AREA --> <tr> <td class="wrapper" style="font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;"> <tr> <td style="font-family:sans-serif;font-size:14px;vertical-align:top;"><p style="font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;"> <div align="center"> <img src="https://dl.dropboxusercontent.com/s/0wyillrvkqcd9qg/Artboard%204.png?dl=0" style="width:50px;height:50px;"></div> THANK YOU!</p> <p style="font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;">You've just Subscribed to Angel Hack SF!</p> <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;"> <tbody> <tr> <td align="left" style="font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;"> <p style="font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;">Would you like an email reminder a day before the event?</p> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;"> <tbody> <tr> <td style="font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:#3498db;"> <a href="http://htmlemail.io" target="_blank" style="text-decoration:underline;background-color:#ffffff;border:solid 1px #3498db;border-radius:5px;box-sizing:border-box;color:#3498db;cursor:pointer;display:inline-block;font-size:14px;font-weight:bold;margin:0;padding:12px 25px;text-decoration:none;text-transform:capitalize;background-color:#3498db;border-color:#3498db;color:#ffffff;">YES! SEND REMINDER</a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table>  </td> </tr> </table> </td> </tr> <!-- END MAIN CONTENT AREA --> </table> <!-- START FOOTER --> <div class="footer" style="clear:both;padding-top:10px;text-align:center;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;"> <tr> <td class="content-block" style="font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;"> <span class="apple-link" style="color:#999999;font-size:12px;text-align:center;">Urban Tribuu, San Francisco CA </span> <br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif" style="color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;">Unsubscribe</a>. </td> </tr> <tr> <td class="content-block powered-by" style="font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;"> Powered by <a href="http://htmlemail.io" style="color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;">HTMLemail</a>. </td> </tr> </table> </div> <!-- END FOOTER --> <!-- END CENTERED WHITE CONTAINER --> </div> </td> <td style="font-family:sans-serif;font-size:14px;vertical-align:top;">&nbsp;</td> </tr> </table> </body> </html>`

         },
         recipients: [
           {address: 'srinivasan.1691@gmail.com'}
         ]
       })
       .then(data => {
         console.log('Woohoo! You just sent your first mailing!');
         console.log(data);
       })
       .catch(err => {
         console.log('Whoops! Something went wrong');
         console.log(err);
       });

     res.send('thank you');

    });


		const jsonSchema = await graphql(sessionSchema, introspectionQuery); // done to create  schema json file for reference
		await fs.writeFile('src/data/schema.json', JSON.stringify(jsonSchema, null, 2), err => {
			if (err) throw err;

			console.log('schema.json created successfully.');
		});

		app.listen(PORT, () => {
			console.info('==> Listening on port X', PORT);
		});
	} catch (err) {
		console.log(err);
	}
})();
