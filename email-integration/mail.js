var SparkPost = require('sparkpost');
var client = new SparkPost('f1803b529d9647aa05d0ad8e5a3c5aafeab4e958');

client.transmissions.send({
    options: {
      sandbox: false
    },
    content: {
      from: 'test@email.codingspaghetti.com',
      subject: 'MY WORLD IS IN TEST!',
      // html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
      html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>My First Email</title> <style type="text/css"> @media(max-width:480px){ table[class=main_table],table[class=layout_table]{width:300px !important;} table[class=layout_table] tbody tr td.header_image img{width:300px !important;height:auto !important;} } a{color:#37aadc} </style> </head> <body> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td align="center" valign="top"> <!-- M A I N T A B L E S T A R T --> <table border="0" cellpadding="0" cellspacing="0" class="main_table" width="600"> <tbody> <tr> <td> <!-- L A Y O U T _ T A B L E S T A R T --> <table border="0" cellpadding="0" cellspacing="0" class="layout_table" style="border-collapse:collapse;border:1px solid #CCCCCC;" width="100%" > <tbody> <!-- H E A D E R R O W S T A R T --> <tr> <td align="left" class="header_image"><img height="120" src="https://www.sparkpost.com/sites/default/files/pictures/email/header-generic-600x120.png" width="600" style="border:0;display:block;"></td> </tr> <!-- H E A D E R R O W E N D --> <tr><td style="font-size:13px;line-height:13px;margin:0;padding:0;">&nbsp;</td></tr> <!-- B O D Y R O W S T A R T --> <tr> <td align="center" valign="top"> <table align="center" border="0" cellpadding="0" cellspacing="0" width="85%"> <tbody> <tr> <td align="center"> <p style="font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:22px;"> This is my first test message sent from SparkPost.com!<br> WooHoo!!! </p> </td> </tr> </tbody> </table> </td> </tr> <!-- B O D Y R O W E N D --> <tr><td style="font-size:13px;line-height:13px;margin:0;padding:0;">&nbsp;</td></tr> <!-- F O O T E R R O W S T A R T --> <tr> <td align="left" class="header_image"><a href="https://www.sparkpost.com/"><img height="67" src="https://www.sparkpost.com/sites/default/files/pictures/email/footer-generic-600x67.png" width="600" style="border:0;display:block;" alt="Sent via SparkPost"></a></td> </tr> <!-- F O O T E R R O W E N D --> </tbody> </table> <!-- L A Y O U T _ T A B L E E N D --> </td> </tr> </tbody> </table> <!-- M A I N _ T A B L E E N D --> </td> </tr> </tbody> </table> </body> </html>`
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
