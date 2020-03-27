<template>
	<div class="constructor">
		<component v-for="(block, index) in blocks"
		           :is="block.type"
		           :key="block.id"
		           :block="{
		           	    ...block,
		                index:index
		           }"/>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import TimeoutBlock from '../components/Constructor/Block/TimeoutBlock';
	import ButtonBlock from '../components/Constructor/Block/ButtonBlock';
	import CONSTANTS from '../constants';

	export default {
		name: 'constructor',
		components: {
			[CONSTANTS.BLOCK_TYPES.TIMEOUT]: TimeoutBlock,
			[CONSTANTS.BLOCK_TYPES.BUTTONS]: ButtonBlock
		},
		computed: {
			...mapState('blockController', {
				blocks: 'blocks'
			})
		}
	};

</script>

<style>

</style>
