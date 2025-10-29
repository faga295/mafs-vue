<script setup lang="ts">


const href = `https://github.com/vuejs/art/blob/master/logo.png?raw=true`;
</script>

<template>
  <Mafs>
    <CartesianCoordinates />
    <Image
      :href="href"
      :x="0"
      :y="0"
      :width="4"
      :height="4"
      anchor="cc"
      preserve-aspect-ratio="xMidYMid slice"
    />
  </Mafs>
</template>
