import user from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Named export function to register
export const registerUser = async (req, res) => {

  const { name, email, password } = req.body;
  const old_user = await user.findOne({ email });

  if (old_user) 
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new user({ name, email, password: hashedPassword });
  await newUser.save();
  res.status(201).json({ message: "User registered successfully" });
};


//named export function to login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await user.findOne({ email });
  if (!findUser) 
    return res.status(404).json({ message: "User not found" });

  const matchFound = await bcrypt.compare(password, findUser.password);

  if (!matchFound) 
    return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: findUser._id }, "very-secret", { expiresIn: '1d' });
  res.json({ token });
};


