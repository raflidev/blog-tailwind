<template>
  <section>
    <div class="relative">
      <div class="w-full opacity-50 h-40 lg:h-42 bg-blue-500 object-contain bg-cover bg-center" style="background-image:url('https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/hNQEpv1uR5UdRen5xP9Cjxez/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882')">
        <!-- <img class="object-contain rounded bg-scroll opacity-50" src="" alt=""> -->
      </div>
      <div class="absolute top-1/2 text-center w-full">
        <p class="text-xl lg:text-4xl font-bold text-center">
          {{$route.params.blog_id}}
        </p>
      </div>
    </div>

    <div class="flex justify-center dark:bg-gray-800">
      <div class="w-3/4 text-lg dark:text-white py-6">
        <p class="mb-3 text-justify" v-for="item in 4" :key="item.index">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum iste voluptas enim ipsum illo eligendi laudantium cumque? Excepturi esse, necessitatibus illo, aliquam incidunt explicabo numquam iste est fuga amet voluptatibus repudiandae.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>