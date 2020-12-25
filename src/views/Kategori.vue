<template>
  <div>
    <section class="dark:bg-gray-900 dark:text-white py-10 border-gray-900">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold">Kategori</h1>
        <p class="text-medium mt-4">Ini adalah kategori artikel, kamu bisa pilih sesuai keinginanmu.</p>
        <div class="flex w-full md:w-2/3 items-center flex-wrap mt-4">
          <button class="border w-16 lg:w-20 h-12 lg:h-16 mr-3 flex items-center justify-center mx-1 text-center rounded-lg mb-2 lg:mb-0">
            <a href="">
              <svg  width="25" height="25" class="inline-block mb-1" fill="#ff7214" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
            </a>
          </button>
          <button class="border w-16 lg:w-20 h-12 lg:h-16 mr-3 flex items-center justify-center mx-1 text-center rounded-lg mb-2 lg:mb-0">
            <a href="">
              <svg width="25" height="25" class="inline-block mb-1" fill="#186bf0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
            </a>
          </button>
          <button class="border w-16 lg:w-20 h-12 lg:h-16 mr-3 flex items-center justify-center mx-1 text-center rounded-lg mb-2 lg:mb-0">
            <a href="">
              <svg width="25" height="25" class="inline-block mb-1 bg-black" fill="#F7DF1E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript icon</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
            </a>
          </button>
          <button class="border w-16 lg:w-20 h-12 lg:h-16 mr-3 flex items-center justify-center mx-1 text-center rounded-lg mb-2 lg:mb-0">
            <a href="">
                <svg width="25" height="25" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 221" preserveAspectRatio="xMinYMin meet"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="currentColor"/><path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883"/><path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E"/></svg>
            </a>
          </button>
          
        </div>
      </div>
    </section>
    <section id="feed" class="dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10 py-10 dark:text-white">
            <div class="min-h-64 lg:w-96 w-full bg-blue-100 dark:bg-gray-800 p-3 rounded relative" v-for="item in 6" :key="item.index">
              <div class="absolute top-4 left-3">
                <a href="" class="bg-green-300 dark:bg-green-800 px-3 py-2 mr-3 rounded font-bold opacity-75 hover:opacity-100">HTML</a>
              </div>
              <img src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/hNQEpv1uR5UdRen5xP9Cjxez/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882" alt="" class="object-contain rounded">
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
export default {

}
</script>

<style>

</style>