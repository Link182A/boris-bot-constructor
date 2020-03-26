<template>
	<q-faba @touchstart.stop @mousedown.stop
	        icon="fas fa-plus"
	        color="primary"
	        size="md"
	        :ripple=false
	        :fab=false
	        direction="down">

		<q-fab-action color="primary"
		              @click="onClick"
		              icon="fas fa-plus-square"
		              label-position="left"
		              :label="$t('base.transfers.addBlock')"/>

		<q-fab-action color="primary"
		              @click="onClick"
		              icon="fab fa-hubspot"
		              label-position="left"
		              :label="$t('base.transfers.goToBlock')"/>

		<q-fab-action color="primary"
		              @click="onClick"
		              icon="fas fa-code-branch"
		              label-position="left"
		              :label="$t('base.transfers.goToScript')"/>

		<q-fab-action color="primary"
		              @click="onClick"
		              icon="fas fa-directions"
		              label-position="left"
		              :label="$t('base.transfers.action')"/>
	</q-faba>
</template>

<script>
	import { QFab } from 'quasar';

	const qFaba = {
		extends: QFab,
		props: {
			ripple: Boolean
		}
	};

	export default {
		name: 'transfer-button',
		components: {
			qFaba
		},
		methods: {
			onClick() {
				console.log('jo');
			}
		}
	};
</script>

<style lang="scss">
	.q-btn--fab .q-btn__wrapper {
		padding: 6px;
		min-width: unset;
		min-height: unset;
	}
</style>
