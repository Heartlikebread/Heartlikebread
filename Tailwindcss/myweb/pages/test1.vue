<template>
  <div>
    <div class="text-gray-600">
      <header class="mb-5">
        <div class="bg-gray-700 p-4 text-white">helo world</div>
      </header>
      <main class="container mx-auto">
        <div class="text-center text-5xl">我的內容</div>
        <hr class="my-5">
        <div class="flex justify-center">
          <img
            src="http://lorempixel.com/400"
            alt="測試圖"
            class="shadow-lg border my-5"
          >
        </div>
      </main>
      <footer class="mt-5">
        <div class="bg-gray-300 p-4 text-black">你好,測試Tailwind CSS</div>
        <hr>
        <div class="bg-gray-200">
          <div class="p-5 bg-gray-600 text-gray-100 w-60">網站測試</div>
          <div class="pt-10 bg-red-600 text-gray-100 w-60">網站測試</div>
          <div class="pl-10 bg-yellow-600 text-gray-100 w-60">網站測試</div>
          <div class="pr-10 bg-green-600 text-gray-100 w-60 text-right">網站測試</div>
          <div class="px-10 bg-blue-600 text-gray-100 w-60">網站測試</div>
          <div class="py-10 bg-purple-600 text-gray-100 w-60">網站測試</div>

          <div class="m-5 p-5 bg-gray-600 text-gray-100 w-60">網站測試</div>
          <div class="mt-5 pt-10 bg-red-600 text-gray-100 w-60">網站測試</div>
          <div class="ml-5 pl-10 bg-yellow-600 text-gray-100 w-60">網站測試</div>
          <div class="mr-5 pr-10 bg-green-600 text-gray-100 w-60 text-right">網站測試</div>
          <div class="mx-5 px-10 bg-blue-600 text-gray-100 w-60">網站測試</div>
          <div class="my-5 py-10 bg-purple-600 text-gray-100 w-60">網站測試</div>
          <div class="mb-5 py-10 bg-purple-600 text-gray-100 w-60">網站測試</div>
        </div>

        <div>

          <div class="bg-bootstrap_primary">自訂顏色</div>
          <div class="bg-bootstrap_secondary">自訂顏色</div>
          <div class="bg-bootstrap_sucess">自訂顏色</div>
          <div class="bg-bootstrap_danger">自訂顏色</div>
          <div class="bg-bootstrap_info">自訂顏色</div>
          <div class="text-kobig">字體大小</div>
          <div class="font-kofont text-kobig">字體大小</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {};
    },
  };
</script>