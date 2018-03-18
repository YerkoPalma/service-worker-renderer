# service-worker-renderer
[![Build Status](https://img.shields.io/travis/YerkoPalma/service-worker-renderer/master.svg?style=flat-square)](https://travis-ci.org/YerkoPalma/service-worker-renderer) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> Service worker side renderer

## Usage

```js
// sw.js
importScript('/.service-worker-renderer.js')

self.addEventListener('fetch', async function (event) {
  event.respondWith(
    const template = await parseTemplate('/article-template.html')
    return new Response(renderTemplate(template, state), {
      headers: {
        'Content-Type': 'text/html'
      }
    })
  )
}
```

```js
// sw.js
importScript('/.service-worker-renderer.js')

// define router
self.addEventListener('install', function (event) {
  // ...
  var router = new Router()
  router.route('/', '/main-template.html')
  router.route('/article', '/article-template.html')

  self.router = router
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    return router.match(event.request.url, state)
  )
}
```

## API
### `getParams`
### `parseTemplate`
### `renderTemplate`
### `Router`
## License
[MIT](/license)
