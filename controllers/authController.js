const jwt = require('jsonwebtoken')

const authController = {
    authToken: async function(req, res, next){
        const token = req.header('authorization-token');
        if(!token){
            res.status(401).send('Access Denied')
        }
        
        try {
            const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
            req.user = userVerified
            await next()
        } catch (error) {
            res.status(401).send('Access Denied')
        }
        
    },

    authAdmin: async function(req, res, next){
        if(req.user.admin){
            res.send('este dado so deve ser visto pelo admin')
        }else{
            next()
        }
    },
    
    authNormalUser: async function(req, res){
        await res.send('testando')

    }
}

module.exports = authController