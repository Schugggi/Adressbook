import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUBID,
      clientSecret: process.env.GITHUBSECRET,
    }),
  ], 
  secret: "+iyVx8UIYdMWcaS8VIRdGfg/4jB6OTYXXVnNEy8/yZc=",
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },

  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
    generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString("hex")
    }, 
  },
}

export default NextAuth(authOptions)