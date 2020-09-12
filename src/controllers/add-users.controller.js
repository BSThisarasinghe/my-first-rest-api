function addUsers(req, res) {
    return res.status(201).json({
        message: 'Handling post'
    })
}

module.exports = {
    addUsers
}