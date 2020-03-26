export default {
	state: {
		blocks: [
			{
				id: 1,
				type: 'timeout-block',
				x: 20,
				y: 50
			},
			{
				id: 2,
				type: 'timeout-block',
				x: 20,
				y: 50
			}
		]
	},

	mutations: {
		SET_BLOCK_POSITION(state, payload) {
			const currentIndex = state.blocks.findIndex(
				block => block.id === payload.id
			);

			const newProps = {
				...state.blocks[currentIndex],
				x: payload.x,
				y: payload.y
			};

			state.blocks.splice(currentIndex, 1, newProps);
		}
	},
	actions: {},
	getters: {},
	namespaced: true
};
