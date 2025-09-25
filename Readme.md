- Created a Basic Express Server after installin express and dotenv and then started it on PORT 3000:
- Next we will install prisma ORM in our Project with command npm i prisma and run our cli with command npx prisma.
- Next we will initialize prisma with command **npx prisma init**
- Next we will install prisma Client to connect to our database. **npm install @prisma/client**

In db.config.js we have imported and used prisma/client in our project.

```JS
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
  log: ["query"],
});

export default prisma;
```

when importing prisma client make sure to import it from **import { PrismaClient } from "../generated/prisma";**
Else our autocompletion will not work.

Next we have initialized a new instance of our prisma client and inside that we have passed a log as query to log our queries in terminal.

# CRUD Operations

For this we create a user Model in our Schema.prisma file:

```JS
model User {
  id         Int      @id @default(autoincrement())
  firstName  String
  lastName   String
  email      String   @unique
  password   String?
  created_at DateTime @default(now())
}
```

Next we will run the command **_npx prisma migrate dev --name create_user_schema_** which we create our model in db. Here we have given the name of this migration as create_user_schema.

Now our Database is in Sync with our User Model and all the fields are created in Database.

We have created a API to regsiter our User in DataBase :

```JS
import prisma from "../DB/db.config.js";

const createUser = async (req, res) => {
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
```

[Prisma model queries](https://www.prisma.io/docs/orm/reference/prisma-client-reference#model-queries)

# Relationship in prisma :

To create a relation between two tables in postgres using prisma we have created one more model
Post and in that we have passed user id field as reference to the user.

```JS
model Post {
  id          Int    @id @default(autoincrement())
  user        User   @relation(fields: [user_id], references: [id])
  user_id     Int
  title       String
  description String
}
```

Ande we have also made our comment schema :

```JS
model Comment {
  id         String   @id @default(uuid())
  post       Post     @relation(fields: [post_id], references: [id], onDelete: Cascade)
  post_id    Int
  user       User     @relation(fields: [user_id], references: [id], onDelete: Cascade)
  user_id    Int
  comment    String
  created_at DateTime @default(now())
}
```

And in that we have passed our post and user model as relationship.
