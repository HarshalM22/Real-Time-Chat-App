import {z} from "zod" ;

export const UserSchema = z.object({
    username : z.string().min(3).max(20),
    password : z.string(),
    name : z.string(),
    email : z.string().min(3).max(30) 
})

export const signinSchema = z.object({
    username : z.string().min(6).max(20),
    password : z.string()
})

export const RoomSchema = z.object({
    roomName : z.string().min(3).max(20),
})