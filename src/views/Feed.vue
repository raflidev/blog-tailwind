<template>
  <div>
    <Landing/>
    <section id="feed" class="dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10 py-10 dark:text-white" v-if="blog.length > 0">
            <div class="min-h-60 lg:w-96 w-full bg-blue-100 dark:bg-gray-800 p-3 rounded relative" v-for="blog in blog" :key="blog.index">
              <div class="absolute top-4 left-3 z-10">
                <router-link :to="'/kategori/'+blog.kategori" class="bg-green-300 uppercase dark:bg-green-800 px-3 py-2 mr-3 rounded font-bold opacity-75 hover:opacity-100">{{blog.kategori}}</router-link>
              </div>
              <router-link :to="'/blog/'+blog.id+'/'+blog.judul">
                <img :src="blog.gambar" alt="" class="object-contain rounded hover:opacity-60">
              </router-link>
              <div class="px-4">
                <router-link :to="'/blog/'+blog.id+'/'+blog.judul">
                  <h2 class="font-bold my-3 text-xl hover:underline">{{blog.judul}}</h2>
                </router-link>
              </div>
              <div class="flex items-center px-4 pt-5 pb-3 border-t border-blue-200 dark:border-gray-900">
                <img src="https://raflidev.netlify.app/img/watermark.fa94af42.jpg" alt="" class="object-contain h-6 rounded-full ring-3 mr-4 ring-white">
                <span class="text-sm dark:text-white text-gray-700">Muhammad Rafli Ramadhan</span>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10 py-10 dark:text-white">
            <div class="min-h-60 lg:w-96 w-full bg-blue-100 dark:bg-gray-800 p-3 rounded relative animate-pulse" v-for="blog in 6" :key="blog.index">
              <div class="absolute top-4 left-3 z-10">
                <div class="bg-green-300 uppercase dark:bg-green-800 px-3 py-2 mr-3 rounded font-bold opacity-75 hover:opacity-100 h-7 w-20"></div>
              </div>
                <div class="object-contain rounded h-40 w-full bg-blue-400 dark:bg-gray-600"></div>
              <div class="px-1 mt-2">
                  <div class="bg-gray-600 w-full h-6"></div>
              </div>
              <div class="px-1 my-2">
                  <div class="bg-gray-600 w-1/2 h-6"></div>
              </div>
              <div class="flex items-center px-4 pt-5 pb-3 border-t border-blue-200 dark:border-gray-900">
                <div class="h-6 rounded-full mr-4 w-7 bg-gray-600"></div>
                <span class="text-sm dark:text-white text-gray-700 h-6 w-full bg-gray-600 rounded"></span>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import Landing from "@/components/Landing"
import axios from 'axios'
export default {
name:"Feed",
  data(){
    return{
      blog:[]
    }
  },
  components:{
    Landing
  },
  mounted(){
      axios.get("/data.json").then(res => {
        this.blog = res.data.blog
      })
  }
}
</script>

<style>

</style>