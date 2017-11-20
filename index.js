import default from "vue";

function  install (Vue, Store) {
  Vue.prototype.$$store = Store
  Vue.prototype.$dispatch = Store.dispatch

  const vm = new Vue({
    data () {
      return {
        state: Store.getState()
      }
    }
  })
  Vue.prototype.$store = vm

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
