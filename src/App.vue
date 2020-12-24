<template>
  <main class="font-montserrat antialiased">
    <nav class="bg-white dark:bg-gray-900 dark:text-white">
      <div class="container mx-auto">
        <div class="flex items-center justify-between p-6">
          <span class="font-bold text-xl  tracking-tight">RafliBlog</span>
          <div  class="hidden md:flex md:flex-row md:block">
            <a href="" class="font-xl dark:hover:bg-gray-600 hover:bg-blue-200 rounded font-medium px-4 py-3">Kategori</a>
            <a href="" class="font-xl dark:hover:bg-gray-600 hover:bg-blue-200 rounded font-medium px-4 py-3">Jurnalmu</a>
            <a href="" class="font-xl dark:hover:bg-gray-600 hover:bg-blue-200 rounded font-medium px-4 py-3">Tentang</a>
          </div>
          <div class="md:flex md:flex-row md:block">
            <div class="hidden md:flex md:items-center md:flex-row md:block mr-5">
              <div v-if="dark">
                <svg width="25" height="25" @click="darkmode('light')" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div v-else>
                <svg width="25" height="25" @click="darkmode('dark')" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <a href="" class="font-xl bg-blue-600 hover:bg-blue-400 text-white rounded font-bold px-4 py-3">Login</a>
          </div>
        </div>
      </div>
    </nav>
    <section id="landing">
      <div class="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-32 px-3 text-center rounded">
        <h1 class="font-bold text-4xl tracking-tight">Blog Seputar Web Development</h1>
        <p class="text-xl mt-2 text-shadow">Mari belajar bareng-bareng, dari awal sampai akhir. 😎💡</p>
        <div class="mt-8">
          <a href="#feed" class="bg-blue-600 hover:bg-blue-500 font-medium shadow-md text-white py-3 px-4 rounded">Ayo Mulai!</a>
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
    <section id="footer">
      <div class="w-full lg:h-32 h-42 pb-20 bg-blue-300 dark:bg-blue-800 dark:text-white">
        <div class="container mx-auto flex flex-wrap justify-between items-center pt-10">
          <div>
            <span class="font-bold text-xl tracking-tight">RafliBlog</span>
            <p>Blog Seputar Web Development</p>
          </div>
          <div>
            <p class="font-medium">Rafli Ramadhan &copy; 2020</p>
            <p>made with ❤️ in Bekasi </p>
          </div>
        </div>
        
      </div>
    </section>
    <div >
	<section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow dark:bg-gray-900 dark:text-white"> 
		<div id="tabs" class="flex justify-between">
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
				<span class="tab tab-home block text-xs">Home</span>
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
				<span class="tab tab-kategori block text-xs">Kategori</span>
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
				<span class="tab tab-explore block text-xs">Tentang</span>
			</a>
			<div class="bg-gray-300 dark:bg-gray-700 w-full flex items-center focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
        <div v-if="dark">
          <svg width="25" height="25" @click="darkmode('light')" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- <button  @click="darkmode('light')" class="focus:outline-none w-4 h-4 bg-gray-200 rounded-full mr-2">
          </button> -->
        </div>
        <div v-else>
          <svg width="25" height="25" @click="darkmode('dark')" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>
          <!-- <button  @click="darkmode('dark')" class="focus:outline-none w-4 h-4 bg-gray-800 rounded-full "></button> -->
        </div>
			</div>
		</div>
	</section>
    </div>
  </main>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
main{
  scroll-behavior: smooth;
}
</style>
<script>
export default {
name:"App",
data(){
  return{
    dark:false
  }
},
mounted(){
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('main').classList.add('dark')
    this.dark = true
  } else {
    document.querySelector('main').classList.remove('dark')
    this.dark = false
  }
},
methods:{
  darkmode(value){
    localStorage.setItem('theme', value)
    document.querySelector("main").classList.add(localStorage.getItem('theme'))
    if (value == 'dark'){
      document.querySelector("main").classList.remove('light')
      this.dark = true
    }else{
      document.querySelector("main").classList.remove('dark')
      this.dark = false
    }
  }
}
}
</script>

<style>

</style>