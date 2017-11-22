function  install (Vue, Store) {
  var vm = new Vue({
    data: function () {
      return {
        state: Store.getState()
      }
    }
  })
  Vue.prototype.$state = vm.state
  Vue.prototype.$redux = Store
  Vue.prototype.$dispatch = Store.dispatch

  Store.subscribe(function () {
    var state = Store.getState()
    for (let key in state) {
      vm.state[key] = state[key]
    }
  })
}

module.exports = {
  install: install
}