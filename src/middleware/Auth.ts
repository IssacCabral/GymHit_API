import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export default async function auth(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers['authorization']

    if(authToken === undefined || authToken === "Bearer"){
        return response.status(403).json("Token not provided")
    }

    const token = authToken.split(' ')[1]
    
    jwt.verify(token, process.env.SECRET_JWT_KEY, (error, data) => {
        if(error) return response.status(401).json("Invalid token")
        request.admin = data as any
        next()
    })
}