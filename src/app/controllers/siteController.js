class SiteController{

    //[GET] / login
    index(req, res){
        res.render('home')
    }

    //[POST] / login
    search(req, res){
        res.render('search')
    }

    //[GET] / not found
    notFound(req, res){
        res.render('404')
    }
}

module.exports = new SiteController