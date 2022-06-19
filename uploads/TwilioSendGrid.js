const API_KEY = '';

const sg = require('@sendgrid/mail');
sg.setApiKey(API_KEY);

const message = {
    to: 'adichatbot.ai@gmail.com',  //insert email from form over here
    from: 'climapmessage@gmail.com',
    subject: 'Your Musio Video!',
    text: 'insert URL here',//insert

};

sg.send(message).then(() => {
    console.log('message sent');
}).catch((error) => {
    console.log(error.response.body);
});