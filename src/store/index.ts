import Vue from 'vue';
import Vuex from 'vuex';
import arrowController from './modules/arrowController';
import blockController from './modules/blockController';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},

	modules: {
		arrowController,
		blockController
	},

	strict: process.env.NODE_ENV !== 'production'
});

if (module.hot) {
	module.hot.accept([
		'./modules/arrowController',
		'./modules/blockController'
	], () => {
		const newArrowController = require('./modules/arrowController').default;
		const newBlockController = require('./modules/blockController').default;

		const newArrowMutations = newArrowController.mutations;
		const newBlockMutations = newBlockController.mutations;

		store.hotUpdate({
			mutations: {
				...newArrowMutations,
				...newBlockMutations
			},
			modules: {
				arrowController: newArrowController,
				blockController: newBlockMutations
			}
		});
	});
}

export default store;
