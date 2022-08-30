module.exports = (req, res, next) => {
  if (!req.session.loggedIn) {
    console.log("User not logged in, redirecting to login page");
    res.redirect("/login");
  }

  next();
};
