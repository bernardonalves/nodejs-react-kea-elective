const router = require('express').Router();
const User = require('../models/User');

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/users', async (req, res) => {
    if(req.session.loggedIn && req.session.isAdmin){
        const users = await User.query().select();
        res.json(users);
    }
    else{
        res.status(401).json({response: "You're not authorized to use this entrypoint."})
    }
});

router.post('/users/login', async (req, res) => {
    console.log(req.session)
    if(req.session.loggedIn && req.session.email){
        res.json({code: 406, response: "You're already logged in, you can't register again!"});
        return;
    }
    try{
        const users = await User.query().select().where({email: req.body.email}).limit(1);
        const user = users[0];
        if (user){
            bcrypt.compare(req.body.password, user.password, (error, response) => {
                if (error){
                    res.status(500).json({response: "Something when wrong. Try again"});
                }
                if (response === true){
                    req.session.email = user.email;
                    req.session.loggedIn = true;
                    res.json({ code:200, response:"OK", name: user.name, id: user.id });
                } else {
                    res.status(400).json({response: "Something went wrong. Try again"});
                }
            } );
        } 
        else res.status(400).json({ response: "Bad Request"});
    }
    catch (err){ throw(err); }
});

router.post('/users/register', (req, res) => {
    // TODO: Validate the input
    if(req.session.loggedIn && req.session.email){
        res.status(406).json({response: "You're already logged in, you can't register again!"});
        return;
    }
    console.log(req.body);
    let user = req.body;
    if(validateEmail(req.body.email) && req.body.name && req.body.password){

        bcrypt.hash(req.body.password, saltRounds, async(error, hash) => {
            if(error){
                res.status(500).json({response: "Something went wrong. Please try again later."})
            }
            user.password = hash
            try{ 
                const insertUser = await User.query().insert(user);
            }
            catch {
                res.json({ status: 500, response: "Unable to create account. Try again later."});
                return;
            }
            res.json({ status: 200, response: "OK", user_created: insertUser.username });
        });
    } else {
        res.status(400).json({ response: "Bad Request"});
    }
});

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = router;