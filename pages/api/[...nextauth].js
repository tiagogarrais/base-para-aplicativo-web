import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"

export const authOptions = {
  // Configure one or more authentication providers

  providers [
          EmailProvider({
            server: {
              host: process.env.EMAIL_SERVER_HOST,
              port: process.env.EMAIL_SERVER_PORT,
              auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
              },
            },
            from: process.env.EMAIL_FROM,
            maxAge: 45 * 24 * 60 * 60, // How long email links are valid for (45 days)
          })

    // ...add more providers here
  ]
}

export default NextAuth(authOptions)