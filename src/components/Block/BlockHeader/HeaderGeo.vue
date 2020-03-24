<template>
	<div class="header-geo">
		<q-input v-model="text" :label="$t('base.geo.inputLabel')"/>
		<header-actions @clickOnCancel="$emit('clickOnCancel')"/>
	</div>
</template>

<script>
	import HeaderActions from './HeaderActions';

	export default {
		name: 'header-geo',
		components: {
			HeaderActions
		},
		data() {
			return {
				text: ''
			};
		}
	};
</script>
