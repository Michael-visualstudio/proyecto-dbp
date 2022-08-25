const User = require('../models/User')

const jwt = require('jsonwebtoken')

const getUser = (req,res)=>{
    res.send('User')
}

const signUp = (req, res) => {
    const { username, password } = req.body
    const newUser = new User({ username, password })
    newUser.save()

    const token = jwt.sign({ _id: newUser._id }, 'secretKey')
    res.status(200).json({ token })
}

const signIn = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) return res.status(401).send('The user doesnt exists')

    if (user.password !== password) return res.status(401).send('Wrong Password')

    const token = jwt.sign({ _id: user._id }, 'secretKey');

    return res.status(200).json({ token });
}

module.exports = { getUser, signUp, signIn }