<script lang="ts" setup>

const props = defineProps({
    source:{
        type: String
    }
})
</script>

<template>
    <div>
        {{props.source }}
    </div>
</template>