const getMe = (req, res) => {
  res.send({
    firstName: "Atom",
    lastname: "AAA",
  });
};

const PostMe = (req, res) => {
  const body = req.body;
  res.send({
    firstName: body.firstName,
    lastName: body.lastName,
    nickName: body.nickName,
  });
};

const PostProfile = (req, res) => {
  const body = req.body;
  res.send({
    firstName: body.firstName,
    lastName: body.lastName,
    nickName: body.nickName,
    age: 25,
  });
};

module.exports = {
  // past 1
  getMe,
  PostMe,

  // past 2
  PostProfile,
};
