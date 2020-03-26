<template>
	<q-layout style="height: 100vh">
		<app-sidebar/>

		<q-page-container>
			<q-page padding class="scroll">
				<router-view/>
			</q-page>
		</q-page-container>
	</q-layout>
</template>

<script>
	import AppSidebar from '@/components/AppSidebar';

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
			return {};
		}
	};
</script>

<style lang="scss">
	@import "styles/main";
</style>
