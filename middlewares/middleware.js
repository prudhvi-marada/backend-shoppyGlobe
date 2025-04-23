import jwt from 'jsonwebtoken';


// middle function to verify the user has an access to cart or not by token authentication
const verifyAuthor = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });
  
    try {
      const verified = jwt.verify(token, "very-secret");
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };

export default verifyAuthor;