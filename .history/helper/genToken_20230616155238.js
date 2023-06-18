import  Jwt  from "jsonwebtoken"
import User from "../model/User.js"

let token = Jwt.sign({
    id: existingUser.IDU,
    role: existingUser.role
},
process.env.JWT_SECRET, {
    expiresIn: '1000s'
})
export default token