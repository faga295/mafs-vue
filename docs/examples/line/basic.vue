<template>
  <Mafs>
    <CartesianCoordinates></CartesianCoordinates>
    <Line>
      <template #point1>
        <Point :x="1" :y="1"></Point>
      </template>
      <template #point2>
        <Point :x="2" :y="2"></Point>
      </template>
    </Line>
  </Mafs>
</template>
