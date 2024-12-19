const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwtToken = require('jsonwebtoken');

exports.saveUser = async function (query) {
    const { username, email, password } = query;

    try {
        const emailCheck = await prisma.User.findUnique({
            where: { email: email },
        });

        if (emailCheck) {
            throw Error('Email address must be unique');
        }

        const hashPassword = await bcrypt.hash(password, 10); //hashing the password

        const userData = await prisma.User.create({
            data: {
                username: username,
                password: hashPassword,
                email: email,
            },
        });
        return userData;
    } catch (error) {
        console.log(error);
        throw Error('Error while Saving User Profile', error);
    }
};

exports.loginUser = async function (request, response) {
    const { email, password } = request;

    try {
        const userExistense = await prisma.User.findUnique({
            where: { email: email },
        });

        if (!userExistense) {
            return response.status(500).json({
                success: false,
                statusCode: 500,
                data: error,
                message: `User doesn't exist`,
            });
        }

        const matchPassword = await bcrypt.compare(password, userExistense.password);

        if (!matchPassword) {
            throw Error("Password didn't match.");
        }

        const token = jwtToken.sign(
            {
                id: userExistense.id,
                email: userExistense.email,
                username: userExistense.username,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: '24h',
            }
        );

        return { token };
    } catch (error) {
        return response.status(500).json({
            success: false,
            statusCode: 500,
            data: error,
            message: 'Internal Server Error',
        });
    }
};
