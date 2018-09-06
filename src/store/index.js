import Vue from 'vue'
import Vuex from 'vuex'

import beersStore from '@/store/beers'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loading: true,
		count: 0
	},
	modules: {
		beersStore
	},
	mutations: {
		setLoading(state) {
			state.loading = true
		},
		hideLoading(state) {
			state.loading = false
		},
		increment(state) {
			state.count++
		},
		decrement(state) {
			state.count--
		}
		},
	actions: {
		setLoading(context) {
			context.commit('setLoading')
		},
		hideLoading(context) {
			context.commit('hideLoading')
		},
		increment(context) {
			context.commit('increment')
		},
		decrement(context) {
			context.commit('decrement')
		}
	}
})
