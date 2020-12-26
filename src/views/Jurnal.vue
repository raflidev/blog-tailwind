<template>
  <div>
    <section class="dark:bg-gray-900 dark:text-white py-10 border-gray-900">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold">Jurnal</h1>
        <p class="text-medium mt-4 lg:w-1/2">Ini adalah halaman jurnal, kamu bisa pilih jurnal kamu lewat minat. Disini kita akan praktik membuat sesuatu.</p>
        <div class="flex w-full md:w-2/3 items-center flex-wrap mt-4">
          <select v-model="selected" class="bg-gray-300 px-4 py-2 w-2/3 rounded dark:text-black appearance-none">
            <option value="">--Pilih Minat--</option>
            <option value="frontend">Frontend</option>
            <option value="uiux">UI/UX</option>
          </select>        
        </div>
      </div>
    </section>
    <section id="feed" class="dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10 py-10 dark:text-white" v-if="jurnalSelected.length > 0">
            <div class="min-h-60 lg:w-96 w-full bg-blue-100 dark:bg-gray-800 p-3 rounded relative" v-for="jurnal in jurnalSelected" :key="jurnal.index">
              <div class="absolute top-4 left-3 z-10">
                <router-link :to="'/kategori/'+jurnal.kategori" class="bg-green-300 uppercase dark:bg-green-800 px-3 py-2 mr-3 rounded font-bold opacity-75 hover:opacity-100">{{jurnal.kategori}}</router-link>
              </div>
              <router-link :to="'/jurnal/'+jurnal.id+'/'+jurnal.judul">
                <img :src="jurnal.gambar" alt="" class="object-contain rounded hover:opacity-60">
              </router-link>
              <div class="px-4">
                <router-link :to="'/jurnal/'+jurnal.id+'/'+jurnal.judul">
                  <h2 class="font-bold my-3 text-xl hover:underline">{{jurnal.judul}}</h2>
                </router-link>
              </div>
              <div class="flex items-center px-4 pt-5 pb-3 border-t border-blue-200 dark:border-gray-900">
                <img src="https://raflidev.netlify.app/img/watermark.fa94af42.jpg" alt="" class="object-contain h-6 rounded-full ring-3 mr-4 ring-white">
                <span class="text-sm dark:text-white text-gray-700">Muhammad Rafli Ramadhan</span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10 py-10 dark:text-white" v-else>
            <div class="min-h-60 lg:w-96 w-full bg-blue-100 dark:bg-gray-800 p-3 rounded relative" v-for="jurnal in jurnal" :key="jurnal.index">
              <div class="absolute top-4 left-3 z-10">
                <div class="bg-green-300 uppercase dark:bg-green-800 px-3 py-2 mr-3 rounded font-bold">{{jurnal.kategori}}</div>
              </div>
              <router-link :to="'/jurnal/'+jurnal.id+'/'+jurnal.judul">
                <img :src="jurnal.gambar" alt="" class="object-contain rounded hover:opacity-60">
              </router-link>
              <div class="px-4">
                <router-link :to="'/jurnal/'+jurnal.id+'/'+jurnal.judul">
                  <h2 class="font-bold my-3 text-xl hover:underline">{{jurnal.judul}}</h2>
                </router-link>
              </div>
              <div class="flex items-center px-4 pt-5 pb-3 border-t border-blue-200 dark:border-gray-900">
                <img src="https://raflidev.netlify.app/img/watermark.fa94af42.jpg" alt="" class="object-contain h-6 rounded-full ring-3 mr-4 ring-white">
                <span class="text-sm dark:text-white text-gray-700">Muhammad Rafli Ramadhan</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      jurnal:[],
      selected:''
    }
  },
  mounted(){
   axios.get('/data.json').then(res => {
     this.jurnal = res.data.jurnal
   })
 },
 computed:{
   jurnalSelected(){
     return this.jurnal.filter(res => {
       return res.kategori == this.selected
     })
   }
 }
}
</script>

<style>

</style>