# install
>Please note that mafsv only supports Vue3. If you are using Vue2, you may look at other libraries.

## Using Package Manager
```
# Choose a package manager you like.

# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
```
## Import In Browser
Accroding to different CDN provider, there are different import solution.
there are unpkg and jsDelivr examples:
### unpkg
```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/mafsv/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/mafsv"></script>
</head>
```
### jsDelivr
```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/mafsv/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/mafsv"></script>
</head>
```