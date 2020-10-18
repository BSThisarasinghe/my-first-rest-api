const models = require('../models');

function addProducts(req, res) {

    const product = {
        product_name: req.body.product_name,
        status: 0
    };

    models.products.create(product).then(result => {
        res.status(201).json({
            message: 'Product created',
            product: {
                id: result.id,
                product_name: result.product_name,
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
    addProducts
}