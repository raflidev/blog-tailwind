<template>
  <section>
    <div class="relative">
      <div class="w-full opacity-50 h-40 lg:h-42 bg-blue-500 object-contain bg-cover bg-center" :style="{backgroundImage:'url('+jurnal.gambar+')'}">
      </div>
      <div class="absolute top-1/2 text-center w-full">
        <p class="text-xl lg:text-4xl font-bold text-center">
          {{$route.params.jurnal_id}}
        </p>
      </div>
    </div>

    <div class="flex justify-center dark:bg-gray-800">
      <div class="w-3/4 text-lg dark:text-white py-6">
          <div class="mb-3" v-html="jurnal.artikel"></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
    jurnal: []
  }
},
mounted(){
  axios.get("/data.json").then(res => {
    this.jurnal = res.data.jurnal[this.$route.params.id]
  })
}
}
</script>

<style>

</style>