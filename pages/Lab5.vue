<template>
      <title>Labaratory work 5</title>
      <main class="container mx-auto flex flex-wrap gap-4 p-4 sm:p-8 md:p-12 bg-default_back text-white min-h-screen justify-center">
        <div class="bg-bright_back rounded-xl flex flex-col items-center space-y-2 m-2 p-4 w-80 h-96 border-dark_back border-2 hover:border-black transition-transform duration-300 ease hover:scale-105">
        <h1 class="text-center font-bold">Skin preview</h1>
        <select id="select" class="bg-dark_back hover:bg-default_back justify-center scale-110 p-1 rounded-xl" v-model="selectus">
          <option value="notch">Notch</option>
          <option value="alex">Alex</option>
          <option value="bro">Bro</option>
        </select>

        <div class="flex" v-if = "selectus == 'notch'">
          <notch />
        </div>

        <div class="flex" v-else-if = "selectus == 'alex'">
          <alex />
        </div>

        <div class="flex" v-else-if = "selectus == 'bro'">
          <bro />
        </div>
        </div>


        <div class="bg-bright_back rounded-xl flex flex-col items-center space-y-2 m-2 p-4 w-80 h-96 border-dark_back border-2 hover:border-black transition-transform duration-300 ease hover:scale-105">
        <h1 class="text-center font-bold ml-3 mr-3">Search the house by number</h1>
        <input name="filter" v-model = "search" placeholder="Enter the number" class="scale-75 transition-transform duration-300 ease hover:scale-95 bg-dark_back p-1 mb-24">
        <div v-for = "(image, index) in finding" :key="index">
          <img :src=image.image class="w-64 h-64 rounded-xl"> 
        </div>
        </div>
        
        <div class="bg-bright_back rounded-xl flex flex-col items-center space-y-2 m-2 p-4 w-80 h-96 border-dark_back border-2 hover:border-black transition-transform duration-300 ease hover:scale-105">
          <form class="flex flex-row gap-4">
            <div class="flex flex-col">
              <label for="frst" class="text-center mb-1">Put in the first number</label>
              <input name="frst" type="number" v-model="frst" class="scale-75 transition-transform hover:bg-default_back bg-dark_back p-1 w-full max-w-[90%]">
            </div>
            <div class="flex flex-col">
              <label for="scond" class="text-center mb-1">Put in the second number</label>
              <input name="scond" type="number" v-model="scond" class="scale-75 hover:bg-default_back bg-dark_back p-1 w-full max-w-[90%]">
            </div>
          </form>
          <div class="flex flex-row gap-4 w-full p-2 max-w-[90%]">
            <button @click="set_sign('*')" class="text-3xl pr-2 pl-2 border-2 border-dark_back hover:bg-very_bright_back transition-transform active:scale-95 rounded-xl">*</button>
            <button @click="set_sign('/')" class="text-3xl pr-2 pl-2 border-2 border-dark_back hover:bg-very_bright_back transition-transform active:scale-95 rounded-xl">/</button> 
            <button @click="set_sign('+')" class="text-3xl pr-2 pl-2 border-2 border-dark_back hover:bg-very_bright_back transition-transform active:scale-95 rounded-xl">+</button>
            <button @click="set_sign('-')" class="text-3xl pr-2 pl-2 border-2 border-dark_back hover:bg-very_bright_back transition-transform active:scale-95 rounded-xl">-</button>
          </div>
          <p class=" w-full max-w-[90%]"> Result is {{calc}} </p>
        </div>

      </main>
</template> 

<script setup lang="ts">
  import {ref, computed} from 'vue'
  interface forFinding {
    name:string,
    image:string,
  }

  const frst = ref<number>(0)
  const scond = ref<number>(0)
  const signn = ref<string>('+')

  const selectus = ref<string>('notch')
  const search = ref<string>('One')

  const filtering = reactive<forFinding[]>([
    {name:'One', image:'/img/dom1.jpg'},
    {name:'Two', image:'/img/dom2.jpg'},
    {name:'Three', image:'/img/dom3.jpg'},
    {name:'Four', image:'/img/dom4.jpg'},
    {name:'Five', image:'/img/dom5.jpg'},
    {name:'Six', image:'/img/dom6.jpg'},
  ])

  const finding = computed( ()=> {
    return filtering.filter(img => img.name == search.value) 
  })

  const set_sign = (op:string):void => {
    signn.value = op
  }

  const calc = computed(
    ():number=> {
      switch(signn.value) {
        case "*":
          return frst.value * scond.value
        case "+":
          return frst.value + scond.value  
        case "-":
          return frst.value - scond.value 
        case "/":
          try{
            return parseFloat((frst.value / scond.value).toFixed(1))
          }
          catch(error) {
            alert('error')
          }
          default:
            return 0
      }
    }
  )

</script>