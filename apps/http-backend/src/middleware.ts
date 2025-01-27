import { JWT_SECRET } from "@repo/backend-common/config";
import { NextFunction,Request,Response } from "express";
import  jwt, { decode, JwtPayload }  from "jsonwebtoken";



export function middleware(req : Request, res : Response,next : NextFunction){
    const token = req.headers["authorization"] ?? "" ;
    
    const decodedInfo = jwt.verify(token , JWT_SECRET)
    if(decodedInfo ){
        // @ts-ignore
        req.userId = decodedInfo.userId ;
        next();
    }else{
        res.status(403).json({
            message : "Unauthorized"
        })
    }

}