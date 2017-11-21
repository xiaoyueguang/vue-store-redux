import Vue from 'vue/dist/vue.esm.js'
import {createStore} from 'redux'
import immutable, {Map, List} from 'immutable'
import VueRedux from './index.js'

window.immutable = immutable

const defaultState = {
  test: List('Hello World!'.split('').map(text => ({text})))
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEST':
      const text = action.payload || 'Hello World!!!'
      return Object.assign({}, state, {test: List(text.split('').map(text => ({text})))})
    case 'CHANGE':
      // console.log(state.test.splice(2, 1))
      return Object.assign({}, state, {test: state.test.set(2, {text: Math.random()})})
    default:
      return Object.assign({}, state)
  }
}

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

Vue.use(VueRedux, store)

window.vm = new Vue({
  el: '#app',
  computed: {
    items () {
      return this.$state.test.toJS()
    }
  }
})


