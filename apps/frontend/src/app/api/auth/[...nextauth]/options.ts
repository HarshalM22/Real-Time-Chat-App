import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {client} from "@repo/db/client"
import GoogleProvider from "next-auth/providers/google";

import FacebookProvider from "next-auth/providers/facebook";


export const authOptions: NextAuthOptions = {
 
providers :[
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text", placeholder: "abc@gmail.com" },
          password: { label: "Password", type: "password" , placeholder:"********" }
        },
        async authorize(credentials, req) {
        const email = credentials?.email ;
        const password = credentials?.password ; 
        
        const user = await client.user.findUnique({
            where:{
                email:email,
                password:password 
            }
        })
          
    
          if (user) {
            return user ;
          } else {
            return null
          }

        }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "harshallll",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "harshalll"
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID|| "harshallll",
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "harshalll"
      })

],
callbacks: {
     // Define custom redirection logic for different scenarios
     async redirect({ url, baseUrl }) {
       url =  "/dashboard"
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      // If no valid redirect option is found, default to the base URL
      return baseUrl;
    },
    
},
session:{
    strategy:"jwt"
},
secret :process.env.NEXTAUTH_SECRET || "453532hjhj",
// pages: {
//     signIn: '/signin',
//   }

}