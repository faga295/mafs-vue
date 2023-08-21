<script setup lang="ts">
import { vec } from "mafsv";
const vec1: vec.Vector = [1, 1];
const angle = Math.atan2(vec1[1], vec1[0]);
console.log(angle);

const vec2 = vec.add(vec1, vec.rotate(vec1, angle));
const vec3 = vec.add(vec1, vec.rotate(vec2, -2 * angle));
</script>

<template>
  <div :style="{ width: '100vw' }">
    <Mafs :view-box="{ x: [-10, 10], y: [-6, 6], padding: 0 }">
      <CartesianCoordinates :subdivision="4"></CartesianCoordinates>
      <PlotOfx :y="(x) => Math.sin(x)"></PlotOfx>
      <Point :x="-1" :y="1"></Point>
      <Text :y="3">I love code!</Text>
      <Line>
        <template #point1>
          <Point :x="2" :y="2"></Point>
        </template>
        <template #point2>
          <Point :x="3" :y="3"></Point>
        </template>
      </Line>
      <Vector :tip="vec1"></Vector>
      <Vector :tip="vec2" :tail="vec1"></Vector>
      <Vector :tip="vec3" :tail="vec2"></Vector>
      <MovablePoint :x="2" :y="4"></MovablePoint>
    </Mafs>
  </div>
</template>
