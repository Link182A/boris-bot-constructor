<template>
	<div class="column">
		<q-btn flat
		       round
		       @touchstart.stop @mousedown.stop
		       size="xl"
		       icon="fas fa-plus-circle"
		       class="q-mx-auto q-my-sm">
		</q-btn>

		<p class="q-mx-auto">{{$t('base.addImage.photoCaption')}}</p>

		<header-actions @clickOnCancel="$emit('clickOnCancel')"/>
	</div>
</template>

<script>
	import HeaderActions from './HeaderActions';

	export default {
		name: 'header-add-image',
		components: {
			HeaderActions
		}
	};
</script>
