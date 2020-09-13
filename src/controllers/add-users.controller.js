const models = require('../models');

function addUsers(req, res) {
    // return res.status(201).json({
    //     message: 'Handling post',
    //     user: req.body.name
    // })
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        status: 0
    };

    models.users.create(user).then(result => {
        res.status(201).json({
            message: 'User created',
            user: {
                id: result.id,
                name: result.name,
                email: result.email,
                status: result.status
            }
        })
    }).catch(error => {
        res.status(500).json({
            message: 'Something Went Wrong',
            error: error
        });
    });
}

module.exports = {
    addUsers
}