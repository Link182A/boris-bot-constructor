<template>
	<div class="row no-wrap block-header">
		<div class="row items-center name-wrapper"
		     @touchstart.stop @mousedown.stop
		>
			<q-icon name="far fa-clock"
			        size="sm"
			        class="text-primary"
			/>
			<p class="column q-ma-none q-ml-xs name">
				<b>Блок</b>
				Таймаут
			</p>
		</div>

		<div class="row self-center q-ml-auto text-grey-14"
		     @touchstart.stop @mousedown.stop
		>
			<q-btn flat round>
				<q-icon name="far fa-clone" size="sm"/>
			</q-btn>

			<q-btn flat round>
				<q-icon name="fas fa-map-marker-alt" size="sm"/>
			</q-btn>

			<q-btn flat round>
				<q-icon name="fas fa-file-image" size="sm"/>
			</q-btn>

			<q-btn flat round>
				<q-icon name="fas fa-times" size="sm"/>
			</q-btn>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'block-header'
	}

</script>

<style lang="scss" scoped>
	.name {
		line-height: 1.2;
	}
</style>
