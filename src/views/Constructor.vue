<template>
	<div class="constructor">
		<base-block v-for="_ in 1"/>
	</div>
</template>

<script>
	import BaseBlock from '../components/Block/BaseBlock'
	export default {
		name: 'constructor',
		components:{
			BaseBlock
		}
	}

</script>

<style>

</style>
