export default function AuthRoutes(authService, bcrypt) {

    async function loginRoute(req, res){

        res.render('login')
    }

    async function registerRoute(req, res){

        res.render('register')
    }

    return{
        loginRoute,
        registerRoute
    }
}
