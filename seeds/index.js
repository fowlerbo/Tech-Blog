const { User, Post, Comment } = require("../models");

const users = [
  {
    username: "Bryant",
    password: "password3",
  },

  {
    username: "Kevin",
    password: "shortfunnyguy",
  },

  {
    username: "Rock",
    password: "peoplesChamp",
  },

  {
    username: "Katrina",
    password: "theoneandonly",
  },
];

const posts = [
  {
    title: "why Jesus is cool",
    content: "He just is",
    user_id: 2,
  },

  {
    title: "hey stranger",
    content: "pretty cool post, huh?",
    user_id: 1,
  },

  {
    title: "im hungry and tired",
    content: "i wonder if this will be awesome",
    user_id: 3,
  },
];

const comments = [
  {
    content: "this is a Great stream",
    user_id: 2,
    post_id: 1,
  },

  {
    content: "im hungry and sleepy",
    user_id: 3,
    post_id: 1,
  },
];

const plantSeeds = async () => {
  await User.bulkCreate(users, { individualHooks: true });
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);
};

plantSeeds();
