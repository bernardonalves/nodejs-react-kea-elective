const router = require('express').Router();

const User = require('../models/User');

router.get('/users', async (req, res) => {
    const users = await User.query().select();
    res.json(users);
});

router.post('/users', async (req, res) => {
    // TODO: Validate the input
    console.log(req.body.form);
    if(req.body.form.password){
        const user = await User.query().insert(req.body.form);
        res.json({ status: 200, response: "OK", user_created: user.username });
    } else {
        res.status(400).json({ response: "Bad Request"});
    }
});

router.put('/users', async (req, res) => {
    res.send('Update User')
});
router.delete('/users', async (req, res) => {
    res.send('Delete User')
});

router.post('/users/login', async (req, res) => {
    const user = await User.query().select().where({username: req.body.form.username});
    if (user.length > 0) res.status(200).json({ response:"OK", username: user[0].username });
    else res.status(400).json({ response: "Bad Request"})
});

module.exports = router;