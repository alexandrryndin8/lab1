<template>
  <header class = "header">
        <div class="icon">
            <img src="assets/images/icon.svg" class="w-16 h-16">
        </div>
        <div class="basis-1/4 ma-sm:basis-auto text-dark_back"></div>
    
    <nav :class="{'font-bold basis-1/2 flex flex-row items-center justify-end px-4 gap-4':!burger || burger,  
        'max-sm:basis-auto max-sm:absolute max-sm:top-full max-sm:w-screen max-sm:justify-center max-sm:flex-col max-sm:gap-0 max-sm:bg-dark_back max-sm::px-0':burger, 'max-sm:hidden': !burger}">
            <NuxtLink to="/" class = "navlinks max-sm:border-t-2 border-bright_back">Home</NuxtLink>
            <div class = "labs rounded-xl" @click = "switch_submenu">Labs
                <div class ="hover:bg-default_back flex flex-col absolute top-full w-30 text-center max-sm:relative max-sm:w-screen" v-show = "submenu">
                    <NuxtLink to="/Lab3" class = "lablinks max-sm:border-t-2 max-sm:border-b-2">Lab3</NuxtLink>
                    <NuxtLink to="/Lab4" class = "lablinks max-sm:border-b-2">Lab4</NuxtLink>
                    <NuxtLink to="/Lab5" class = "lablinks max-sm:border-b-2">Lab5</NuxtLink>
                    <NuxtLink to="/Lab6" class = "lablinks">Lab6</NuxtLink>
                </div>
            </div>
            <NuxtLink to="/login" class = "navlinks">LogIn</NuxtLink>
            <NuxtLink to="/logout" class = "navlinks">LogOut</NuxtLink>
        </nav>
            
        <div v-show="!burger" @click="switch_burger" class="burgerdiv">
          <span class="h-[3px] w-full bg-bright_back"></span>
          <span class="h-[3px] w-full bg-bright_back"></span>
          <span class="h-[3px] w-full bg-bright_back"></span>
        </div>

        <div v-show="burger" @click="switch_burger" class="burgerdiv">
          <span class="h-[3px] w-full bg-bright_back rotate-45 relative top-[9px]"></span>
          <span class="h-[3px] w-full bg-bright_back opacity-0"></span>
          <span class="h-[3px] w-full bg-bright_back relative bottom-3 rotate-[-45deg]"></span>
        </div>




  </header>

  <main class="p-5 flex bg-default_back min-h-screen text-white">
    <slot />
  </main>

  <footer class="footer static bottom-0">
    <a href="https://www.youtube.com/@MrBeast" target="_blank">
      <img src="assets/images/youtube.png"class="w-10 h-10 transition-transform duration-300 ease hover:scale-150 bg-transparent">
    </a>
    <a href="https://www.tiktok.com/@mrbeast" target="_blank">
      <img src="assets/images/tiktok.png" class="w-10 h-10 transition-transform duration-300 ease hover:scale-150 bg-transparent">
    </a>
    <a href="https://www.instagram.com/mrbeast" target="_blank">
      <img src="assets/images/insta.png" class="w-10 h-10 transition-transform duration-300 ease hover:scale-150 bg-transparent">
    </a>
  </footer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
useHead({   
    script: [
        {
            async:true, 
            src: 'https://www.googletagmanager.com/gtag/js?id=G-W2FKWNNNEK',
        },
        {
            innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config', 'G-W2FKWNNNEK');
            `,
            type: 'text/javascript',
        },
    ],
    __dangerouslyDisableSanitizersByTagID: {
        gtag: ['innerHTML'],
    },
});

const burger = ref<boolean>(false)
const submenu = ref<boolean>(false)

const switch_burger = ()=> {burger.value = !burger.value}
const switch_submenu = ()=> {submenu.value = !submenu.value}


</script>



