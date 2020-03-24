<template>
	<div class="constructor">
		<timeout-block v-for="block in 1"
		            :key="block"
		            :type="block"
		            :id="block"/>
	</div>
</template>

<script>
	import TimeoutBlock from '../components/Constructor/Block/TimeoutBlock';

	export default {
		name: 'constructor',
		components: {
			TimeoutBlock
		}
	};

</script>

<style>

</style>
