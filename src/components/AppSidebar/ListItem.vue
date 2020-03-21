<template>
	<router-link
			to="/"
			v-slot="{ href }"
	>
		<q-item clickable v-ripple :active=!list.url>
			<q-item-section avatar>
				<q-icon :name="`fas fa-${list.icon}`"/>
			</q-item-section>

			<q-item-section>
				<a :href="list.url && list.url">
					{{list.text}}
				</a>

			</q-item-section>
		</q-item>
	</router-link>
</template>

<script>
	export default {
		name: 'list-item',
		props: {
			list: {
				type: Object
			}
		}
	}
</script>

<style lang="scss" scoped>
	.q-item--active{
		a{
			color: unset;
		}
	}
	a{
		text-decoration: none;
		color: white;
	}
</style>
