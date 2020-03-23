<template>
	<div class="row self-center q-ml-auto text-grey-14"
	     @touchstart.stop
	     @mousedown.stop>

		<q-btn flat
		       round
		       size="md"
		       icon="far fa-clone"/>

		<q-btn @click="$emit('clickOnGeo')"
		       flat
		       round
		       size="md"
		       icon="fas fa-map-marker-alt"
		       :class="{active:isGeoVisible}"/>

		<q-btn @click="$emit('clickOnImage')"
		       flat
		       round
		       size="md"
		       icon="fas fa-file-image"
		       :class="{active: isAssetsVisible}"/>

		<q-btn flat
		       round
		       size="md"
		       icon="fas fa-times"/>
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
	@import '../../../styles/quasar.variables';

	.active {
		color: $primary;
	}
</style>
