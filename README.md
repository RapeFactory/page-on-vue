# page-on-vue

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
#### Don't forget vue.config.js

``` js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/page-on-vue/'
    : '/'
}
```
### Lints and fixes files

```
npm run lint
```

### GH Pages deploy

```
npm run deploy
```
