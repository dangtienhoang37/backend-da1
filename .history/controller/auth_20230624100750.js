import  Jwt  from "jsonwebtoken";

const createAccessToken = (existingUser) => {
    return Jwt.sign({
        id: existingUser.IDU ??existingUser.id,
        role: existingUser.role
    },
        process.env.JWT_SECRET, {
        expiresIn: '60m'
    })

}
const createRefreshToken = (existingUser) => {
    return Jwt.sign({
        id: existingUser.IDU ??existingUser.id,
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