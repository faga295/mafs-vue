<script setup lang="ts">


</script>

<template>
  <div :style="{width: '500px'}">
    <Mafs>
      <CartesianCoordinates :subdivision="4"></CartesianCoordinates>
      <PlotOfx :y="(x:number) => Math.sin(x)"></PlotOfx>
    </Mafs>
  </div>
</template>

