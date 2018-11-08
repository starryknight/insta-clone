const User = require('../models/User')
const Idea = require('../models/Idea')

const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                res.send(user)
            })
    },
    show: (req, res) => {
        User.findById(req.params.userId, req.body)
            .then((updateUser) => {
                updateUser.save()
                res.send(updateUser)
            })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send(200)
            })
    },
    post: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send(200)
            })
    },
    create:(req,res)=>{
        User.create(req,body)
        .then((user)=>{
            res.send(user)

        })
    }
}
module.exports = userController