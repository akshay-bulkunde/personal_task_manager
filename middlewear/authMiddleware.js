const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); 

  if (!token) {
    return res.status(401).json({ error: 'Access denied, no token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded; 
    console.log('User decoded from token:', req.user); 
    next();
  } catch (error) {
    return res.status(400).json({ error: 'Invalid or expired token.' });
  }
};
