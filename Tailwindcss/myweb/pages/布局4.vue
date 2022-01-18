<template>
  <div>
    <!-- 左右菜单栏布局 -->
    <div>
      <div>菜单栏</div>
      <div>主内容区</div>
    </div>
    <!-- 按1/3，2/3比例分配功能页面区 -->
    <div class="grid grid-cols-3">
      <div class="bg-gray-300 col-span-1">菜单栏</div>
      <div class="bg-red-300 col-span-2">主内容区</div>
    </div>
    <!-- 响应式分配:md以上布局采用1/3,2/3样式 -->
    <div class="grid md:grid-cols-3">
      <div class="bg-gray-300 md:col-span-1">菜单栏</div>
      <div class="bg-red-300 md:col-span-2">主内容区</div>
    </div>
  </div>
</template>