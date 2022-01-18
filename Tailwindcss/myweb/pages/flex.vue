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

      <body>
        <p>默認</p>
        <div class="text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>行布局</p>
        <div class="flex flex-row text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>行布局-反轉</p>
        <div class="flex flex-row-reverse text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>列布局</p>
        <div class="flex flex-col text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>列布局反轉</p>
        <div class="flex flex-col-reverse text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>內容左對齊</p>
        <div class="flex justify-start text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>內容右對齊</p>
        <div class="flex justify-end text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>內容居中</p>
        <div class="flex justify-center text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>內容平均對齊1</p>
        <div class="flex justify-between text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>內容平均對齊2</p>
        <div class="flex justify-around text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>內容平均對齊3</p>
        <div class="flex justify-evenly text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-10 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-10 bg-bootstrap_danger text-white m-2">3</div>
        </div>

        <p>水平對齊 原始</p>
        <div class=" text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-20 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-32 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>水平對齊 原始</p>
        <div class="flex  text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-20 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-32 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>水平對齊 上對齊 原始</p>
        <div class="flex items-start text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-20 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-32 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>水平對齊 中對齊 原始</p>
        <div class="flex items-center text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-20 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-32 bg-bootstrap_danger text-white m-2">3</div>
        </div>
        <p>水平對齊 下對齊 原始</p>
        <div class="flex items-end text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div class="w-10 h-20 bg-bootstrap_success text-white m-2">2</div>
          <div class="w-10 h-32 bg-bootstrap_danger text-white m-2">3</div>
        </div>

        <p>水平對齊 基準線對齊 原始</p>
        <div class="flex items-baseline text-center bg-gray-100 mt-3">
          <div class="w-10 h-10 bg-bootstrap_primary text-white m-2">1</div>
          <div
            class="w-10 h-20 bg-bootstrap_success text-white m-2
            flex
            justify-center
            items-center"
          >2</div>
          <div class="w-10 h-32 bg-bootstrap_danger text-white m-2">3</div>
        </div>
      </body>

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