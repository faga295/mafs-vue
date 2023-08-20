<script setup lang="ts"></script>

<template>
  <div :style="{ width: '100vw' }">
    <Mafs :view-box="{ x: [-10, 10], y: [-6, 6], padding: 0 }">
      <CartesianCoordinates :subdivision="4"></CartesianCoordinates>
      <PlotOfx :y="(x) => Math.sin(x)"></PlotOfx>
      <Point :x="1" :y="1"></Point>
      <Text :y="3">I love code!</Text>
      <Line>
        <template #point1>
          <Point :x="1" :y="1"></Point>
        </template>
        <template #point2>
          <Point :x="2" :y="2"></Point>
        </template>
      </Line>
      <Vector :tip="[3, 4]"></Vector>
      <MovablePoint :x="2" :y="4"></MovablePoint>
    </Mafs>
  </div>
</template>
