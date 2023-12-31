import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password } = req.body;
                // Add logic here to look up the user from the credentials supplied
                // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
                const user = await axios.post('http://localhost:8000/api/token/', {
                    username,
                    password
                });
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return {
                        refresh: user.data.refresh,
                        token: user.data.access,
                        role: 'adm' // MOCK for test
                    };
                }
                else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async jwt({ token, user, account, isNewUser, profile }) {
            token.roler = user === null || user === void 0 ? void 0 : user.role;
            return Object.assign(Object.assign({}, token), { accessToken: (user === null || user === void 0 ? void 0 : user.token) || (token === null || token === void 0 ? void 0 : token.accessToken) });
        },
        session({ session, user, token }) {
            console.log(token);
            session.role = 'roles';
            session.usiario = user;
            session.accessToken = token.accessToken;
            return session;
        }
    },
    secret: 'lopes',
});