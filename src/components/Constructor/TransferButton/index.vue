<template>
	<q-fab-custom @touchstart.stop @mousedown.stop
	              icon="fas fa-plus"
	              color="primary"
	              size="md"
	              v-click-outside="hideFab"
	              ref="fabRef"
	              @show="$emit('onMenuShow')"
	              @hide="$emit('onMenuHide')"
	              :ripple=false
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
	</q-fab-custom>
</template>

<script>
	import { QFab } from 'quasar';
	import ClickOutside from 'vue-click-outside';

	const qFabCustom = {
		extends: QFab,
		props: {
			ripple: Boolean
		}
	};

	export default {
		name: 'transfer-button',
		directives: {
			ClickOutside
		},
		components: {
			qFabCustom
		},
		methods: {
			onClick() {
				console.log('jo');
			},
			hideFab() {
				this.$refs.fabRef.hide();
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
