<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})
</script>

<template>
    <div>
        <div w-full border-1 border-gray-200 border-solid>
            <component :height="300" :is="formatPathDemos[props.path]"></component>
        </div>
    </div>
</template>