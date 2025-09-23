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

export const updateUser = async (req, res) => {
  const userId = req.params.id;

  const { firstName, lastName, password } = req.body;

  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      firstName,
      lastName,
    },
  });

  return res.status(200).send(`User ${firstName} Updated Successfully`);
};

export const fetchUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      firstName: true,
      lastName: true,
      email: true,
    },
  });

  return res.json({ status: 200, data: users });
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, msg: "User Deleted Successfully" });
};
