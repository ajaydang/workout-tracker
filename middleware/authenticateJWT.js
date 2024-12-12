const jwt = require('jsonwebtoken');

exports.authenticateJWT = (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: Token is missing or invalid' });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: Token is missing' });
        }

        jwt.verify(token, process.env.JWT_LOGIN_ACCESS_TOKEN, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden: Invalid token' });
            }

            req.user = user; // Attach the decoded user information to the request
            next(); // Continue to the next middleware or route handler
        });
    } catch (error) {
        console.error('Error in authentication middleware:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
