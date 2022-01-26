exports.getMe = (req, res) => {
  res.send({
    statusCode: 200,
    message: 'success',
    data: req.user,
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
