const getMe = (req, res) => {
  res.send({
    firstName: "Atom",
    lastname: "AAA",
  });
};

const postMe = (req, res) => {
  const body = req.body;
  res.send({
    firstName: body.firstName,
    lastName: body.lastName,
    nickName: body.nickName,
  });
};

const postProfile = (req, res) => {
  const body = req.body;
  res.send({
    firstName: body.firstName,
    lastName: body.lastName,
    nickName: body.nickName,
    age: 25,
  });
};

module.exports = {
  // path 1
  getMe,
  postMe,
  // path 2
  postProfile,
};
