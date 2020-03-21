<template>
	<q-drawer
			show-if-above
			:width="250"
			dark

			v-model="drawer"
			:mini="miniState"
			@mouseover="miniState = false"
			@mouseout="miniState = true"
			:breakpoint='320'
	>

		<q-scroll-area class="fit">
			<q-list padding>
				<list-item
						v-for="list in drawerItems"
						:list="list"
						:key="list.icon"/>
			</q-list>
		</q-scroll-area>
	</q-drawer>
</template>

<script>
	import ListItem from "./ListItem";

	export default {
		name: 'app-sidebar',
		components: {
			ListItem
		},
		data() {
			return {
				drawer: false,
				miniState: true,
				drawerItems: [
					{
						icon: 'file',
						text: this.$t('constructor')
					},
					{
						icon: 'bell',
						text: this.$t('mailing'),
						url: 'https://dev.surveybot.me/projects/107/surveys/579/constructor'
					},
					{
						icon: 'bolt',
						text: this.$t('actions'),
						url: 'https://dev.surveybot.me/projects/107/surveys/579/constructor'
					},
				]
			}
		}
	}
</script>

<style lang="scss">

</style>
