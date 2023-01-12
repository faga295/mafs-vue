<script setup lang="ts">


</script>

<template>
  <div :style="{width: '100vw'}">
    <Mafs>
      <CartesianCoordinates :subdivision="4"></CartesianCoordinates>
      <PlotOfx :y="(x) => Math.sin(x)"></PlotOfx>
    </Mafs>
  </div>
</template>

