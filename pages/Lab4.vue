<template>
    <title>Minecraft music discs</title>
    <main class="container mx-auto flex flex-wrap justify-center gap-4 p-12 bg-default_back text-white">
    <div class="flex flex-col gap-2 border-dark_back border-1 bg-bright_back w-auto h-fit max-sm:h-auto items-center hover:border-black ransition-transform duration-300 ease hover:scale-105 border-2 rounded-xl" v-for="(disc, index) in gendisc" :key="index">
      <img :src="disc.image" class="w-auto h-auto p-2">
      <button class="transition-transform active:scale-95 pb-2" @click='player_switch(index)'>
        <img :src="player_hidden[index] ? '/img/cross.png' : '/img/play.png'" class="w-10 h-10">
      </button>
      <audio controls :src="disc.track" :class="{'': !player_hidden[index], 'hidden': !player_hidden[index]}"></audio>
    </div>
    </main>
</template>
  
  <script setup lang="ts">
  interface disc {
    image: string,
    track: string,
  }

  const gendisc = reactive<disc[]> ([
    {image: '/img/disk11.webp', track: '/aud/disk11.mp3'},
    {image: '/img/diskos.webp', track: '/aud/diskos.mp3'},
    {image: '/img/diskw.webp', track: '/aud/diskw.mp3'},
  ])

  const player_hidden = ref<boolean[]>(Array(gendisc.length).fill(false))
  const player_switch = (index: number) => {
    player_hidden.value[index] = !player_hidden.value[index]
  }

  </script> 