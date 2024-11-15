const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

exports.saveUser = async function (query) {
  const { username, email, password } = query;

  try {
    const emailCheck = await prisma.User.findUnique({
      where: { email: email },
    });

    if (emailCheck) {
      throw Error("Email address must be unique");
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
    throw Error("Error while Saving User Profile", error);
  }
};