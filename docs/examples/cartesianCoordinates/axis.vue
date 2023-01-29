<template>
    <Mafs>
        <CartesianCoordinates :x-axis="{line: Math.PI, labels: labelPi }"></CartesianCoordinates>
        <PlotOfx :y="Math.sin"></PlotOfx>
    </Mafs>
</template>

<script setup lang="ts">
import { labelPi } from 'mafsv'
</script>