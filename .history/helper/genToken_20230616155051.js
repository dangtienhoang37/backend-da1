import { Jwt } from "jsonwebtoken"

let token = Jwt.sign({
    id: existingUser.IDU,
    role: existingUser.role
},
process.env.JWT_SECRET, {
    expiresIn: '1000s'
})