<script lang="ts" setup>
const demoProps = {
    source:{
        type: String
    }
}
const props = defineProps(demoProps)
</script>

<template>
    <div>
        {{props.source }}
    </div>
</template>