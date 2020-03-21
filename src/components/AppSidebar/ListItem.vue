<!--:active=!url-->
<template>
	<router-link
			to="/"
			v-slot="{ href }"
	>
		<q-item clickable v-ripple :active=!url>
			<q-item-section avatar>
				<q-icon :name="`fas fa-${icon}`"/>
			</q-item-section>

			<q-item-section>
				<a :href="url && url">
					{{text}}
				</a>

			</q-item-section>
		</q-item>
	</router-link>
</template>

<script>
	export default {
		name: 'list-item',
		props: {
			text: {
				type: String
			},
			icon: {
				type: String
			},
			url: {
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
	a{
		text-decoration: none;
		color: white;
	}
</style>
