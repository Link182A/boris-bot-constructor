<template>
	<div class="header-geo">
		<q-input v-model="text"
				 dense
				 :label="label"/>
		<optional-action @clickOnCancel="$emit('clickOnCancel')"/>
	</div>
</template>

<script>
	import OptionalAction from './OptionalAction';

	export default {
		name: 'check-action',
		props: {
			label: String
		},
		components: {
			OptionalAction
		},
		data() {
			return {
				text: ''
			};
		}
	};
</script>
