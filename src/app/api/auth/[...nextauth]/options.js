import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          });
  
          const user = await res.json();
  
          if (res.ok && user) {
            console.log(user)
            return user;
          } else {
            throw new Error(user.error || 'Error al iniciar sesión');
          }
        },
      }),
    ],
    pages: {
      signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
      async session({ session, token }) {
        console.log('session session:', session)
        console.log('session token:', token)
        // if (token?.id) {
        //   session.user.id = token.id;
        // }
        return {
          ...session, 
          user:{
            ...session.user,
            userId: token.id,
            token: token.token
          }
        };
      },
      async jwt({ token, user }) {
        console.log('jwt token:', token)
        console.log('jwt user:', user)
        if (user) {
          token.id = user.userId;
          token.token= user.token
        }
        return token;
      },
    },
}