<template>
    <div class="flex flex-col justify-center p-4 mt-12">
        <button class = "rounded-xl bg-green-500 hover:bg-green-400 active:scale-95 transition-transform min-w-[250px] border-2 border-dark_back h-[60px] font-bold
        flex flex-row items-center justify-center text-black" @click="signIn('github', {callbackUrl: '/'})">
        <img src="C:\univer\frontend\lab1\public\img\git.png" class="mr-2 bg-transparent w-10 h-10">Sign in with GitHub 
        </button>
    </div>
</template> 

<script setup lang = 'ts'>

definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/Lab6',
    },
})

const {signIn} = useAuth()
</script>