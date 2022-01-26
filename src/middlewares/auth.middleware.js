const jwt = require("jsonwebtoken");
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const user = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);
      req.user = user;
      next();
    } else {
      res.send({
        statusCode: 400,
        message: "Please login",
      });
    }
  } catch (error) {
    res.send({
      statusCode: 400,
      message: "Please login",
    });
  }
};
module.exports = authMiddleware;
