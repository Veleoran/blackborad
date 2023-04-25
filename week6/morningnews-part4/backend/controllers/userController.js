const uid2 = require('uid2');

const generateToken = () => {
  return uid2(32);
};

const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};


exports.canBookmark = async (req, res) => {
    try {
      const token = req.params.token;
  
      if (!token) {
        res.status(400).json({ result: false, error: 'Missing token' });
        return;
      }
  
      
      const user = await User.findOne({ token });
  
      if (!user) {
        res.status(400).json({ result: false, error: 'User not found' });
        return;
      }
  
      res.json({ result: true, canBookmark: user.canBookmark });
    } catch (error) {
      res.status(500).json({ result: false, error });
    }
  };
  
