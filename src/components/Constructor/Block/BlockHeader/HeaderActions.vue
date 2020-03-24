<template>
	<q-card-actions align="around" @touchstart.stop @mousedown.stop>
		<q-btn @click="$emit('clickOnCancel')"
		       class="btn-fixed-width"
		       icon="fas fa-arrow-left">

			<span class="q-ml-sm">{{$t('base.addImage.back')}}</span>
		</q-btn>

		<q-btn class="btn-fixed-width"
		       icon="fas fa-check">

			<span class="q-ml-sm">{{$t('base.addImage.save')}}</span>
		</q-btn>
	</q-card-actions>
</template>

<script>
	export default {
		name: 'header-actions'
	};
</script>

<style lang="scss">
	.btn-fixed-width {
		width: 48%;
	}
</style>
