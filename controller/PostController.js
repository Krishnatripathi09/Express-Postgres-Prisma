import prisma from "../DB/db.config.js";

export const createPost = async (req, res) => {
  const { user_id, title, description } = req.body;

  if (!user_id || !title || !description) {
    res.status(400).send(" All the Fields are required");
  }

  const newPost = await prisma.post.create({
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });

  return res.json({ status: 201, data: newPost, msg: "Post created" });
};

export const fetchPosts = async (req, res) => {
  const postId = req.params.id;
  const post = await prisma.post.findFirst({
    where: {
      id: Number(postId),
    },
  });
  console.log(post);
  return res.json({ status: 200, data: post });
};

export const fetchAllPosts = async (req, res) => {
  const posts = await prisma.post.findMany({});

  return res.json({ status: 200, data: posts });
};

export const deletePost = async (req, res) => {
  const postId = req.params.id;

  await prisma.post.delete({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 200, msg: "Post Deleted Successfully" });
};
