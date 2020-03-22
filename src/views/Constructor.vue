<template>
	<div class="constructor">
		<base-block v-for="block in 1"
		            :key="block"
		            :type="block"
		            :id="block"/>
	</div>
</template>

<script>
	import BaseBlock from '../components/Block/BaseBlock';

	export default {
		name: 'constructor',
		components: {
			BaseBlock
		}
	};

</script>

<style>

</style>
