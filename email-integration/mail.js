var SparkPost = require('sparkpost');
var client = new SparkPost('f1803b529d9647aa05d0ad8e5a3c5aafeab4e958');

client.transmissions.send({
    options: {
      sandbox: false
    },
    content: {
      from: 'test@email.codingspaghetti.com',
      subject: 'Hello, World!',
      html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
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
