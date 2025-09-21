import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400).send(" All the Fields are required");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    return res.status(400).send("Please Enter a Unique email");
  }

  const users = await prisma.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
  });

  return res.status(201).send(`User ${firstName} created successfully`);
};

export default createUser;
