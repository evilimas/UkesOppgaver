<template>
  <div>
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>

<style scoped>
* {
  color: white !important;
}
div {
  background: blue;
  color: white;
}
a {
  color: white !important;
  text-decoration: none;
  font-weight: 900;
}
a:link,
a:visited,
a:hover {
  color: white;
  text-decoration: underline;
}
</style>
