/* eslint-env serviceworker */
(function () {
  self.getTemplate = function (templateUrl) {
    self.caches.match(templateUrl).then(function (response) {
      return response.text()
    })
  }
  self.renderTemplate = function (template, state) {
    return ''
  }
  function Router () {
    this.routes = new Map()
    this.current = null
  }
  Router.prototype.route = function (route, template) {
    // route should be a regex
    if (typeof route === 'string') {
      this.router.set(new RegExp('^' + route.replace(/:.*\//g, '(.*)/') + '$'), template)
    }
    this.routes.set(route, template)
  }
  Router.prototype.match = function (url, state) {
    for (var regex in this.router.keys()) {
      if (regex.test(url)) {
        this.current = this.routes.get(regex)
        break
      }
    }
    if (state) {
      return self.renderTemplate(this.current, state)
    }
    return this.current
  }
})()
