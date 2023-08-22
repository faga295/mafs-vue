<template>
  <Mafs>
    <CartesianCoordinates></CartesianCoordinates>
    <Vector :tip="vec1"></Vector>
    <Vector :tip="vec2" :tail="vec1"></Vector>
    <Vector :tip="vec3" :tail="vec2"></Vector>
  </Mafs>
</template>

<script setup lang="ts">
import { vec } from "mafsv";
const vec1: vec.Vector = [1, 1];
const angle = Math.atan2(vec1[1], vec1[0]);

const vec2 = vec.add(vec1, vec.rotate(vec1, angle));
const vec3 = vec.add(vec1, vec.rotate(vec2, -2 * angle));
</script>
