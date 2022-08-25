const User = require('../models/User')

const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
    const { username, password } = req.body
    const newUser = new User({ username, password })
    await newUser.save()

    const token = jwt.sign({ _id: newUser._id }, 'secretKey')
    res.status(200).json({ token })
}

const signIn = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) return res.status(401).send('The email doesnt exists')

    if (user.password !== password) return res.status(401).send('Wrong Password')

    const token = jwt.sign({ _id: user._id }, 'secretkey');

    return res.status(200).json({ token });
}

module.exports = { signUp, signIn }