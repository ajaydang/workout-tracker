const userServices = require('../services/user.services');

exports.createUser = async function (req, res, next) {
    try {
        const user = await userServices.saveUser(req.body, res);
        res.json({
            status: 200,
            data: user,
            message: 'User is successfully created.',
        });
    } catch (error) {
        next(error);
    }
};

exports.getUser = async function (req, res, next) {
    try {
        const user = await userServices.loginUser(req.body, res);
        res.json({
            status: 200,
            data: user,
            message: 'User is successfully created.',
        });
    } catch (error) {
        next(error);
    }
};
