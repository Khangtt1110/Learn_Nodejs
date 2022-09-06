const User = require('../models/Users')

class SiteController {

    //[GET] / login
    index(req, res) {
        User.find({}, async (err, users) => {
            !err ? await res.json(users) : res.status(400).json({ err: 'ERRoR!!' })
        })
    }

    //[POST] / login
    search(req, res) {
        res.render('search')
    }

    //[GET] / not found
    notFound(req, res) {
        res.render('404')
    }
}

module.exports = new SiteController