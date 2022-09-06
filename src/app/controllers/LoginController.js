class LoginController{

    //[GET] / login
    index(req, res){
        res.render('login')
    }

    //[POST] / login
    login(req, res){
        res.render('home')
    }
}

module.exports = new LoginController