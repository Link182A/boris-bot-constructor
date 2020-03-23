<template>
	<div class="row self-center q-ml-auto text-grey-14"
	     @touchstart.stop
	     @mousedown.stop>

		<q-btn flat
		       round
		       size="md"
		       icon="far fa-clone"/>

		<q-btn flat
		       round
		       size="md"
		       icon="fas fa-map-marker-alt"/>

		<q-btn flat
		       round
		       size="md"
		       icon="fas fa-file-image"/>

		<q-btn flat
		       round
		       size="md"
		       icon="fas fa-times"/>
	</div>
</template>

<script>
	export default {
		name: 'header-options'
	};
</script>
