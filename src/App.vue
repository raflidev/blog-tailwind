<template>
   <main class="font-montserrat antialiased">
    <nav class="bg-white dark:bg-gray-900 dark:text-white">
      <div class="container mx-auto">
        <div class="flex items-center justify-between p-6">
          <router-link to="/" class="font-bold text-xl  tracking-tight">RafliBlog</router-link>
          <div  class="hidden md:flex md:flex-row md:block">
            <router-link to="/kategori" active-class="bg-gray-300 text-gray-800"  exact class="font-xl dark:hover:bg-gray-600 hover:bg-blue-200 rounded font-medium px-4 py-3 mx-1">Kategori</router-link>
            <router-link to="/jurnal" active-class="bg-gray-300 text-gray-800" exact class="font-xl dark:hover:bg-gray-600 hover:bg-blue-200 rounded font-medium px-4 py-3 mx-1">Jurnalmu</router-link>
            <router-link to="/tentang" active-class="bg-gray-300 text-gray-800" exact class="font-xl dark:hover:bg-gray-600 hover:bg-blue-200 rounded font-medium px-4 py-3 mx-1">Tentang</router-link>
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
            <router-link to="/login" class="font-xl bg-blue-600 hover:bg-blue-400 text-white rounded font-bold px-4 py-3">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
    <Footer/>
    <div >
	<section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow dark:bg-gray-900 dark:text-white"> 
		<div id="tabs" class="flex justify-between">
			<router-link to="/" active-class="bg-gray-300 text-gray-800 dark:text-gray-300 dark:bg-gray-800" exact class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
				<span class="tab tab-home block text-xs">Home</span>
			</router-link>
			<router-link to="/kategori" active-class="bg-gray-300 text-gray-800 dark:text-gray-300 dark:bg-gray-800" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
				<span class="tab tab-kategori block text-xs">Kategori</span>
			</router-link>
			<router-link to="/tentang" active-class="bg-gray-300 text-gray-800 dark:text-gray-300 dark:bg-gray-800" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
				<span class="tab tab-explore block text-xs">Tentang</span>
			</router-link>
			<div class="bg-gray-300 dark:bg-gray-700 w-full flex items-center focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
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
import Footer from "@/components/Footer"
export default {
name:"App",
data(){
  return{
    dark:false
  }
},
components:{
  Footer
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
