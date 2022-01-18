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
        <ul>
          <li v-for="fontsize in list">
            <div :class="fontsize">測試文字大小</div>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        list: [
          "text-xs",
          "text-sm",
          "text-base",
          "text-lg",
          "text-xl",
          "text-2xl",
          "text-3xl",
          "text-4xl",
          "text-5xl",
          "text-6xl",
          "text-7xl",
          "text-8xl",
          "text-9xl",
        ],
      };
    },
  };
</script>