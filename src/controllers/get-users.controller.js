const models = require('../models');

function getUsers(req, res) {
    // return res.status(200).json({
    //     message: 'Handling get'
    // })

    models.users.findAll().then(result => {
        res.status(200).json({
            users: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Something Went Wrong',
            error: error
        });
    });
}

module.exports = {
    getUsers
}