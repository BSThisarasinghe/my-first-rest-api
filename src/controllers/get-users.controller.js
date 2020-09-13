const models = require('../models');

function getUsers(req, res) {
    return res.status(200).json({
        message: 'Handling get'
    })
}

module.exports = {
    getUsers
}