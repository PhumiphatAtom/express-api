exports.getMe = (req, res) => {
  res.send({
    firstName: "Atom",
    lastname: "AAA",
  });
};

exports.postMe = (req, res) => {
  const body = req.body;
  res.send({
    firstName: body.firstName,
    lastName: body.lastName,
    nickName: body.nickName,
  });
};

exports.postProfile = (req, res) => {
  const body = req.body;
  res.send({
    firstName: body.firstName,
    lastName: body.lastName,
    nickName: body.nickName,
    age: 25,
  });
};
