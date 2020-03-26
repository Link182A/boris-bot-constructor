<template>
	<div class="constructor">
		<component v-for="block in blocks"
		           :is="block.type"
		           :key="block.id"
		           :block="block"/>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import TimeoutBlock from '../components/Constructor/Block/TimeoutBlock';

	export default {
		name: 'constructor',
		components: {
			TimeoutBlock
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
