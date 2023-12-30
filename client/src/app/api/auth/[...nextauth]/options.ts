import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: 'https://accounts.google.com/o/oauth2/auth?response_type=code&hd=ucsd.edu'
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            console.log("User: ", user);
            console.log("Account: ", account);

            return user;
        }
    }
}