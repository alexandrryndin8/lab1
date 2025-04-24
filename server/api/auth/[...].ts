import {NuxtAuthHandler} from '#auth'
import GithubProvider from 'next-auth/providers/github'

const runtimeConfig = useRuntimeConfig()
console.log('GitHub Client ID:', runtimeConfig.public.GITHUB_CLIENT_ID)
console.log('GitHub Redirect URI:', runtimeConfig.public.GITHUB_REDIRECT_URI)

export default NuxtAuthHandler({
    
    pages: {
        signIn: '/login',
    },

    providers: [
        GithubProvider.default({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
})

