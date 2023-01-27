<script lang="ts" setup>
import { computed } from 'vue'
import { CodeOutline } from '@vicons/ionicons5'
// import hljs from 'highlight.js/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript'
// import hljsVuePlugin from "@highlightjs/vue-plugin";
// import html from 'highlight.js/lib/languages/html'
// hljs.registerLanguage('html', html)
// hljs.registerLanguage('javascript', javascript)

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()
// const hljsVue = hljsVuePlugin.component
const codeVisible = ref(false)

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})
const toggleCodeVisible = () => {
    codeVisible.value = !codeVisible.value
}
const code = computed(() => decodeURIComponent(props.source))
console.log(code);

// console.log(code);

</script>

<template>
    <div rounded-md border-2 border-gray-200 border-solid>
        <div w-full >
            <component :height="300" :is="formatPathDemos[props.path]"></component>
        </div>
        <div h-10 w-full flex justify-end items-center border-solid border-gray-200 border-0 border-t-2>
            <n-popover>
                <template #trigger>
                    <n-icon pr-7 cursor-pointer @click="toggleCodeVisible">
                        <CodeOutline></CodeOutline>
                    </n-icon>
                </template>
                <span>{{codeVisible ? 'Hide Code': 'Show Code'}}</span>
           </n-popover>
        </div>
        <!-- <n-code :code="code" :hljs="hljs" language="html"></n-code> -->
        <n-collapse-transition :show="codeVisible">
            <div  v-html="code" overflow-x-auto border-solid border-gray-200 border-t-2 border-0 ></div>
        </n-collapse-transition>
    </div>
</template>