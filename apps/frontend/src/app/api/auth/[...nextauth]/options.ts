import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {client} from "@repo/db/client"
import GoogleProvider from "next-auth/providers/google";


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
      })

],
callbacks: {
    
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token}) {
      return token
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