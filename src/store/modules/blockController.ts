import { BlockState, Block } from '../types';
import CONSTANTS from '../../constants';

export default {
	state: {
		blocks: [
			{
				id: 1,
				type: CONSTANTS.BLOCK_TYPES.TIMEOUT,
				x: 20,
				y: 50
			},
			{
				id: 2,
				type: CONSTANTS.BLOCK_TYPES.BUTTONS,
				x: 20,
				y: 50
			}
		]
	},

	mutations: {
		SET_BLOCK_POSITION(state: BlockState, payload: Block) {
			const currentIndex = payload.index;

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
