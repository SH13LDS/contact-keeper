const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied.' });
  }

  // If token
  try {
    // Verify token and pull from payload
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Set the user to the user from the payload
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid.' });
  }
};
