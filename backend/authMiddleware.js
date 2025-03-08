const { auth } = require("./firebaseConfig");

async function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split("Bearer ")[1];

    if(!token){
        return res.status(401).json({error: "Unauthorized: No token provided"});
    }

    try{
        const decodedToken = await auth.verifyToken(token);
        req.user = decodedToken;
        next();
    }
    catch(error){
        res.status(401).json({error: "unauthorized: Invalid Toekn"});
    }
}

module.exports = verifyToken;