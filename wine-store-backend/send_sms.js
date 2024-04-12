// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const accountSid = "ACb9c7cefeef6918db3ec3bfc8d109d4df";
const authToken = "5fed7de9c92ba06f20a54d5e2b7bf224";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
      body: 'Thank you for shopping at Exclusive Wine & Co. Your order is now confirmed and will be delievered to you at the earliest.',
     from: '+12512999298',
     to: '+923002075527'
   })
  .then(message => console.log(message.sid));
