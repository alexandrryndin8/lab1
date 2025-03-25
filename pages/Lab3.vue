<template>
    <title>Minecraft house tutorials</title>
    <main class="container mx-auto flex flex-wrap justify-center gap-4 p-4 sm:p-8 md:p-12 bg-default_back text-white min-h-screen">
    
    <div class="flex flex-col gap-2 border-dark_back border-1 bg-bright_back w-72 h-fit max-sm:h-auto items-center hover:border-black transition-transform duration-300 ease hover:scale-105 border-2 rounded-xl" v-for="(pic, index) in genpic" :key="index">
      <p class="text-white text-base font-bold pb-2 pt-2">{{pic.name}}</p>
      <img :src="pic.image" class="w-60 h-60 rounded-xl">
      <button id='btn' class="border-2 border-dark_back m-2 rounded-xl px-2 py-1 hover:bg-very_bright_back transition-transform active:scale-95" @click="video_switch(index)">{{ buttonText(index) }}tutorial</button>
      <video :src="pic.video" :class="{'w-60 h-60 mb-3 rounded-xl': video_hidden[index], 'hidden': !video_hidden[index]}" autoplay loop muted :poster="pic.image">
      </video>
    </div>
    </main>
</template>
  
  <script setup lang="ts">
  
  import { reactive } from 'vue'
  
  interface stking {
    name: string,
    image: string,
    video: string,
  }

  const genpic = reactive<stking[]>([
    {name:'Awesome house number one', image:'/img/dom1.jpg', video:'/vid/dom.mp4'},
    {name:'Awesome house number two', image:'/img/dom2.jpg', video:'/vid/dom.mp4'},
    {name:'Awesome house number three', image:'/img/dom3.jpg', video:'/vid/dom.mp4'},
    {name:'Awesome house number four', image:'/img/dom4.jpg', video:'/vid/dom.mp4'},
  ])

  const video_hidden = ref<boolean[]>(Array(genpic.length).fill(false))
  const video_switch = (index: number) => {
    video_hidden.value[index] = !video_hidden.value[index]
  }

  const buttonText = computed(() => (index: number) =>
  video_hidden.value[index] ? 'Close ' : 'Check '
);
  </script> 