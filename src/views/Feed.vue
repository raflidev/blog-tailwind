<template>
  <div>
    <Landing/>
    <section id="feed" class="dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10 py-10 dark:text-white">
            <div class="min-h-64 lg:w-96 w-full bg-blue-100 dark:bg-gray-800 p-3 rounded relative" v-for="item in 6" :key="item.index">
              <div class="absolute top-4 left-3">
                <a href="" class="bg-green-300 dark:bg-green-800 px-3 py-2 mr-3 rounded font-bold opacity-75 hover:opacity-100">HTML</a>
              </div>
              <router-link to="/blog/Lorem ipsum dolor sit.">
                <img src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/hNQEpv1uR5UdRen5xP9Cjxez/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882" alt="" class="object-contain rounded">
              </router-link>
              <div class="px-4">
                <h2 class="font-bold my-3 text-xl">Lorem ipsum dolor sit.</h2>
              </div>
              <div class="flex items-center px-4 pt-5 pb-3">
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
import Landing from "@/components/Landing"
export default {
name:"Feed",
  components:{
    Landing
  }
}
</script>

<style>

</style>