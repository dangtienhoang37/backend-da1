import  Jwt  from "jsonwebtoken";

const createAccessToken = (existingUser) => {
    return Jwt.sign({
        id: existingUser.IDU,
        role: existingUser.role
    },
        process.env.JWT_SECRET, {
        expiresIn: '60s'
    })

}
const createRefreshToken = (input) => {
    return Jwt.sign({
        id: existingUser.IDU,
        role: existingUser.role
    },
        process.env.JWT_REFRESH, {
        expiresIn: '1d'
    })
}

export default{
    createAccessToken,
    createRefreshToken
}