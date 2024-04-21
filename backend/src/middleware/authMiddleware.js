// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const jwtSecret = 'kEUHA229H2NKiKJd92kckj2ks';

// Middleware function to authenticate user
exports.authenticateUser = async (req, res, next) => {
  try {
    // Get the token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    // Verify the token
    const decodedToken = jwt.verify(token, jwtSecret);

    // Find user by ID from the decoded token
    const user = await User.findByPk(decodedToken.userId);

    // Attach user object to request object
    req.user = user;

    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Middleware function to authorize user roles (if needed)
exports.authorizeUser = (req, res, next) => {
  // Implement authorization logic based on user roles if needed
  // Example: Check if user role has permission to access certain routes

  // If authorization fails, send a 403 Forbidden response
  res.status(403).json({ message: 'Forbidden' });
};
