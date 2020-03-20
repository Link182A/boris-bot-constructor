<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/1/constructor">About</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		mounted() {
			console.log(process.env);
			console.log(this.$q.lang.isoName);
			// console.log(this.$t('test'));
		}
	}
</script>

<style lang="scss">
	@import "styles/main";
</style>
