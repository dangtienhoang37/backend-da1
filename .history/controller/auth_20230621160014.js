import Jwt from "jsonwebtoken";
const auth = {
    createAccessToken: (input) => {
        return Jwt.sign({
            id: existingUser.IDU,
            role: existingUser.role
        },
            process.env.JWT_SECRET, {
            expiresIn: '60s'
        })

    },
    createRefreshToken: (input) => {
        return Jwt.sign({
            id: existingUser.IDU,
            role: existingUser.role
        },
            process.env.JWT_REFRESH, {
            expiresIn: '1d'
        })
    }
}


export default auth