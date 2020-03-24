<template>
	<div class="row self-center q-ml-auto text-grey-14"
	     @touchstart.stop
	     @mousedown.stop>

		<q-btn flat
		       round
		       size="md"
		       icon="far fa-clone">

			<q-tooltip anchor="top middle" :offset="[35, 35]">
				{{$t('base.tooltips.clone')}}
			</q-tooltip>
		</q-btn>

		<q-btn @click="$emit('clickOnGeo')"
		       flat
		       round
		       size="md"
		       icon="fas fa-map-marker-alt"
		       :class="{active:isGeoVisible}">

			<q-tooltip anchor="top middle" :offset="[35, 35]">
				{{$t('base.tooltips.geo')}}
			</q-tooltip>
		</q-btn>

		<q-btn @click="$emit('clickOnImage')"
		       flat
		       round
		       size="md"
		       icon="fas fa-file-image"
		       :class="{active: isAssetsVisible}">

			<q-tooltip anchor="top middle" :offset="[35, 35]">
				{{$t('base.tooltips.addImage')}}
			</q-tooltip>
		</q-btn>

		<q-btn flat
		       round
		       disable
		       size="md"
		       icon="fas fa-times">

			<q-tooltip anchor="top middle" :offset="[35, 35]">
				{{$t('base.tooltips.remove')}}
			</q-tooltip>
		</q-btn>
	</div>
</template>

<script>
	export default {
		name: 'header-options',
		props: {
			isAssetsVisible: {
				type: Boolean
			},
			isGeoVisible: {
				type: Boolean
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '../../../../styles/quasar.variables';

	.active {
		color: $primary;
	}
</style>
