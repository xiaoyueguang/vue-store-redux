function  install (Vue, Store) {
  const vm = new Vue({
    data () {
      return {
        state: Store.getState()
      }
    }
  })
  Vue.prototype.$state = vm.state
  window.vvv = vm
  Vue.prototype.$redux = Store
  Vue.prototype.$dispatch = Store.dispatch

  Store.subscribe(() => {
    const state = Store.getState()
    for (let key in state) {
      vm.state[key] = state[key]
    }
  })
}

export default {
  install
}
