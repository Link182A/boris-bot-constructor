<template>
	<q-layout style="height: 100vh" class="shadow-2">
		<app-sidebar/>

		<q-page-container>
			<q-page padding>
				<router-view/>

			</q-page>
		</q-page-container>
	</q-layout>
</template>

<script>
	import AppSidebar from '@/components/AppSidebar'

	export default {
		name: 'App',
		components: {
			AppSidebar
		},
		mounted() {
			console.log(process.env);
			console.log(this.$q.lang.isoName);
			console.log(this.$t('test'));
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	@import "styles/main";
</style>
