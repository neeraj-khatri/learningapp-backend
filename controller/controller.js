const User = require('../models/user');

async function testHandler(req, res) {
   return res.status(400).json({ message: "test here" });
}

async function signupHandler(req, res) {
console.log(req.body);
const { name,email,username,password } = req.body;
console.log(name,email,username,password);
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  try {
    const newUser = new User({ 
        name,
        email,
        username,
        password
     }); 
    await newUser.save();
    res.json({ message: "Name saved to MongoDB", user: newUser });
  } catch (err) {
    console.error("Error saving to DB:", err);
    res.status(500).json({ message: "Error saving to MongoDB" });
  }


}

module.exports = {
    signupHandler,
    testHandler
}