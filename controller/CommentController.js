import prisma from "../DB/db.config.js";

export const createComment = async (req, res) => {
  const { user_id, title, description } = req.body;

  if (!user_id || !title || !description) {
    res.status(400).send(" All the Fields are required");
  }

  const newComment = await prisma.comment.create({
    data: {
      user_id: Number(user_id),
      post_id_id: Number(post_id),
      comment,
    },
  });

  return res.json({
    status: 201,
    data: newComment,
    msg: "Comment created Successfully",
  });
};

export const fetchComments = async (req, res) => {
  const commentId = req.params.id;
  const comment = await prisma.comment.findFirst({
    where: {
      id: Number(commentId),
    },
  });

  return res.json({ status: 200, data: comment });
};

export const fetchAllComments = async (req, res) => {
  const posts = await prisma.comment.findMany({});

  return res.json({ status: 200, data: posts });
};

export const deleteComment = async (req, res) => {
  const postId = req.params.id;

  await prisma.comment.delete({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 200, msg: "Comment Deleted Successfully" });
};
