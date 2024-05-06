import type { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"

export const options: AuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 60 * 10 * 30
    },
    jwt: {
    maxAge: 60 * 10 * 30
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string
        // }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "Username:", type: "text" },
                password: { label: "Password:", type: "password" }
            },
            async authorize(credentials) {
                console.log('credentials:',credentials)
                const user = {id: '1', name: 'Admin', password: 'Admin_123'}

                if(credentials?.username === user.name && credentials?.password === user.password) {
                    console.log('hello a')
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}