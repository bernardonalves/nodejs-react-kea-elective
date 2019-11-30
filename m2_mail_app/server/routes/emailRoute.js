const router = require('express').Router();
const Email = require('../models/Email');

router.post('/email/send', async (req, res) => {
    console.log(req.body)
    if (!req.session.loggedIn || !req.session.email){
        res.status(403).json({response: "Unauthorized to use this api endpoint."})
    }
    if (req.body.subject && req.body.content && validateEmail(req.body.recipient)){
        console.log(req.session.email, req.body)
        try{ 
            let email = {
                sender_email: req.session.email,
                recipient_email: req.body.recipient,
                subject: req.body.subject,
                content: req.body.content
            }
            const sendEmail = await Email.query().insert(email);
        }
        catch {
            res.json({ status: 500, response: "Unable to send email. Try again later."});
            return;
        }
        res.status(200).json({response: "Email Sent Successfully!"})
    } 
    else res.status(400).json({ response: "Bad Request"});
});

router.get('/email/fetch', async (req,res) => {
    if(req.session.loggedIn && req.session.email){
        const emails = await Email.query().select().where({sender_email: req.session.email});
        console.log(emails);
        res.json(emails);
    }
    else{
        res.json({response: "You're not authorized to use this entrypoint."})
    }

});

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = router;