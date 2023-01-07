import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ["src/index.ts"],
    esbuildOptions(options, context){
        options.jsx = 'transform'
        options.jsxFactory = 'h'
        options.jsxFragment =  "Fragment"

    }
})