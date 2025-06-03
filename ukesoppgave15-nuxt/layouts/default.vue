<template>
  <div>
    <NuxtLoadingIndicator />
    <p>Some default layout content shared across all pages</p>
    <NuxtTime :datetime="Date.now()" />
    <slot />
  </div>
</template>

<style scoped>
div {
  background: rgb(132, 132, 255);
}
</style>
