
import { CartesianCoordinates } from 'mafsv';

<template>
<Mafs :view-box="{x:[-10, 10], y:[-6,6], padding: 0}">
      <CartesianCoordinates :subdivision="4"></CartesianCoordinates>
      <PlotOfx :y="(x) => Math.sin(x)"></PlotOfx>
      <Point :x="1" :y="1"></Point>
      <Text :x="-3" :y="3">I love code!</Text>
</Mafs>
</template>