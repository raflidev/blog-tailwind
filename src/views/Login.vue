<template>
  <section class="dark:bg-gray-800">
    <div class="flex h-screen">
      <div class="m-auto">
        <div class="w-80 lg:w-96 p-6 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg">
          <div class="text-center">
            <h3 class="text-2xl font-bold">Login</h3>
            <p class="my-2 text-md">Masuk untuk menulis artikel</p>
          </div>
          <div class="mb-4">
            <label for="username" class="block text-grey-darker font-medium">Username</label>
            <input type="text" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 dark:text-black text-grey-darker">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-grey-darker font-medium">Password</label>
            <input type="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 dark:text-black text-grey-darker">
          </div>
           <label class="inline-flex items-center mb-4">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" checked><span class="ml-2 dark:text-white text-gray-700">Ingat saya</span>
            </label>
          <button class="rounded w-full py-2 px-3 dark:bg-blue-900 bg-blue-600 text-white font-medium uppercase text-sm">login</button>
        </div>
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